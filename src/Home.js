import React from "react";
import { NavLink } from "react-router-dom";
import "./Quiz.css";

const Home = () => {
  return (
    <div className="quiz">
      <NavLink to="/quiz">
        <button>Play tamang quiz</button>
      </NavLink>
      <NavLink to="/quiz1">
        <button>Play tharu quiz</button>
      </NavLink>
    </div>
  );
};

export default Home;
