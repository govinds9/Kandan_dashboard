import React from "react";
import { useSelector } from "react-redux";
import Optional from "./Optional";

function SideBar() {
  const open = useSelector((state) => state.display);
  const first = {
    label: "Grouping",
    options: ["status", "priority", "user"],
  };
  const second = {
    label: "Ordering",
    options: ["priority", "title"],
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <Optional {...first} />
      <Optional {...second} />
    </div>
  );
}

export default SideBar;
