import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userState } from "../../../store";

export default function Navbar() {
  const { pathname } = useLocation();
  const authToken = localStorage.getItem("JSON_WEB_TOKEN");
  const user = useRecoilValue(userState);

  return (
    <header className={pathname !== "/" ? "innerhead" : ""}>
      <div className="main-header">
        <div className="container">
          <div className="menu-Bar">
            <span />
            <span />
            <span />
          </div>
          <div className="row align-items-center">
            <div className="col-md-2 text-left">
              <Link to="/" className="logo">
                <img src="assets/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="col-md-10 text-right">
              <div className="menuWrap">
                <ul className="menu header_rboxm">
                  <li className="dropdown-nav storedropd first">
                    <Link to="/store">Store</Link>
                    {/* <CategoriesDropdown /> */}
                  </li>
                  <li>
                    <Link to="/">Apply Now</Link>
                  </li>
                  <li>
                    <Link to="/products">Product Page</Link>
                  </li>
                  <li>
                    <Link to="/">How It Works</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/">Scheme</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  {authToken ? (
                    <>
                      <li className="comment">
                        <Link to="/">
                          <i className="far fa-shopping-bag" />
                        </Link>
                      </li>
                      <li className="notbell">
                        <Link to="/">
                          <i className="far fa-bell" />
                        </Link>
                      </li>
                      <li className="userdrop last">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img src="assets/images/user_icon.png" alt="" /> {user?.firstName}
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to="/" className="dropdown-item">
                              <i className="fas fa-file-alt" /> Order Logs
                            </Link>
                            <Link to="/" className="dropdown-item">
                              <i className="far fa-money-bill-alt" /> Payment Logs
                            </Link>
                            <Link to="/" className="dropdown-item">
                              <i className="fas fa-star-half-alt" /> Service Payment Logs
                            </Link>
                            <Link to="/" className="dropdown-item">
                              <i className="far fa-heart" /> My Wishlist
                            </Link>
                            <Link to="/" className="dropdown-item">
                              <i className="fal fa-calendar-check" /> Appointment Logs
                            </Link>
                            <Link to="/" className="dropdown-item">
                              <i className="fal fa-file-alt" /> Consultancy Logs
                            </Link>
                            <Link to="/profile" className="dropdown-item">
                              <i className="far fa-user" /> Profile
                            </Link>
                            <a
                              className="dropdown-item"
                              onClick={() => {
                                localStorage.clear();
                                window.location.reload();
                              }}
                            >
                              <i className="far fa-sign-in" /> Logout
                            </a>
                          </div>
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="isLoggedIn sign">
                        <Link to="/login">SIGN IN</Link>
                      </li>
                      <li className="isLoggedIn sign">
                        <Link to="/sign-up">SIGN UP</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CategoriesDropdown() {
  return (
    <div className="nav_dropdown dropdown">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <ul>
                  <li className="first">
                    <Link to="/">Category A</Link>
                  </li>
                  <li>
                    <Link to="/">Category B</Link>
                  </li>
                  <li>
                    <Link to="/">Category C</Link>
                  </li>
                  <li className="last">
                    <Link to="/">Category D</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li className="first">
                    <Link to="/">Category E</Link>
                  </li>
                  <li>
                    <Link to="/">Category F</Link>
                  </li>
                  <li>
                    <Link to="/">Category G</Link>
                  </li>
                  <li className="last">
                    <Link to="/">Category H</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li className="first">
                    <Link to="/">Category I</Link>
                  </li>
                  <li>
                    <Link to="/">Category J</Link>
                  </li>
                  <li>
                    <Link to="/">Category K</Link>
                  </li>
                  <li className="last">
                    <Link to="/">Category L</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li className="first">
                    <Link to="/">Category M</Link>
                  </li>
                  <li>
                    <Link to="/">Category N</Link>
                  </li>
                  <li>
                    <Link to="/">Category O</Link>
                  </li>
                  <li className="last">
                    <Link to="/">Category P</Link>
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
  );
}
