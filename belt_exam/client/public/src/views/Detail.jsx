import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [pirate, setPirate] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pirates/${id}`).then((res) => {
      setPirate(res.data);
      setLoaded(true);
    });
  }, [id]);

  return (
    <div>
      {loaded && (
        <div>
          <div className="flex items-center justify-end p-10">
            <h1 className="text-4xl font-bold mr-14">{pirate.name}</h1>
            <Link to={`/pirates`} className="btn btn-sm btn-accent ml-10">
              Crew Board
            </Link>
          </div>
          <div className="flex gap-5">
            <div className="w-96">
              <img
                className="rounded-xl"
                width={400}
                height={400}
                src={pirate.image}
                alt={pirate.name}
              />
              <h1 className="text-4xl text-center text-warning italic font-bold p-5 break-before-auto">
                "{pirate.catchPhrase}"
              </h1>
            </div>
            <div className="flex flex-col gap-4 bg-slate-700 p-7 rounded-xl">
              <h2 className="text-center text-3xl font-semibold">About</h2>
              <p>
                Position :{" "}
                <span className="text-warning">{pirate.position}</span>
              </p>
              <p>
                Treasures :{" "}
                <span className="text-warning">{pirate.chests}</span>
              </p>
              <p>
                Peg Leg :{" "}
                <span className="text-warning">
                  {pirate.pegLeg ? "Yes" : "No"}
                </span>
              </p>
              <p>
                Eye Patch :{" "}
                <span className="text-warning">
                  {pirate.eyePatch ? "Yes" : "No"}
                </span>
              </p>
              <p>
                Hook Hand :{" "}
                <span className="text-warning">
                  {pirate.hookHand ? "Yes" : "No"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
