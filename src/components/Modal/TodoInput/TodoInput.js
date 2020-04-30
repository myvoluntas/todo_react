import React from "react";
import classes from "./TodoInput.module.css";
import Close from '@material-ui/icons/Close';

const TodoInput = props => {
  return (
  <>
    <div className={classes.ModalHeader}>
      <button className={classes.CloseModal} type="button" onClick={props.handleModalTodo} ><Close /></button>
    </div>
    <form action="">
      <div className={classes.ModalContent}>
        <div className={classes.ModalContentHeader}><span>Do</span> / me</div>
        <div className={classes.ModalContentBox}> 
          <textarea placeholder="What would you like to do?" maxLength="120" cols="30" rows="5"></textarea>
          <label>Max. 120 characters</label>
        </div>
        <div className={classes.ModalContentHeader}><span>Do</span> / me by?</div>
        <div>
          <input type="date" id="todoDate" name="todo-date" value="yyyy-MM-dd" min="2020-04-14" />
          <input type="time" id="todoTime" name="todo-time" step="900" />
        </div>
      </div>
      <div className={classes.ModalFooter}>
          <button className={[classes.Todo, classes.TodoSave].join(' ')} type= "submit">Save</button>
      </div>
    </form>
  </>
  );
};


export default TodoInput;
