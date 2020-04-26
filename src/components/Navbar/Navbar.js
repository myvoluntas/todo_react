import React from "react";
import classes from "./Navbar.module.css";

const Navbar = props => {
  return (
    <div className={classes.Navigation}>
      <div className={classes.NavbarCenter}>
        <h1>
          <span>do</span> / me
        </h1>
        <a
          className={[classes.AddTodo, classes.MaterialIcons].join(" ")}
          id="newTodo"
        >
          <span className={classes.AddTodo}>add</span>
        </a>
      </div>
      <div className={classes.NavbarRight}>
        <div className={classes.SettingsBtn} id="colorSettings">
          <span className={classes.MaterialIcons}>palette</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
