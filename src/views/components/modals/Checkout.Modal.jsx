import React from "react";
import CheckoutIcon from "../icons/svgs/Checkout.Icon";

export default function CheckoutModal() {
  return (
    <div
      className="modal fade cart_checkout p-0"
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
                  <i className="fa-check-confirm">
                    {/* <img src="assets/images/checkout_icon.png" alt=""/> */}
                    <div id="checkout_icon" className="svgjson">
                      <CheckoutIcon />
                    </div>
                  </i>
                  <h4 className="text-center font-weight-semibold py-2">Checkout</h4>
                  <p className="py-2 h_20">Please login to checkout.</p>
                  <div className="modal-buttons mt-2">
                    <a href="sign-in.php">
                      {" "}
                      <button type="button" className="btn btn-primary mr-1">
                        Login
                      </button>
                    </a>
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
