import { Link } from "react-router-dom";
import "./TypeSelection.css";

function TypeSelection() {
  return (
    <div className="type-selection-container">
      <h1>Select a Type</h1>
      <div>
        <Link to="/type/alcoholic" className="type-link">
          Alcoholic Cocktails
        </Link>
        <Link to="/type/non-alcoholic" className="type-link">
          Non-Alcoholic Cocktails
        </Link>
      </div>
    </div>
  );
}

export default TypeSelection;
