import React from "react";

export default function NewModelReleases() {
  return (
    <section className="new-model-releases section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className="secondary-hdng mb-sm-5 mb-3">
              New Model <span className="text-primary">Releases</span>
            </h4>
            <img draggable="false" src="assets/images/line-arrows.png" />
            <div className="row mt-5">
              <div className="col-lg-3 col-md-6 text-center mb-sm-0 mb-4">
                <div className=" position-relative">
                  <figure className="py-3">
                    <img draggable="false" src="assets/images/car-p-4.png" />
                  </figure>
                  <a className="bold-link" href="_#">
                    Value My Car
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center mb-sm-0 mb-4">
                <div className=" position-relative">
                  <figure className="py-3">
                    <img draggable="false" src="assets/images/car-p-1.png" />
                  </figure>
                  <a className="bold-link" href="_#">
                    Value My Car
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center mb-sm-0 mb-4">
                <div className=" position-relative">
                  <figure className="py-3">
                    <img draggable="false" src="assets/images/car-p-2.png" />
                  </figure>
                  <a className="bold-link" href="_#">
                    Value My Car
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center mb-sm-0 mb-4">
                <div className=" position-relative">
                  <figure className="py-3">
                    <img draggable="false" src="assets/images/car-p-3.png" />
                  </figure>
                  <a className="bold-link" href="_#">
                    Value My Car
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
