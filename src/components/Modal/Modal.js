import React from "react";
import classes from "./Modal.module.css";
import ColorPicker from "./ColorPicker/ColorPicker"
import TodoInput from "./TodoInput/TodoInput"

const Modal = props => {
  return <div className={classes.ModalContainer}>
            <div className={classes.ModalBox}>
              {/* <ColorPicker /> */}
              <TodoInput />
            </div>
          </div>
};

export default Modal;
