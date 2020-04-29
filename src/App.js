import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import TodoInput from "./components/Modal/TodoInput/TodoInput";
import ColorPicker from "./components/Modal/ColorPicker/ColorPicker";

class App extends Component {
  state = {
    todo: [],
    colour: [],
    modal: {
      modalTodoIsActive: false,
      modalColourIsActive: false
    }
  };

  handleModalTodo = () => {
    let modalCopy = { ...this.state.modal }; // {modalTodoIsActive: false, modalColourIsActive: false}
    if (modalCopy.modalTodoIsActive) {
      modalCopy.modalTodoIsActive = !modalCopy.modalTodoIsActive;
      this.setState({ modal: modalCopy });
    } else {
      modalCopy.modalTodoIsActive = !modalCopy.modalTodoIsActive;
      this.setState({ modal: modalCopy });
    }
  };

  handleModalColour = () => {
    let modalColourCopy = { ...this.state.modal };
    if (modalColourCopy.modalColourIsActive) {
      modalColourCopy.modalColourIsActive = !modalColourCopy.modalColourIsActive;
      this.setState({modal: modalColourCopy});
    } else {
      modalColourCopy.modalColourIsActive = !modalColourCopy.modalColourIsActive;
      this.setState({modal: modalColourCopy});
    }
  };

  render() {
    const displayTodoInput = (<Modal><TodoInput handleModalTodo={this.handleModalTodo} /></Modal>)
    const displayColorPicker = (<Modal><ColorPicker handleModalColour={this.handleModalColour} /></Modal>)
    let displayModal =
    this.state.modal.modalColourIsActive ? displayColorPicker  
    : this.state.modal.modalTodoIsActive ? displayTodoInput
    : null

    
    return (
      <>
        <Navbar handleModalTodo={this.handleModalTodo} handleModalColour={this.handleModalColour}/>
        {displayModal}
      </>
    );
  }
}

export default App;