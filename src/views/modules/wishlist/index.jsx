import React from "react";
import { useQuery } from "react-query";

import ProductCard from "./components/ProductCard";
import Spinner from "../../components/loaders/Spinner";
import { getWishlist } from "../../../services";

export default function Wishlist() {
  const { isFetching, isLoading, data } = useQuery(["wishlist"], () => getWishlist(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <section className="mt-5 pt-lg-5 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pb-5">
              <h4 className="secondary-hdng mb-2">My Wishlist</h4>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                {isLoading || isFetching ? (
                  <div className="col-lg-12 col-md-12 text-center">
                    <Spinner size={40} />
                  </div>
                ) : data?.data?.wishlist?.length > 0 ? (
                  data?.data?.wishlist?.map((data, index) => (
                    <div key={index} className="col-lg-4 col-md-6 text-center">
                      <ProductCard data={data} />
                    </div>
                  ))
                ) : (
                  <div className="col-lg-12 col-md-12 text-center">
                    <p>Nothing show</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
