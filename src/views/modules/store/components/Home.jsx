import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { queryClient } from "../../../..";
import { getCars } from "../../../../services";
import Spinner from "../../../components/loaders/Spinner";

import Filter from "../../car/components/Filter";
import ProductCard from "../../car/components/ProductCard";

export default function StoreHome({ searchString }) {
  const { storeId } = useParams();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);
  const [toggle, setToggle] = useState("new");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const { isFetching, isLoading, data, refetch } = useQuery(
    [
      "storeCars",
      page,
      perPage,
      toggle,
      minPrice,
      maxPrice,
      selectedCategory,
      storeId,
      searchString,
    ],
    () =>
      getCars(page, perPage, toggle, minPrice, maxPrice, selectedCategory, storeId, searchString),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data?.data?.logs?.hasNextPage) {
      queryClient.prefetchQuery(
        [
          "storeCars",
          page + 1,
          perPage,
          toggle,
          minPrice,
          maxPrice,
          selectedCategory,
          searchString,
        ],
        () => getCars(page + 1, perPage, toggle, minPrice, maxPrice, selectedCategory, searchString)
      );
    }
  }, [data, page, queryClient]);

  return (
    <div className="row mt-5">
      <div className="col-lg-3 col-md-12 mb-lg-0 mb-4">
        <Filter
          toggle={toggle}
          setToggle={setToggle}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="col-lg-9 col-md-12">
        <div className="row">
          {isLoading || isFetching ? (
            <div className="col-lg-12 col-md-12 text-center">
              <Spinner size={40} />
            </div>
          ) : data?.data?.logs?.docs?.length > 0 ? (
            data?.data?.logs?.docs?.map((data, index) => (
              <div key={index} className="col-lg-4 col-md-6 text-center">
                <ProductCard data={data} refetch={refetch} />
              </div>
            ))
          ) : (
            <div className="col-lg-12 col-md-12 text-center">
              <p>No Car found</p>
            </div>
          )}
        </div>
        {/* <div className="text-center mt-3">
          <button type="button" className="btn btn-primary show-more-store">
            View More
          </button>
        </div> */}
      </div>
    </div>
  );
}
