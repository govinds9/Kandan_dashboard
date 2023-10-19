import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

function BigCart({ data }) {
  const sortby = useSelector((state) => state.sorting);

  if (sortby === "priority") {
    data.sort((a, b) => a.priority - b.priority);
  } else {
    data.sort((a, b) => a.title.length - b.title.length);
  }
  return (
    <div className="bigcart">
      {data.map((data) => (
        <Cart key={data.id} {...data} />
      ))}
    </div>
  );
}

export default BigCart;
