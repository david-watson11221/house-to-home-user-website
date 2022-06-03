import React, { useState } from "react";
import { useQuery } from "react-query";

import LoadingView from "../../components/loaders/Loader";
import { getSellers } from "../../../services";
import SellerCard from "./components/SellerCard";

export default function Sellers() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);
  const { isLoading, isFetching, data } = useQuery(
    ["sellers", page, perPage],
    () => getSellers(page, perPage),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (err) => {
        // console.log(err);
      },
    }
  );

  return (
    <div>
      <section className="my-5 pt-lg-5 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pb-5">
              <h4 className="secondary-hdng mb-2">Sellers</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and unknown printer took a the
                scrambled it to make a type is printer took a the specimen book.
              </p>
            </div>
          </div>
          <div className="row align-items-center mb-4">
            {isLoading || isFetching ? (
              <div className="col-lg-12">
                <LoadingView />
              </div>
            ) : (
              data?.data?.logs?.docs?.map((seller, index) => (
                <div key={index} className="col-lg-3 col-md-4 seller-card mb-4">
                  <SellerCard data={seller} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
