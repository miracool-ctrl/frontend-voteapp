import ResultElection from "../components/ResultElection";
import React, { useState } from "react";
import { elections as dummyElections } from "../data";

const Results = () => {
  const [elections] = useState(dummyElections);
  return (
    <section className="results">
      <div className="container results_container">
        {elections.map((election) => (
          <ResultElection
            key={election.id}
            id={election.id}
            Nigerianflag={election.flag}
            title={election.title}
            {...election}
          />
        ))}
      </div>
    </section>
  );
};

export default Results;
