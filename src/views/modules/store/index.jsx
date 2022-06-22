import React from "react";

export default function Store() {
  return (
    <section className="secstorem py-md-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="store_left mt-0 mt-md-5">
              <h4 className="h_30 black ">Filter By</h4>
              <h5 className="h_22">Price</h5>
              <ul>
                <li className="first">
                  <input type="checkbox" name id="price1" />
                  <label htmlFor="price1">$ 10 - $ 50</label>
                </li>
                <li>
                  <input type="checkbox" name id="price2" />
                  <label htmlFor="price2">$ 50 - $ 100</label>
                </li>
                <li>
                  <input type="checkbox" name id="price3" />
                  <label htmlFor="price3">$ 10 - $ 50</label>
                </li>
                <li className="last">
                  <input type="checkbox" name id="price4" />
                  <label htmlFor="price4">$ 50 - $ 100</label>
                </li>
              </ul>
              <h5 className="h_22 mt-md-4 mt-0">Category</h5>
              <ul>
                <li className="first">
                  <input type="checkbox" name id="category1" />
                  <label htmlFor="category1">Category A</label>
                </li>
                <li>
                  <input type="checkbox" name id="category2" />
                  <label htmlFor="category2">Category A</label>
                </li>
                <li>
                  <input type="checkbox" name id="category3" />
                  <label htmlFor="category3">Category A</label>
                </li>
                <li className="last">
                  <input type="checkbox" name id="category4" />
                  <label htmlFor="category4">Category A</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="store_right">
              <h3 className="h_57 black">Store</h3>
              <div className="row">
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/01.png" alt="" />
                      <h6>
                        Out of <br />
                        Stock
                      </h6>
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>Carpet</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/02.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>Vinyl</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/03.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>Laminate</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/04.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>LVT</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/05.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>
                          Artificial <br />
                          Grass
                        </h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/01.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>Carpet</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/02.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>Vinyl</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/03.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>Laminate</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/04.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>LVT</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/05.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>
                          Artificial <br />
                          Grass
                        </h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/01.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>Carpet</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="store_boxm">
                    <div className="store_boxtop">
                      <img src="assets/images/featured-product/02.png" alt="" />
                    </div>
                    <div className="store_boxbott">
                      <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5>Vinyl</h5>
                        <h6>£ 129</h6>
                      </div>
                      <div className="button">
                        <a href="cart.php" title className="btn_orange btn_orangebor">
                          Add To Cart <img src="assets/images/arrow_right_white.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
