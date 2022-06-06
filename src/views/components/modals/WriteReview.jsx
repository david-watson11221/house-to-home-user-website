import React from "react";
import ReviewIcon from "../icons/svgs/ReviewIcon";

export default function WriteReview() {
  return (
    <div
      className="modal fade write_review p-0"
      tabIndex
      role
      aria-labelledby
      aria-hidden="true"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel" />
            <button type="button" className="btn close" data-dismiss="modal" aria-label="Close">
              <i className="fa fa-times" />
            </button>
          </div>
          <div className="modal-body py-3">
            <form action="login.php" method="post">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="pb-3">
                    <div id="review_icon" className="svgjson">
                      <ReviewIcon />
                    </div>
                  </div>
                  <h4 className="text-center font-weight-semibold py-2">
                    Please Add A Rate &amp; Review <br />
                    For The Store
                  </h4>
                  <textarea name placeholder="Write A Review" defaultValue={""} />
                  <div className="modal-buttons mt-2">
                    <button
                      type="button"
                      className="btn btn-primary mr-1"
                      data-dismiss="modal"
                      aria-label="Close"
                      data-toggle="modal"
                      data-target=".write_review2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
