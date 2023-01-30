import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PirateForm from "../components/PirateForm";

export default function Create() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const createPirate = (pirate) => {
    axios
      .post(`http://localhost:8000/api/pirates/new`, pirate)
      .then((res) => {
        console.log(res);
        navigate("/pirates");
      })
      .catch((err) => {
        console.error(err);
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-end p-10">
        <h1 className="text-4xl font-bold mr-14">Add Pirate</h1>
        <Link to={`/pirates`} className="btn btn-sm btn-accent ml-10">
          Crew Board
        </Link>
      </div>
      {errors.map((err, index) => (
        <p
          className="text-white bg-red-500 px-3 py-1 rounded-lg mb-2 text-xs"
          key={index}
        >
          {err}
        </p>
      ))}
      <PirateForm
        onSubmitProp={createPirate}
        initialName=""
        initialImage=""
        initialChests=""
        initialCatchPhrase=""
        initialPosition=""
      />
    </div>
  );
}
