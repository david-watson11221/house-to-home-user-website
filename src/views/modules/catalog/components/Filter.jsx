import React from "react";

export default function Filter() {
  return (
    <>
      <h4 className="h_30 black ">Filter By</h4>
      <h5 className="h_22">Price</h5>
      <ul>
        <li className="first">
          <input type="checkbox" name id="price1" />
          <label htmlFor="price1">$ 10 - $ 50</label>
        </li>
        <li>
          <input type="checkbox" name id="price2" />
          <label htmlFor="price2">$ 50 - $ 100</label>
        </li>
        <li>
          <input type="checkbox" name id="price3" />
          <label htmlFor="price3">$ 10 - $ 50</label>
        </li>
        <li className="last">
          <input type="checkbox" name id="price4" />
          <label htmlFor="price4">$ 50 - $ 100</label>
        </li>
      </ul>
      <h5 className="h_22 mt-md-4 mt-0">Category</h5>
      <ul>
        <li className="first">
          <input type="checkbox" name id="category1" />
          <label htmlFor="category1">Category A</label>
        </li>
        <li>
          <input type="checkbox" name id="category2" />
          <label htmlFor="category2">Category A</label>
        </li>
        <li>
          <input type="checkbox" name id="category3" />
          <label htmlFor="category3">Category A</label>
        </li>
        <li className="last">
          <input type="checkbox" name id="category4" />
          <label htmlFor="category4">Category A</label>
        </li>
      </ul>
    </>
  );
}
