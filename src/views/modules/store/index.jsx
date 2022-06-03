import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userState } from "../../../recoil";
import { getStoreDetails } from "../../../services";
import FeedbackModal from "../../components/feedback_modal/inde";
import Search from "../../components/search";
import StoreHome from "./components/Home";
import Reviews from "./components/Reviews";

export default function Store() {
  const { storeId } = useParams();
  const user = useRecoilValue(userState);
  const [toggle, setToggle] = useState("home");
  const [searchCarBool, setSearchCarBool] = useState(false);
  const [searchString, setSearchString] = useState("");
  const { isFetching, isLoading, data } = useQuery(
    ["StoreProfile", storeId],
    () => getStoreDetails(storeId),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div>
      <FeedbackModal />
      <section className="my-5 pt-lg-5 pt-0">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h4 className="secondary-hdng mb-4">{data?.data?.store?.name}</h4>
              <p>{data?.data?.store?.description}</p>
            </div>
            <div className="col-md-4 text-right mt-sm-0 mt-3">
              {user?._id && (
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#modalFeedback"
                  className="mb-3 px-3 btn btn-primary"
                >
                  Give Feedback
                </button>
              )}
              <Search setSearchString={setSearchString} />
              {/* <div className="position-relative search-field">
                <input
                  type="text"
                  placeholder="Search Cars..."
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      setSearchCarBool(!searchCarBool);
                    }
                  }}
                />
                <i
                  onClick={() => {
                    setSearchCarBool(!searchCarBool);
                    if (searchCarBool) {
                      searchString("");
                    }
                  }}
                  className={`align-items-center d-flex fa-${
                    !searchCarBool ? "search" : "times"
                  } fas justify-content-center`}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12 store-tabs">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className={toggle === "home" ? "nav-link active" : "nav-link"}
                    aria-selected={toggle === "home" ? "true" : "false"}
                    onClick={() => setToggle("home")}
                  >
                    Home
                  </a>
                  <a
                    className={toggle === "reviews" ? "nav-link active" : "nav-link"}
                    aria-selected={toggle === "reviews" ? "true" : "false"}
                    onClick={() => setToggle("reviews")}
                  >
                    Ratings &amp; Reviews
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                {toggle === "home" ? (
                  <div
                    className={toggle === "home" ? "tab-pane fade show active" : "tab-pane fade"}
                  >
                    <StoreHome searchString={searchString} />
                  </div>
                ) : (
                  <div
                    className={toggle === "reviews" ? "tab-pane fade show active" : "tab-pane fade"}
                  >
                    <Reviews />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
