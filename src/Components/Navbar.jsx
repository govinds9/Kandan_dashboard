import React from "react";
import { useDispatch } from "react-redux";
import { setdisplay } from "../Store/displaySlicer";
import "../index.css";

function Navbar() {
  const dispatch = useDispatch();
  const handleDisplay = () => {
    dispatch(setdisplay());
  };
  return (
    <div className=" navbar ">
      <nav>
        <button className="button" onClick={handleDisplay}>
          Display
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
