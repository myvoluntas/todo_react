import React from "react";
import classes from "../ColorPicker.module.css";

const HeadColourBox = props => {

  return (
    <>
        <div className={classes.HeadColorOptions} >
          <p>Select a colour for the header</p>
          <div
            className={[classes.ColorBox, classes.GradDefault].join(" ")}
          />
          <div className={[classes.ColorBox, classes.GradBlue].join(" ")} />
          <div className={[classes.ColorBox, classes.GradGreen].join(" ")} />
        </div>
    </>
  );
};

export default HeadColourBox;
