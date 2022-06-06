import React from "react";

export default function FeaturedProducts() {
  return (
    <section className="secfproduct py-md-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="finspired_top heading_main text-md-center text-left mb-md-5 mb-1">
              <h3 className="h_57 mb-md-3 mb-1">Featured Product</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna <br />
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren.
              </p>
            </div>
          </div>
        </div>
        <div className="fproduct_slider slick-initialized slick-slider">
          <button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>
            Previous
          </button>
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{ opacity: 1, width: "7000px", transform: "translate3d(-1400px, 0px, 0px)" }}
            >
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={-5}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/01.png" alt="" />
                    <h5>Carpet</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={-4}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/02.png" alt="" />
                    <h5>Vinyl</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={-3}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/03.png" alt="" />
                    <h5>Laminate</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={-2}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/04.png" alt="" />
                    <h5>LVT</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={-1}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/05.png" alt="" />
                    <h5>Artificial Grass</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                style={{ width: "250px" }}
                tabIndex={0}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={0}>
                    <img src="assets/images/featured-product/01.png" alt="" />
                    <h5>Carpet</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-active"
                data-slick-index={1}
                aria-hidden="false"
                style={{ width: "250px" }}
                tabIndex={0}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={0}>
                    <img src="assets/images/featured-product/02.png" alt="" />
                    <h5>Vinyl</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-active"
                data-slick-index={2}
                aria-hidden="false"
                style={{ width: "250px" }}
                tabIndex={0}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={0}>
                    <img src="assets/images/featured-product/03.png" alt="" />
                    <h5>Laminate</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-active"
                data-slick-index={3}
                aria-hidden="false"
                style={{ width: "250px" }}
                tabIndex={0}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={0}>
                    <img src="assets/images/featured-product/04.png" alt="" />
                    <h5>LVT</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-active"
                data-slick-index={4}
                aria-hidden="false"
                style={{ width: "250px" }}
                tabIndex={0}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={0}>
                    <img src="assets/images/featured-product/05.png" alt="" />
                    <h5>Artificial Grass</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide"
                data-slick-index={5}
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/01.png" alt="" />
                    <h5>Carpet</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide"
                data-slick-index={6}
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/02.png" alt="" />
                    <h5>Vinyl</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide"
                data-slick-index={7}
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/03.png" alt="" />
                    <h5>Laminate</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide"
                data-slick-index={8}
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/04.png" alt="" />
                    <h5>LVT</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide"
                data-slick-index={9}
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/05.png" alt="" />
                    <h5>Artificial Grass</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={10}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/01.png" alt="" />
                    <h5>Carpet</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={11}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/02.png" alt="" />
                    <h5>Vinyl</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={12}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/03.png" alt="" />
                    <h5>Laminate</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={13}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/04.png" alt="" />
                    <h5>LVT</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={14}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/05.png" alt="" />
                    <h5>Artificial Grass</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={15}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/01.png" alt="" />
                    <h5>Carpet</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={16}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/02.png" alt="" />
                    <h5>Vinyl</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={17}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/03.png" alt="" />
                    <h5>Laminate</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={18}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/04.png" alt="" />
                    <h5>LVT</h5>
                  </a>
                </div>
              </div>
              <div
                className="col slick-slide slick-cloned"
                data-slick-index={19}
                id
                aria-hidden="true"
                style={{ width: "250px" }}
                tabIndex={-1}
              >
                <div className="fproduct_box">
                  <a className="#" tabIndex={-1}>
                    <img src="assets/images/featured-product/05.png" alt="" />
                    <h5>Artificial Grass</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
