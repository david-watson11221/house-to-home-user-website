import React from "react";

import { MEDIA_URL } from "../../../../services/config/baseUrl.config";
import { formatCurrency } from "../../../../utils/helpers";

export default function ItemCard({ key, data }) {
  return (
    <div className="store_boxm" key={key}>
      <div className="store_boxtop">
        <img src={`${MEDIA_URL}${data?.mainImage}`} alt="" />
        {data?.stock && data?.stock === 0 && (
          <h6>
            Out of <br />
            Stock
          </h6>
        )}
      </div>
      <div className="store_boxbott">
        <div className="d-flex justify-content-between mb-3 align-items-center">
          <h5>{data?.name}</h5>
          {data?.price && <h6>{formatCurrency(data?.price)}</h6>}
        </div>
        <div className="button">
          <a className="btn_orange btn_orangebor">
            Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
