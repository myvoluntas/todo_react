import React from "react";
import classes from "./ColorPicker.module.css";
//import modalBox from "../Modal.module.css";
import Close from '@material-ui/icons/Close';

const ColorPicker = props => {
  return (
    <>
      <div className={classes.ModalHeader}>
        <button
          className={classes.CloseModal}
          id="closeBkgColorModal"
          type="button"
        >
          <Close />
        </button>
      </div>
      <div className={classes.ModalContent}>
        <div className={classes.ModalContentHeader}>
          <span>Make</span> / me yours
        </div>
        <div className={classes.ModalContentBox}>
          <p>
            You can personalise your
            <span className={classes.ModalContentBoxUpper}>
              <strong>Do</strong> / me 
            </span>
            interface. To change the header and / or background colour, click
            on the corresponding parts in the diagram below and then choose
            the colours you would like.
          </p>
        </div>
        <div className={classes.CenterElement}>
          <div className={classes.ColorSampler}>
            <div className={classes.HeaderColor}>Make me yours</div>
            <div className={classes.BodyColor}>or me yours</div>
          </div>
        </div>
      </div>
      <div className={classes.ModelFooter}>
        <div className={classes.HeadColorOptions}>
          <p>Select a colour for the header</p>
          <div
            className={[classes.ColorBox, classes.GradDefault].join(" ")}
          />
          <div className={[classes.ColorBox, classes.GradBlue].join(" ")} />
          <div className={[classes.ColorBox, classes.GradGreen].join(" ")} />
        </div>

        <div className={classes.BodyColorOptions}>
          <p>Select a colour for the body</p>
          <div
            className={[classes.ColorBox, classes.BodyDefault].join(" ")}
          />
          <div className={[classes.ColorBox, classes.BodyDark].join(" ")} />
          <div className={[classes.ColorBox, classes.BodyGreen].join(" ")} />
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
