import React from "react";
import RatingStars from "../rating";

export default function ReviewCard({ data }) {
  return (
    <div className=" text-center bg-light round-25 px-4 py-5 mb-4">
      <figure className="mb-4">
        <img draggable="false" className="d-inline-block" src="assets/images/qoute.png" />
      </figure>
      <p>{data?.overallReview}</p>
      <p className="text-dark mt-3">{data?.userId?.firstName}</p>
      <div className="d-flex  align-items-center justify-content-center mt-2">
        <RatingStars value={data?.rating} readOnly={true} />
      </div>
    </div>
  );
}
