import React from "react";
import classes from "./Navbar.module.css";

const Navbar = props => {
  return (
    <div className={classes.Navigation}>
      <div className={classes.NavbarCenter}>
        <h1>
          {" "}
          <span>do</span> / me
        </h1>
        <a className={classes.AddTodo} id="newTodo">
          <span className="material-icons">add</span>
        </a>
      </div>
      <div className={classes.NavbarRight}>sdf</div>
    </div>
  );
};

export default Navbar;
