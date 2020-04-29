import React from "react";
import TodoItem from "../TodoItem/TodoItem"
import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <div className={classes.Content}>
      <div className={classes.ContentGridder}>
        <div className={classes.ContentWrapper}>
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default Layout;
