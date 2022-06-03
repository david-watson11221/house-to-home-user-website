import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getStoreReivews } from "../../../../services";
import Loader from "../../../components/loaders/Loader";
import ReviewCard from "../../../components/review_card";

export default function Reviews() {
  const { storeId } = useParams();
  const { isLoading, isFetching, data } = useQuery(
    ["storeReviews", storeId],
    () => getStoreReivews(storeId),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onError: (err) => {
        // console.log(err);
      },
    }
  );

  if (isLoading || isFetching) return <Loader />;

  return (
    <div className="row mt-5">
      {data?.data?.reviews?.length > 0 ? (
        data?.data?.reviews?.map((el, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <ReviewCard data={el} />
          </div>
        ))
      ) : (
        <div className="col-lg-12 mt-5 mb-5">
          <h2 className="text-center">No Reviews yet</h2>
        </div>
      )}
    </div>
  );
}
