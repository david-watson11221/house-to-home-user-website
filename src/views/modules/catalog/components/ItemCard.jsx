import React from "react";

export default function ItemCard({ key, data }) {
  return (
    <div className="store_boxm" key={key}>
      <div className="store_boxtop">
        <img src="assets/images/featured-product/01.png" alt="" />
        {data?.stock && (
          <h6>
            Out of <br />
            Stock
          </h6>
        )}
      </div>
      <div className="store_boxbott">
        <div className="d-flex justify-content-between mb-3 align-items-center">
          <h5>Carpet</h5>
          <h6>£ 129</h6>
        </div>
        <div className="button">
          <a href="cart.php" title className="btn_orange btn_orangebor">
            Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
