import React from "react";
import classes from "./TodoItem.module.css";
import Delete from '@material-ui/icons/Delete';
import Alarm from '@material-ui/icons/Alarm';

const TodoItem = props => {
  return (
    <div className={classes.todoBox}>
          <div className={classes.todoTime}>
              <Alarm style={{ fontSize: 12 }} />
              <div className={classes.dateTimeCont}>
                  <span className={classes.dateOnOff}>27 April 2020 - </span>
                  <span className={classes.timeOnOff}>14:15h</span>
              </div>
              <span className={classes.trashIcon} style={{ justifySelf: 'end' }}><Delete style={{ fontSize: 12 }}  /></span>
          </div>
          <label className={classes.checkboxContainer}>
              <div className={classes.todoText} >
                Todo text
              </div> 
                  <input type="checkbox"  />
                  <span className={classes.checkmark} ></span>
          </label>
    </div>
    )
};

export default TodoItem;