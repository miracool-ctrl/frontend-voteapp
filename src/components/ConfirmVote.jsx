import React, { useState, useEffect } from "react";
import { candidates } from "../data";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UiActions } from "../store/ui-slice";

const ConfirmVote = () => {
  const [modalCandidate, setModalCandidate] = useState({});

  const dispatch = useDispatch();

  // close confirm vote modal

  const closeModal = () => {
    dispatch(UiActions.closeVoteCandidateModal());
  };

  // get selected candidate id from redux store
  const selectedVoteCandidate = useSelector(
    (state) => state.vote.selectedVoteCandidate
  );

  //get the selected candidate
  const fetchCandidate = () => {
    candidates.find((candidate) => {
      if (candidate.id == selectedVoteCandidate) {
        setModalCandidate(candidate);
      }
    });
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  return (
    <section className="modal">
      <div className="modal_content confirm_vote-content">
        <h5>Please confirm your vote</h5>
        <div className="confirm_vote-image">
          <img src={modalCandidate.image} alt={modalCandidate.fullName} />
        </div>
        <h2>
          {modalCandidate?.fullName?.length > 17
            ? modalCandidate.fulName?.substring(0, 17) + "..."
            : modalCandidate?.fullName}
        </h2>
        <p>
          {modalCandidate?.motto?.length > 45
            ? modalCandidate.motto?.substring(0, 17) + "..."
            : modalCandidate?.motto}
        </p>
        <div className="confirm_vote-cta">
          <button className="btn" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn primary">Confirm</button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmVote;
