import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

export default function Main() {
  const [pirates, setPirates] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const compareName = (a, b) => {
    return a.name < b.name ? -1 : 1;
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirates")
      .then((res) => {
        setPirates(res.data.sort(compareName));
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [loaded]);

  const removeFromDOM = (pirateId) => {
    setPirates(pirates.filter((pirate) => pirate._id !== pirateId));
  };

  return (
    <div>
      {loaded && (
        <div>
          <div className="flex items-center justify-end p-10">
            <h1 className="text-4xl font-bold mr-14">Pirate Crew</h1>
            <Link to={`/pirates/new`} className="btn btn-sm btn-accent ml-10">
              Add Pirate
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {pirates.length > 0 ? (
              pirates.map((pirate, i) => (
                <div
                  key={i}
                  className="flex items-center gap-7 p-7 bg-slate-700 rounded-xl"
                >
                  <img
                    className="rounded-xl"
                    width={250}
                    height={250}
                    src={pirate.image}
                    alt={pirate.name}
                  />
                  <div className="flex flex-col gap-12">
                    <h1 className="text-3xl font-semibold text-center">
                      {pirate.name}
                    </h1>
                    <div className="flex justify-center gap-7">
                      <Link
                        to={`/pirates/${pirate._id}`}
                        className="btn btn-outline btn-warning"
                      >
                        View Pirate
                      </Link>
                      <DeleteButton
                        pirateId={pirate._id}
                        successCallback={() => removeFromDOM(pirate._id)}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center">
                The crew is empty... Add some pirates!
              </h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
