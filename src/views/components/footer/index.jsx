import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="py-0 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="widget text-md-center text-left">
                <img src="assets/images/footer_logo.png" alt="" />
                <ul className="fsocial">
                  <li className="first last">
                    <a href="javascript:;">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright text-center py-md-4 py-0 border-top">
        <div className="container">
          <p className="h_16">Copyright 2022 House 2 Home. All Right Reserved</p>
        </div>
      </div>
    </>
  );
}
