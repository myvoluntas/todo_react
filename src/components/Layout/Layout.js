import React from "react";
import classes from "./Layout.module.css";

const TodoItems = props => {
  return (
    <div className={classes.Content}>
      <div className={classes.ContentGridder}>
        <div className={classes.ContentWrapper}>
          <TodoItems />
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
