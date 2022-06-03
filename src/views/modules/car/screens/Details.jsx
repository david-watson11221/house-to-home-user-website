import React, { Fragment, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import ProductSlider from "../components/ProductSlider";
import Spinner from "../../../components/loaders/Spinner";
import { formatCurrency } from "../../../../utils/helpers";
import { getCarDetails } from "../../../../services/car";
import { userState } from "../../../../recoil";
import { addToWishlist } from "../../../../services";

export default function Details() {
  const { carId } = useParams();
  const [data, setData] = useState();
  const user = useRecoilValue(userState);

  const { isFetching, isLoading } = useQuery(["carDetails", carId], () => getCarDetails(carId), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
      setData(res?.data?.product);
    },
    onError: (err) => {
      // console.log(err);
      // window.replace("/cars");
    },
  });

  const { mutate, isLoading: actionLoading } = useMutation(() => addToWishlist(data?._id), {
    retry: false,
    onSuccess: (res) => {
      if (res?.data?.message === "Car Added To Wishlist")
        window.$("#modalAddedWishlist").modal("show");
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

  if (isLoading || isFetching)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="text-center"
      >
        <Spinner size={40} />
      </div>
    );

  return (
    <div>
      <section className="py-sm-5 py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 pb-sm-5 pb-0 mt-sm-0 mt-4">
              <ul>
                <li className="d-inline-block px-1 first">
                  <Link to="/" className="text-black-50">
                    Home <i className="fas fa-caret-right pl-1" />
                  </Link>
                </li>
                <li className="d-inline-block px-1">
                  <Link to="/cars" className="text-black-50">
                    Cars <i className="fas fa-caret-right pl-1" />
                  </Link>
                </li>
                <li className="d-inline-block pr-2 last">
                  <Link to="#" className="text-black-50">
                    Car Details
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-between d-flex mt-lg-5 mt-3">
            <div className="col-md-7">
              <button
                style={{ zIndex: 1, top: 60, rigth: 10 }}
                className="favorite-icon btn"
                onClick={handleAddToWishlist}
              >
                {user?.wishlist?.includes(data?._id) ? (
                  <i className="fas fa-heart" />
                ) : (
                  <i className="far fa-heart" />
                )}
              </button>
              {/* <button style={{ zIndex: 1, top: 60, rigth: 10 }} className="wishlist-btn">
                <i className="fas fa-heart" />
              </button> */}

              <ProductSlider images={data?.images} />
            </div>
            <div className="col-md-5 car-details mt-sm-0 mt-4">
              <div className="text-right">
                <p className="seller-bandge">{data?.isUsed ? "Used" : "New"}</p>
              </div>
              <h4 className="car-title">Car Details</h4>
              <h5 className="reg-heading">{data?.model}</h5>
              <p className="text-dark">{data?.name}</p>
              <div className="d-lg-flex d-block mt-4 mr-lg-5 mr-0 pb-4">
                <div className="bordr-box">
                  <h5 className="reg-heading">Car Price</h5>
                  <h4 className="car-title">{formatCurrency(data?.price)}</h4>
                </div>
                {/* <div className="bordr-box ml-lg-3 ml-0 mt-lg-0 mt-3">
                  <h5 className="reg-heading">Car Price</h5>
                  <h4 className="car-title">£4,850 !</h4>
                </div> */}
              </div>
              <div className="contact-box text-left mb-4 px-4 mr-lg-5 mr-0">
                <h5>Private Seller</h5>
                <div className="d-flex align-items-center mt-3">
                  <figure>
                    <img src="assets/images/phone-icon.png" />
                  </figure>
                  <a className="ml-3 car-title" href="to:07472034968">
                    {`${data?.contactNumber?.countryCode}${data?.contactNumber?.number}`}
                  </a>
                </div>
                <p>
                  Seller's Number Has Been Protected.
                  <span className="text-primary">Learn More</span>
                </p>
              </div>
              {data?.isAvailableOnInstallments && (
                <Fragment>
                  <h4 className="car-title mt-4 mb-2">
                    Want To Finance <span className="text-primary"> This Car? </span>
                  </h4>
                  <p>Here’s An Example Of How Your Payments Could Look:</p>
                  <div className="available-monthly mt-3">
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Available Monthly Price
                      <i className="fas fa-chevron-up pl-3" />
                      <i className="fas fa-chevron-down pl-3" />
                    </button>
                    <div className="collapse mt-3" id="collapseExample">
                      <div className="card card-body">{data?.monthlyInstallment}</div>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="secondary-hdng mb-4">
                Car <span className="text-primary"> Details</span>
              </h4>
              <p className="mb-4">{data?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
