import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="main-header">
        <div className="container">
          <div className="menu-Bar">
            <span />
            <span />
            <span />
          </div>
          <div className="row align-items-center">
            <div className="col-md-2 text-left">
              <a href="./" className="logo">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>
            <div className="col-md-10 text-right">
              <div className="menuWrap">
                <ul className="menu header_rboxm">
                  <li className="dropdown-nav storedropd first">
                    <a href="store.php">Store</a>
                    <div className="nav_dropdown dropdown">
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col">
                                <ul>
                                  <li className="first">
                                    <a href="products-category.php" title>
                                      Category A
                                    </a>
                                  </li>
                                  <li>
                                    <a href="products-category.php" title>
                                      Category B
                                    </a>
                                  </li>
                                  <li>
                                    <a href="products-category.php" title>
                                      Category C
                                    </a>
                                  </li>
                                  <li className="last">
                                    <a href="products-category.php" title>
                                      Category D
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col">
                                <ul>
                                  <li className="first">
                                    <a href="products-category.php" title>
                                      Category E
                                    </a>
                                  </li>
                                  <li>
                                    <a href="products-category.php" title>
                                      Category F
                                    </a>
                                  </li>
                                  <li>
                                    <a href="products-category.php" title>
                                      Category G
                                    </a>
                                  </li>
                                  <li className="last">
                                    <a href="products-category.php" title>
                                      Category H
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col">
                                <ul>
                                  <li className="first">
                                    <a href="products-category.php" title>
                                      Category I
                                    </a>
                                  </li>
                                  <li>
                                    <a href="products-category.php" title>
                                      Category J
                                    </a>
                                  </li>
                                  <li>
                                    <a href="products-category.php" title>
                                      Category K
                                    </a>
                                  </li>
                                  <li className="last">
                                    <a href="products-category.php" title>
                                      Category L
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col">
                                <ul>
                                  <li className="first">
                                    <a href="products-category.php" title>
                                      Category M
                                    </a>
                                  </li>
                                  <li>
                                    <a href="products-category.php" title>
                                      Category N
                                    </a>
                                  </li>
                                  <li>
                                    <a href="products-category.php" title>
                                      Category O
                                    </a>
                                  </li>
                                  <li className="last">
                                    <a href="products-category.php" title>
                                      Category P
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col">
                                <img src="assets/images/stored_img1.png" alt="" />
                              </div>
                              <div className="col">
                                <img src="assets/images/stored_img2.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:;">Apply Now</a>
                  </li>
                  <li>
                    <a href="products.php">Product Page</a>
                  </li>
                  <li>
                    <a href="javascript:;">How It Works</a>
                  </li>
                  <li>
                    <a href="about-us.php">About Us</a>
                  </li>
                  <li>
                    <a href="faqs.php">FAQs</a>
                  </li>
                  <li>
                    <a href="javascript:;">Scheme</a>
                  </li>
                  <li>
                    <a href="contact-us.php">Contact Us</a>
                  </li>
                  <li className="isLoggedIn sign">
                    <a href="sign-in.php">SIGN IN</a>
                  </li>
                  <li className="isLoggedIn sign">
                    <a href="sign-up.php">SIGN UP</a>
                  </li>
                  <li className="comment userhide123" style={{ display: "none" }}>
                    <a href="javascript:;">
                      <i className="far fa-shopping-bag" />
                    </a>
                  </li>
                  <li className="notbell userhide123" style={{ display: "none" }}>
                    <a href="notifications.php">
                      <i className="far fa-bell" />
                      {/* <span>5</span>*/}
                    </a>
                  </li>
                  <li className="userdrop userhide123 last" style={{ display: "none" }}>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src="assets/images/user_icon.png" alt="" /> Joshua
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="order-logs.php">
                          <i className="fas fa-file-alt" /> Order Logs
                        </a>
                        <a className="dropdown-item" href="payment-logs.php">
                          <i className="far fa-money-bill-alt" /> Payment Logs
                        </a>
                        <a className="dropdown-item" href="service-payment-logs.php">
                          <i className="fas fa-star-half-alt" /> Service Payment Logs
                        </a>
                        <a className="dropdown-item" href="wishlist.php">
                          <i className="far fa-heart" /> My Wishlist
                        </a>
                        <a className="dropdown-item" href="appointment-logs.php">
                          <i className="fal fa-calendar-check" /> Appointment Logs
                        </a>
                        <a className="dropdown-item" href="consultancy-logs.php">
                          <i className="fal fa-file-alt" /> Consultancy Logs
                        </a>
                        <a className="dropdown-item" href="profile.php">
                          <i className="far fa-user" /> Profile
                        </a>
                        <a className="dropdown-item" data-toggle="modal" data-target=".logout_page">
                          <i className="far fa-sign-in" /> Logout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
