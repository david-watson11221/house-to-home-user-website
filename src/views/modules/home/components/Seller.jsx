import React, { useState } from "react";
import Slider from "react-slick";
import { useQuery } from "react-query";

import Spinner from "../../../components/loaders/Spinner";
import RatingStar from "../../../components/rating";
import { getSellers } from "../../../../services";
import { Link } from "react-router-dom";

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function Seller() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { isFetching, isLoading, data } = useQuery(
    ["sellersHome", page, perPage],
    () => getSellers(page, perPage),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <section className=" section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className="secondary-hdng mb-sm-5 mb-3">
              Our Trusted <span className="text-primary">sellers</span>
            </h4>
            <img draggable="false" src="assets/images/line-arrows.png" />
            <br />
            <br />
            <br />
            {isLoading || isFetching ? (
              <Spinner size={40} />
            ) : (
              <Slider arrows={false} className="react-slider-custom" {...SETTINGS}>
                {data?.data?.logs?.docs?.map((el, i) => (
                  <div key={i} className="seller-card mb-4">
                    <figure>
                      <img src="assets/images/seller-4.png" />
                    </figure>
                    <h2>{`${el.firstName} ${el.lastName}`}</h2>
                    {el?.store?._id && (
                      <h4>
                        Store Name:
                        <Link to={`/store/${el?.store?._id}`} className="text-primary">
                          {el?.store?.name}
                        </Link>
                      </h4>
                    )}
                    <div className="rating d-flex center">
                      <RatingStar value={el?.store?.averageRating} readOnly={true} />
                    </div>
                    {/* <h4>(412)</h4> */}
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
