import React from "react";

export default function Banner() {
  return (
    <div className="banner_slider slick-initialized slick-slider slick-dotted">
      <div className="slick-list draggable">
        <div className="slick-track" style={{ opacity: 1, width: "5820px" }}>
          <div
            className="mainbanner slick-slide slick-current slick-active"
            style={{
              backgroundImage: 'url("assets/images/banner/bg-banner.jpg")',
              width: "1910px",
              position: "relative",
              left: "0px",
              top: "0px",
              zIndex: 999,
              opacity: 1,
            }}
            data-slick-index={0}
            aria-hidden="false"
            tabIndex={0}
            role="tabpanel"
            id="slick-slide00"
            aria-describedby="slick-slide-control00"
          >
            <div className="container">
              <div className="col-md-6 ml-auto">
                <div className="mbanner_left">
                  <h3 className="h_57">Need New Flooring ?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                  </p>
                  <form className="row">
                    <div className="col-md-6">
                      <input type="text" name placeholder="Enter First Name" tabIndex={0} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name placeholder="Enter Surname" tabIndex={0} />
                    </div>
                    <div className="col-md-12">
                      <input type="number" name placeholder="Enter Post Code" tabIndex={0} />
                    </div>
                    <div className="col-md-12">
                      <input type="number" name placeholder="Enter Mobile" tabIndex={0} />
                    </div>
                    <div className="col-md-12">
                      <input type="email" name placeholder="Enter Email" tabIndex={0} />
                    </div>
                    <div className="col-md-12 text-md-center text-left">
                      <button type className="btn_whitebor" tabIndex={0}>
                        Sign Up <img src="assets/images/arrow_right_white.png" className="pl-3" alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <h1>House 2 home</h1>
          </div>
          <div
            className="mainbanner slick-slide"
            style={{
              backgroundImage: 'url("assets/images/banner/bg-banner.jpg")',
              width: "1910px",
              position: "relative",
              left: "-1940px",
              top: "0px",
              zIndex: 998,
              opacity: 0,
            }}
            data-slick-index={1}
            aria-hidden="true"
            tabIndex={-1}
            role="tabpanel"
            id="slick-slide01"
            aria-describedby="slick-slide-control01"
          >
            <div className="container">
              <div className="col-md-6 ml-auto">
                <div className="mbanner_left">
                  <h3 className="h_57">Need New Flooring ?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                  </p>
                  <form className="row">
                    <div className="col-md-6">
                      <input type="text" name placeholder="Enter First Name" tabIndex={-1} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name placeholder="Enter Surname" tabIndex={-1} />
                    </div>
                    <div className="col-md-12">
                      <input type="number" name placeholder="Enter Post Code" tabIndex={-1} />
                    </div>
                    <div className="col-md-12">
                      <input type="number" name placeholder="Enter Mobile" tabIndex={-1} />
                    </div>
                    <div className="col-md-12">
                      <input type="email" name placeholder="Enter Email" tabIndex={-1} />
                    </div>
                    <div className="col-md-12 text-md-center text-left">
                      <button type className="btn_whitebor" tabIndex={-1}>
                        Sign Up <img src="assets/images/arrow_right_white.png" className="pl-3" alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <h1>House 2 home</h1>
          </div>
          <div
            className="mainbanner slick-slide"
            style={{
              backgroundImage: 'url("assets/images/banner/bg-banner.jpg")',
              width: "1910px",
              position: "relative",
              left: "-3880px",
              top: "0px",
              zIndex: 998,
              opacity: 0,
            }}
            data-slick-index={2}
            aria-hidden="true"
            tabIndex={-1}
            role="tabpanel"
            id="slick-slide02"
            aria-describedby="slick-slide-control02"
          >
            <div className="container">
              <div className="col-md-6 ml-auto">
                <div className="mbanner_left">
                  <h3 className="h_57">Need New Flooring ?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                    Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                  </p>
                  <form className="row">
                    <div className="col-md-6">
                      <input type="text" name placeholder="Enter First Name" tabIndex={-1} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name placeholder="Enter Surname" tabIndex={-1} />
                    </div>
                    <div className="col-md-12">
                      <input type="number" name placeholder="Enter Post Code" tabIndex={-1} />
                    </div>
                    <div className="col-md-12">
                      <input type="number" name placeholder="Enter Mobile" tabIndex={-1} />
                    </div>
                    <div className="col-md-12">
                      <input type="email" name placeholder="Enter Email" tabIndex={-1} />
                    </div>
                    <div className="col-md-12 text-md-center text-left">
                      <button type className="btn_whitebor" tabIndex={-1}>
                        Sign Up <img src="assets/images/arrow_right_white.png" className="pl-3" alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <h1>House 2 home</h1>
          </div>
        </div>
      </div>
      <ul className="slick-dots" style={{}} role="tablist">
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
  );
}
