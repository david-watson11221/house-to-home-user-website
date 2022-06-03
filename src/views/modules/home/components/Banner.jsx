import React from "react";

export default function Banner() {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="row align-items-end hero-row mb-5">
          <div className="col-lg-6 col-md-12">
            <div className="hero-slider slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: "4340px",
                    transform: "translate3d(-620px, 0px, 0px)",
                  }}
                >
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-1}
                    id
                    aria-hidden="true"
                    style={{ width: "590px" }}
                    tabIndex={-1}
                  >
                    <h1 className="hero-heading mb-2">
                      Find Your <span className="text-primary">Perfect</span>{" "}
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and unknown printer took a
                      the scrambled it to make a type is printer took a the specimen book.
                    </p>
                  </div>
                  <div
                    className="slick-slide slick-current slick-active"
                    data-slick-index={0}
                    aria-hidden="false"
                    style={{ width: "590px" }}
                    tabIndex={0}
                    role="tabpanel"
                    id="slick-slide00"
                    aria-describedby="slick-slide-control00"
                  >
                    <h1 className="hero-heading mb-2">
                      Find Your <span className="text-primary">Perfect</span>{" "}
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and unknown printer took a
                      the scrambled it to make a type is printer took a the specimen book.
                    </p>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={1}
                    aria-hidden="true"
                    style={{ width: "590px" }}
                    tabIndex={-1}
                    role="tabpanel"
                    id="slick-slide01"
                    aria-describedby="slick-slide-control01"
                  >
                    <h1 className="hero-heading mb-2">
                      Find Your <span className="text-primary">Perfect</span>{" "}
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and unknown printer took a
                      the scrambled it to make a type is printer took a the specimen book.
                    </p>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={2}
                    aria-hidden="true"
                    style={{ width: "590px" }}
                    tabIndex={-1}
                    role="tabpanel"
                    id="slick-slide02"
                    aria-describedby="slick-slide-control02"
                  >
                    <h1 className="hero-heading mb-2">
                      Find Your <span className="text-primary">Perfect</span>{" "}
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and unknown printer took a
                      the scrambled it to make a type is printer took a the specimen book.
                    </p>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={3}
                    id
                    aria-hidden="true"
                    style={{ width: "590px" }}
                    tabIndex={-1}
                  >
                    <h1 className="hero-heading mb-2">
                      Find Your <span className="text-primary">Perfect</span>{" "}
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and unknown printer took a
                      the scrambled it to make a type is printer took a the specimen book.
                    </p>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={4}
                    id
                    aria-hidden="true"
                    style={{ width: "590px" }}
                    tabIndex={-1}
                  >
                    <h1 className="hero-heading mb-2">
                      Find Your <span className="text-primary">Perfect</span>{" "}
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and unknown printer took a
                      the scrambled it to make a type is printer took a the specimen book.
                    </p>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={5}
                    id
                    aria-hidden="true"
                    style={{ width: "590px" }}
                    tabIndex={-1}
                  >
                    <h1 className="hero-heading mb-2">
                      Find Your <span className="text-primary">Perfect</span>{" "}
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and unknown printer took a
                      the scrambled it to make a type is printer took a the specimen book.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="slick-dots" role="tablist">
                <li className="slick-active first" role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control00"
                    aria-controls="slick-slide00"
                    aria-label="1 of 3"
                    tabIndex={0}
                    aria-selected="true"
                  >
                    1
                  </button>
                </li>
                <li role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control01"
                    aria-controls="slick-slide01"
                    aria-label="2 of 3"
                    tabIndex={-1}
                  >
                    2
                  </button>
                </li>
                <li role="presentation" className="last">
                  <button
                    type="button"
                    role="tab"
                    id="slick-slide-control02"
                    aria-controls="slick-slide02"
                    aria-label="3 of 3"
                    tabIndex={-1}
                  >
                    3
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
