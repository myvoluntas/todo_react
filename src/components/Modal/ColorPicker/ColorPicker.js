import React from "react";
import classes from "./ColorPicker.module.css";
import modalBox from "../Modal.module.css";

import materialIcon from "../../Navbar/Navbar.module.css";
import modalFooter from "../TodoInput/TodoInput.module.css";

const ColorPicker = props => {
  return (
    <div className={classes.ModalContainerBkgColor}>
      <div className={modalBox.ModalBox} id="to-update">
        <div className={modalBox.ModalHeader}>
          <button
            className={modalBox.CloseModal}
            id="closeBkgColorModal"
            type="button"
          >
            <span className={materialIcon.MaterialIcons}>close</span>
          </button>
        </div>
        <div className={classes.ModalContent}>
          <div className={modalBox.ModalHeader}>
            <span>Make</span> / me yours
          </div>
          <div className={modalBox.ModalContentBox}>
            <p>
              You can personalise your{" "}
              <span>
                <strong>Do</strong> / me
              </span>{" "}
              interface. To change the header and / or background colour, click
              on the corresponding parts in the diagram below and then choose
              the colours you would like
            </p>
          </div>
          <div className={classes.CenterElement}>
            <div className={classes.ColorSampler}>
              <div className={classes.HeaderColor}>Make me yours</div>
              <div className={classes.BodyColor}>or me yours</div>
            </div>
          </div>
        </div>
        <div className={modalFooter.ModelFooter}>
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
      </div>
    </div>
  );
};

export default ColorPicker;
