import React from "react";
import { useDispatch } from "react-redux";
import { setGrouping } from "../Store/groupingSlicer";
import { setSorting } from "../Store/sortingSlicer";
import "../index.css";
function Optional({ label, options }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (label === "Grouping") {
      dispatch(setGrouping(e.target.value));
    } else if (label === "Ordering") {
      dispatch(setSorting(e.target.value));
    }
  };

  return (
    <div className="optional">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <select className="select" name="" id={label} onChange={handleChange}>
        {options.map((opt, index) => (
          <option className="opt" key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Optional;
