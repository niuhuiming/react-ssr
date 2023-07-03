import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return <div onClick={() => console.log("hello")}>
    Home works!
    <Link to="/list">jump to List</Link>
  </div>;
}

export default Home;