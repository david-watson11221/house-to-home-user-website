import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { useQuery } from "react-query";

import Spinner from "../../../components/loaders/Spinner";
import { getCars } from "../../../../services/car";
import { formatCurrency } from "../../../../utils/helpers";

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export default function Cars() {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { isFetching, isLoading, data } = useQuery(["carsHome", page, perPage], () => getCars(page, perPage), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return (
    <section className="new-products-deals">
      <div className="container">
        {isLoading || isFetching ? (
          <Spinner size={40} />
        ) : (
          <Slider arrows={false} className="react-slider-custom" {...SETTINGS}>
            {data?.data?.logs?.docs?.map((el, i) => (
              <div key={i} className="text-center">
                <div className="car-box position-relative">
                  <figure className="py-3">
                    <img className="m-auto" draggable="false" src="assets/images/car-p-4.png" />
                  </figure>
                  {/* <ul>
                    <li className="first">Hatchback</li>
                    <li>Petrol</li>
                    <li>Manual</li>
                    <li className="last">58 Mpg</li>
                  </ul> */}
                  <p className="py-3">{el.name}</p>
                  <img className="m-auto" draggable="false" src="assets/images/line-arrows.png" />
                  <p className="mt-2 small-text">Total Price</p>
                  <h4 className="mb-3">{formatCurrency(el.price)}</h4>
                  <div className="card-box-hover">
                    <figure className="py-5">
                      <img className="m-auto" draggable="false" src="assets/images/car-p-4.png" />
                    </figure>
                    <button onClick={() => history.push(`/car/${el._id}`)} className="btn btn-primary mt-4">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}
