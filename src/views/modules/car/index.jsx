import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";
import Spinner from "../../components/loaders/Spinner";
import { queryClient } from "../../..";
import { getCars } from "../../../services/car";

export default function Cars() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);
  const [toggle, setToggle] = useState("new");
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const { isFetching, isLoading, data, refetch } = useQuery(
    ["cars", page, perPage, toggle, minPrice, maxPrice, selectedCategory],
    () => getCars(page, perPage, toggle, minPrice, maxPrice, selectedCategory),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data?.data?.logs?.hasNextPage) {
      queryClient.prefetchQuery(["cars", page + 1, perPage, toggle, minPrice, maxPrice, selectedCategory], () =>
        getCars(page + 1, perPage, toggle, minPrice, maxPrice, selectedCategory)
      );
    }
  }, [data, page, queryClient]);

  return (
    <div>
      <section className="mt-5 pt-lg-5 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pb-5">
              <h4 className="secondary-hdng mb-2">All Cars</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and unknown printer took a the scrambled it to make a
                type is printer took a the specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-3 col-md-4 mb-sm-0 mb-4">
              <Filter
                toggle={toggle}
                setToggle={setToggle}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            <div className="col-lg-9 col-md-8">
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
        </div>
      </section>
    </div>
  );
}
