import React from "react";
import { useNavigate } from "react-router-dom";

import ImageSlider from "./components/ImageGallery";

export default function ProductDescription() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="secproduct-detail py-md-5 py-3">
        <div className="container top-after-img position-relative">
          <div className="row">
            <div className="col-md-6">
              <div className="row product-images d-flex">
                <div className="col-md-12 d-sm-block d-flex order-1 order-sm-0">
                  <ImageSlider />
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-sm-0 mt-5">
              <div className="product-text pl-md-5 pl-0">
                <button onClick={() => navigate(-1)} className="fa-3x float-left back-btn">
                  <i className="far fa-long-arrow-left" />
                </button>
                <h3 className="h_37 mb-3">
                  Eaque Ipsa Quae Ab Illo <br />
                  Inventore Verita
                </h3>
                <div className="row mt-4">
                  <div className="col-md-3">
                    <select className="mb-0">
                      <option value>Select</option>
                      <option value>Select</option>
                      <option value>Select</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex align-items-center my-3">
                  <h4 className="orignal-price">$47</h4>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-1">Quantity:</p>
                  <div className="counter">
                    <div className="down" onclick="decreaseCount(event, this)">
                      -
                    </div>
                    <input type="text" defaultValue={1} />
                    <div className="up" onclick="increaseCount(event, this)">
                      +
                    </div>
                  </div>
                </div>
                <button
                  onclick="location.href='cart.php'"
                  className="btn_orange"
                  data-toggle="modal"
                  data-target=".logout_popup"
                >
                  Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                </button>
                <div className="pdtabs">
                  <ul>
                    <li data-targetit="box-pd1" className="current first">
                      <a href="javascript:;">Details</a>
                    </li>
                    <li data-targetit="box-pd2" className="last">
                      <a href="javascript:;">How to use</a>
                    </li>
                  </ul>
                  <div className="box-pd1 showfirst">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the when an unknown printer took
                      a galley of type and scrambled it to make a type specimen book. It has survived not only
                      five centuries, but also the leap into electronic typesetting, remaining essentially
                      unchanged.
                    </p>
                  </div>
                  <div className="box-pd2">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the when an unknown printer took
                      a galley of type and scrambled it to make a type specimen book. It has survived not only
                      five centuries, but also the leap into electronic typesetting, remaining essentially
                      unchanged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secrating">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="finspired_top heading_main text-md-center text-left mb-md-5 mb-1">
                <h3 className="h_57 mb-md-3 mb-1">Rating &amp; Reviews</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="rating_boxm">
                <ul>
                  <li className="d-flex first">
                    <img src="assets/images/rating-reviews/01.png" alt="" />
                    <div className="w-100 pl-3">
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <h5 className="h_20">Cherie Deville Smith</h5>
                        <div className="d-flex">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                        </div>
                      </div>
                      <p className="h_16">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <img src="assets/images/rating-reviews/02.png" alt="" />
                    <div className="w-100 pl-3">
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <h5 className="h_20">Carter James</h5>
                        <div className="d-flex">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                        </div>
                      </div>
                      <p className="h_16">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <img src="assets/images/rating-reviews/03.png" alt="" />
                    <div className="w-100 pl-3">
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <h5 className="h_20">Deville Smith</h5>
                        <div className="d-flex">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                        </div>
                      </div>
                      <p className="h_16">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex last">
                    <img src="assets/images/rating-reviews/04.png" alt="" />
                    <div className="w-100 pl-3">
                      <div className="d-flex justify-content-between align-items-center py-2">
                        <h5 className="h_20">Carter James</h5>
                        <div className="d-flex">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                          <i className="far fa-star" />
                        </div>
                      </div>
                      <p className="h_16">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
