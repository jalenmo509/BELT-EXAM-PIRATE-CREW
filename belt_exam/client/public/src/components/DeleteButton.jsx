import React from "react";
import axios from "axios";

export default function DeleteButton(props) {
  const { pirateId, successCallback } = props;

  const deletePirate = (e) => {
    axios
      .delete(`http://localhost:8000/api/pirates/${pirateId}`)
      .then((res) => {
        successCallback();
      });
  };

  return (
    <button
      className="btn btn-outline btn-error"
      onClick={(e) => deletePirate(pirateId)}
    >
      Walk the Plank
    </button>
  );
}
