import React from "react";
import classes from "./Navbar.module.css";
import Icon from '@material-ui/core/Icon';

const Navbar = props => {
  return (
    <div className={classes.Navigation}>
      <div className={classes.NavbarCenter}>
        <h1>
          <span>do</span> / me
        </h1>
        <a
          className={classes.AddTodo}
          id="newTodo"
        >
          <span className="MaterialIcons"><Icon style={{ fontSize: 24 }}>add</Icon></span>
        </a>
      </div>
      <div className={classes.NavbarRight}>
        <div className={classes.SettingsBtn} id="colorSettings">
          <Icon>palette</Icon>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
