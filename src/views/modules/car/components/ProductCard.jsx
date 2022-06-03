import React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import Error from "../../../components/alerts/Error.Alert";
import { MEDIA_URL } from "../../../../services/config/baseUrl.config";
import { addToWishlist } from "../../../../services";
import { formatCurrency } from "../../../../utils/helpers";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil";

export default function ProductCard({ data, refetch }) {
  const history = useHistory();
  const user = useRecoilValue(userState);
  const { mutate, isLoading } = useMutation(() => addToWishlist(data?._id), {
    retry: false,
    onSuccess: (res) => {
      if (res?.data?.message === "Car Added To Wishlist") window.$("#modalAddedWishlist").modal("show");
      else window.$("#modalRemovedWishlist").modal("show");
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  const handleAddToWishlist = () => {
    const Token = localStorage.getItem("JSON_WEB_TOKEN");

    if (Token) {
      mutate();
    } else {
      window.$("#modalLoginFirst").modal("show");
    }
  };

  return (
    <div>
      <div className="car-store-box bg-light">
        <figure className onClick={() => history.push(`/car/${data?._id}`)}>
          {/* <img draggable="false" src="assets/images/car-p-1.png" /> */}
          <img draggable="false" src={`${MEDIA_URL}${data?.images[0]}`} />
        </figure>
        <p className="py-3">{data?.name}</p>
        <img draggable="false" src="assets/images/line-arrows.png" />
        <h4 className="mb-3 mt-3">{formatCurrency(data?.price)}</h4>
        <button onClick={handleAddToWishlist} className="btn btn-primary-dark">
          {user?.wishlist?.includes(data?._id) ? "Remove from Wishlist" : "Add Wishlist"}
        </button>
      </div>
    </div>
  );
}
