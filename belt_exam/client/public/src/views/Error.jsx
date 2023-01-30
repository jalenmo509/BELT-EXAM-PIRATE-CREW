import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="text-center">
      <h1 className="font-semibold mb-5">
        Unable to find the pirate you are looking for.
        <br />
        Would you like to add this pirate to our database?
      </h1>
      <Link to={`/pirates/new`} className="link link-info">
        Add Pirate
      </Link>
    </div>
  );
}
