import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../../components/rating";
import { MEDIA_URL } from "../../../../services/config/baseUrl.config";

export default function SellerCard({ data }) {
  // console.log(data?.store);
  return (
    <div>
      <figure>
        <img
          src={
            data?.profileImage
              ? `${MEDIA_URL}${data?.profileImage}`
              : "assets/images/placeholder-gray.png"
          }
        />
      </figure>
      <h3> {`${data?.firstName} ${data?.lastName}`}</h3>
      {data?.store?._id && (
        <h4>
          Store Name:
          <Link to={`/store/${data?.store?._id}`} className="text-primary">
            {data?.store?.name}
          </Link>
        </h4>
      )}
      <div className="rating d-flex">
        <RatingStars value={data?.store?.averageRating} readOnly={true} />
      </div>
      {/* <h4>(412)</h4> */}
    </div>
  );
}
