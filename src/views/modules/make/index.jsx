import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { queryClient } from "../../..";
import { getMakes } from "../../../services";
import { MEDIA_URL } from "../../../services/config/baseUrl.config";
import Spinner from "../../components/loaders/Spinner";

export default function Makes() {
  const [page, setPage] = useState(1);

  const { isFetching, isLoading, data } = useQuery(["makes", page], () => getMakes(page), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  // Prefetch the next page!
  useEffect(() => {
    if (data?.data?.logs?.hasNextPage) {
      queryClient.prefetchQuery(["makes", page + 1], () => getMakes(page + 1));
    }
  }, [data, page, queryClient]);

  return (
    <section className="my-5 pt-lg-5 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pb-5">
            <h4 className="secondary-hdng mb-2">Make</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and unknown printer took a the scrambled it to make a
              type is printer took a the specimen book.
            </p>
          </div>
        </div>
        <div className="row align-items-center mb-4">
          {isLoading || isFetching ? (
            <div className="col-lg-12 col-md-12 text-center">
              <Spinner size={40} />
            </div>
          ) : (
            data?.data?.logs?.docs?.map((make, index) => (
              <div key={index} className="col-lg-3 col-md-4 make-card mb-4 text-center">
                <figure>
                  <img src={`${MEDIA_URL}${make?.image}`} />
                </figure>
                <h4 className="font-25 mb-2 mt-3">{make?.name}</h4>
                {/* <h4 className="font-20 text-primary">15 Cars</h4> */}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
