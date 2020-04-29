import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import ColorPicker from "./components/Modal/ColorPicker/ColorPicker";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Modal />
      </>
    );
  }
}

export default App;