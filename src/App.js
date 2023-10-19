import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchData } from "./Store/apislicer";

import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

import SideBar from "./Components/SideBar";
import { setGrouping } from "./Store/groupingSlicer";
import { setSorting } from "./Store/sortingSlicer";
import Footer from "./Components/Footer";

function App() {
  // useEffect(() => {
  //   setLoading(useSelector((state) => state.apiData.loading));
  // }, [loading]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(setGrouping(localStorage.getItem("grouping")));
    dispatch(setSorting(localStorage.getItem("ordering")));
  }, []);
  return (
    <div>
      <Navbar />

      <Body />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
