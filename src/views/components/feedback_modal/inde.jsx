import React, { useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil";
import { postStoreReivews } from "../../../services";
import Error from "../alerts/Error.Alert";
import Success from "../alerts/Success.Alert";
import Warning from "../alerts/Warning.Alert";
import Button from "../form_elements/Button";
import RatingStars from "../rating";

export default function FeedbackModal() {
  const { storeId } = useParams();
  const user = useRecoilValue(userState);
  const [state, setState] = useState();
  const { mutate, isLoading } = useMutation((data) => postStoreReivews(data), {
    retry: false,
    onSuccess: (res) => {
      Success(res?.data?.message);
    },
    onError: (err) => {
      // console.log(err);
      Error(err?.response?.data?.message);
    },
  });

  const handleSubmit = () => {
    if (state?.rating === "") return Warning("Please rate before submit");
    if (state?.overallReview === "") return Warning("Please write review before submit");
    mutate({ ...state, userId: user?._id, storeId });
  };

  return (
    <div
      className="modal fade common-modal"
      id="modalFeedback"
      tabIndex={-1}
      aria-labelledby="logoutLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-body text-center pt-0">
            <h4 className="font-25">Feedback</h4>
            <img src="assets/images/place-img.png" />
            <div className="d-flex justify-content-around my-4">
              {/* <div className="text-left">
                <h4 className="font-25">ABC Seller</h4>
                <p>Def Store</p>
              </div> */}
              <div className="text-left">
                <h4 className="font-25">Rate Seller</h4>
                <RatingStars
                  value={state?.rating}
                  setValue={(rating) => setState({ ...state, rating })}
                />
              </div>
            </div>
            <div className="mt-3 text-dark px-sm-5 px-3 text-left">
              <p>Review</p>
              <div className="form-group">
                <textarea
                  className="form-control pt-3"
                  placeholder="Write A Review"
                  value={state?.overallReview}
                  onChange={(e) => setState({ ...state, overallReview: e.target.value })}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-2">
              <Button className="mx-2 btn btn-primary" loading={isLoading} onClick={handleSubmit}>
                Submit Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
