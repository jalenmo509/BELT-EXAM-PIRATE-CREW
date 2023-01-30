import React, { useState } from "react";
export default function PirateForm(props) {

  const {
    initialName,
    initialImage,
    initialChests,
    initialCatchPhrase,
    initialPosition,
    onSubmitProp,
  } = props;
  const [name, setName] = useState(initialName);
  const [image, setImage] = useState(initialImage);
  const [chests, setChests] = useState(initialChests);
  const [catchPhrase, setCatchPhrase] = useState(initialCatchPhrase);
  const [position, setPosition] = useState(initialPosition);
  const [nameChanged, setNameChanged] = useState(false);
  const [imageChanged, setImageChanged] = useState(false);
  const [chestsChanged, setChestsChanged] = useState(false);
  const [catchPhraseChanged, setCatchPhraseChanged] = useState(false);
  const [positionChanged, setPositionChanged] = useState(false);
  const [pegLeg, setPegLeg] = useState(true);
  const [eyePatch, setEyePatch] = useState(true);
  const [hookHand, setHookHand] = useState(true);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      name,
      image,
      chests,
      catchPhrase,
      position,
      pegLeg,
      eyePatch,
      hookHand,
    });
  };

  return (
    <div>
      {/* {errors.map((err, index) => 
      <p className="text-white bg-red-500 px-3 py-1 rounded-lg mb-2 text-xs" key={index}>{err}</p>
      )} */}
      <form className="flex gap-5 mt-4" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Pirate Name{" "}
                <span className="text-error">
                  {name === "" && nameChanged && "*required*"}
                </span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setName(e.target.value);
                setNameChanged(true);
              }}
              value={name}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Image URL{" "}
                <span className="text-error">
                  {image === "" && imageChanged && "*required*"}
                </span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setImage(e.target.value);
                setImageChanged(true);
              }}
              value={image}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                # of Treasure Chests{" "}
                <span className="text-error">
                  {chests === "" && chestsChanged && "*required*"}
                </span>
              </span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setChests(e.target.value);
                setChestsChanged(true);
                console.log(chests);
              }}
              value={chests}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Pirate Catch Phrase{" "}
                <span className="text-error">
                  {catchPhrase === "" && catchPhraseChanged && "*required*"}
                </span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setCatchPhrase(e.target.value);
                setCatchPhraseChanged(true);
              }}
              value={catchPhrase}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Crew Position{" "}
                <span className="text-error">
                  {position === "" && positionChanged && "*required*"}
                </span>
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs mb-10"
              onChange={(e) => {
                setPosition(e.target.value);
                setPositionChanged(true);
              }}
            >
              <option disabled selected>
                Pick a position
              </option>
              <option value="Captain">Captain</option>
              <option value="First Mate">First Mate</option>
              <option value="Quarter Master">Quarter Master</option>
              <option value="Boatswain">Boatswain</option>
              <option value="Powder Monkey">Powder Monkey</option>
            </select>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label flex justify-start gap-3">
              <input
                type="checkbox"
                checked={pegLeg}
                className="checkbox checkbox-secondary"
                onClick={(e) => setPegLeg(!pegLeg)}
              />
              <span className="label-text text-base">Peg Leg</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label flex justify-start gap-3">
              <input
                type="checkbox"
                checked={eyePatch}
                className="checkbox checkbox-secondary"
                onClick={(e) => setEyePatch(!eyePatch)}
              />
              <span className="label-text text-base">Eye Patch</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label flex justify-start gap-3">
              <input
                type="checkbox"
                checked={hookHand}
                className="checkbox checkbox-secondary"
                onClick={(e) => setHookHand(!hookHand)}
              />
              <span className="label-text text-base">Hook Hand</span>
            </label>
          </div>
          <div className="flex justify-center gap-3 mt-14">
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Pirate"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
