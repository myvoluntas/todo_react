import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoItems from "./components/TodoItem/TodoItem";
import Modal from "./components/Modal/Modal";
import ColorPicker from "./components/Modal/ColorPicker/ColorPicker";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <TodoItems />
        </div>
      </>
    );
  }
}

export default App;
