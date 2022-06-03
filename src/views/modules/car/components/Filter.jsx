import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMinCategories } from "../../../../services";

export default function Filter({
  toggle,
  setToggle,
  setMinPrice,
  setMaxPrice,
  setSelectedCategory,
}) {
  const { data, isLoading } = useQuery(["minCategories"], () => getMinCategories(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="liveloads_left px-4 py-3">
      <p className="text-dark mb-2">Filter By</p>
      <div className="d-flex justify-content-center mt-2 mb-2">
        <button
          onClick={() => setToggle("new")}
          className={`mx-1 px-3 btn btn-primary${toggle !== "new" ? "-dark" : ""}`}
        >
          New Car
        </button>
        <button
          onClick={() => setToggle("used")}
          className={`mx-1 px-3 btn btn-primary${toggle !== "used" ? "-dark" : ""}`}
        >
          Used Car
        </button>
      </div>
      <p className="text-dark mb-4 mt-4 border-bottom pb-2">Price</p>
      <div>
        <div className="custom-control custom-radio mb-3">
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            className="custom-control-input"
            onChange={(e) => {
              setMinPrice(10);
              setMaxPrice(50);
            }}
          />
          <label className="custom-control-label pt-1" htmlFor="customRadio1">
            $ 10 - $ 50
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            type="radio"
            id="customRadio2"
            name="customRadio"
            className="custom-control-input"
            onChange={(e) => {
              setMinPrice(10);
              setMaxPrice(100);
            }}
          />
          <label className="custom-control-label pt-1" htmlFor="customRadio2">
            $ 10 - $ 100
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            type="radio"
            id="customRadio3"
            name="customRadio"
            className="custom-control-input"
            onChange={(e) => {
              setMinPrice(50);
              setMaxPrice(100);
            }}
          />
          <label className="custom-control-label pt-1" htmlFor="customRadio3">
            $ 50 - $ 100
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            type="radio"
            id="customRadio4"
            name="customRadio"
            className="custom-control-input"
            onChange={(e) => {
              setMinPrice(50);
              setMaxPrice(200);
            }}
          />
          <label className="custom-control-label pt-1" htmlFor="customRadio4">
            $ 50 - $ 200
          </label>
        </div>
      </div>
      <p className="text-dark mb-4 mt-4 border-bottom pb-2">Makes</p>
      <div>
        {data?.data?.min.map((data, index) => (
          <div className="custom-control custom-radio mb-3">
            <input
              id={`catRadio${index + 1}`}
              type="radio"
              name="catRadio"
              value={data?._id}
              className="custom-control-input"
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            <label className="custom-control-label pt-1" htmlFor={`catRadio${index + 1}`}>
              {data?.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
