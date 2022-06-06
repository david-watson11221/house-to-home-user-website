import React from "react";

export default function Newsletter() {
  return (
    <section className="py-md-5 py-0 secnewsletter">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4">
            <div className="newsletter_limg">
              <img src="assets/images/newsletter_img.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="newsletter_rtext">
              <h4>
                <span>Newsletter</span> Be Aware Of New Features
              </h4>
              <div className="newsletterbox">
                <input type="email" name placeholder="Email Address Here....." />
                <button type>
                  Subscribe <img src="assets/images/arrow_right_white.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
