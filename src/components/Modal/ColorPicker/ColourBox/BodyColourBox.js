import React from "react";
import classes from "../ColorPicker.module.css";

const BodyColourBox = props => {
  let headBkg = props.defaultHeaderColour
      return (
        <>
            <div className={classes.BodyColorOptions} >
                <p>Select a colour for the body</p>
                <div
                className={[classes.ColorBox, classes.BodyDefault].join(" ")}
                // onClick={this.setState()}
                />
                <div className={[classes.ColorBox, classes.BodyDark].join(" ")} />
                <div className={[classes.ColorBox, classes.BodyGreen].join(" ")} />
            </div>
        </>
      );
    };
    
export default BodyColourBox;