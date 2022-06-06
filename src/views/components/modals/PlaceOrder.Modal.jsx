import React from "react";
import PlaceOrderIcon from "../icons/svgs/PlaceOrderIcon";

export default function PlaceOrderModal() {
  return (
    <div
      className="modal fade place_order p-0"
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
                    <div id="placeor_icon" className="svgjson">
                      <PlaceOrderIcon />
                    </div>
                  </div>
                  <h4 className="text-center font-weight-semibold py-2">PLACE ORDER</h4>
                  <p className="py-2 h_20">Are you sure you want to place order ?</p>
                  <div className="modal-buttons mt-2">
                    <button
                      type="button"
                      className="btn btn-primary mr-1"
                      data-dismiss="modal"
                      aria-label="Close"
                      data-toggle="modal"
                      data-target=".place_order2"
                    >
                      Yes
                    </button>
                    <button
                      type="submit"
                      className="btn btn-secondary ml-1 cancel-btn"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
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
