import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { queryClient } from "../../..";
import { getProducts } from "../../../services";

import Filter from "./components/Filter";
import ItemCard from "./components/ItemCard";

export default function Catalog({ heading, queryCacheKey }) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);
  const [type, setType] = useState(0);
  const [category, setCategory] = useState("");

  const { isFetching, isLoading, data, refetch } = useQuery(
    [queryCacheKey, page, perPage, category, type],
    () => getProducts(page, perPage, type, category),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data?.data?.logs?.hasNextPage) {
      queryClient.prefetchQuery([queryCacheKey, page + 1, perPage, category, type], () =>
        getProducts(page + 1, perPage, type, category)
      );
    }
  }, [data, page, queryClient]);

  return (
    <section className="secstorem py-md-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="store_left mt-0 mt-md-5">
              <Filter />
            </div>
          </div>
          <div className="col-md-9">
            <div className="store_right">
              <h3 className="h_57 black">{heading}</h3>
              <div className="row">
                {isFetching || isLoading ? (
                  <div></div>
                ) : data?.data?.logs?.docs?.length > 0 ? (
                  data?.data?.logs?.docs?.map((item, index) => (
                    <div className="col-md-3">
                      <ItemCard key={index} data={item} />
                    </div>
                  ))
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
