import React from "react";

export default function FeelInspired() {
  return (
    <section className="secfinspired py-md-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="finspired_top heading_main text-md-center text-left mb-md-5 mb-1">
              <h3 className="h_57 mb-md-3 mb-1">Feel Inspired</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna <br />
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="finspired_text">
              <h3 className="h_70 mb-md-3 mb-1">
                Fall &amp; <br />
                Winter
                <br />
                Lookbook
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.
                <br />
                <br />
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
              </p>
              <div className="button mt-md-4 mt-1">
                <a href="javascript:;" className="btn_whitebor btn_orangebor">
                  Explore More <img src="assets/images/arrow_right_orange.png" className="pl-3" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="finspired_image">
              <img src="assets/images/finspired_limg.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
