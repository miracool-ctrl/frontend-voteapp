import React from "react";
import { UiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";
import { voteActions } from "../store/vote-slice";

const Candidate = ({ image, id, fullName, motto }) => {
  const dispatch = useDispatch();

  // open confirm vote modal
  const openCandidateModal = () => {
    dispatch(UiActions.openVoteCandidateModal());
    dispatch(voteActions.changeSelectedVoteCandidate(id));
  };
  return (
    <article className="candidate">
      <div className="candidate_image">
        <img src={image} alt={fullName} />
      </div>
      <h5>
        {fullName?.length > 20 ? fullName.substring(0, 20) + "..." : fullName}
      </h5>
      <small>
        {motto?.length > 25 ? motto.substring(0, 25) + "..." : fullName}
      </small>
      <button className="btn primary" onClick={openCandidateModal}>
        vote
      </button>
    </article>
  );
};

export default Candidate;
