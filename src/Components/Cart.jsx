import React from "react";
import { useSelector } from "react-redux";

function Cart({ id, title, tag, status, priority, user }) {
  const group = useSelector((state) => state.grouping);
  return (
    <div className=" Cart">
      <div className="flex">
        <h5 className="text">{id}</h5>
        {group !== "user" ? <h5>{user.name}</h5> : <></>}
      </div>
      <div className="flex ">
        {group !== "status" ? <h6>{status}</h6> : <></>}

        <h4>{title}</h4>
      </div>
      <div className="flex">
        {group !== "priority" ? <h5>{priority}</h5> : <></>}
        {tag ? <div className="text tag">{tag[0]}</div> : <></>}
      </div>
    </div>
  );
}

export default Cart;
