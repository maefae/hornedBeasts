import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";

import data from "./data.json";
import SelectedBeast from "./SelectedBeasts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      renderedBeasts: data,
    };
  }

  setShowModalTrue = (key) => {
    this.setState({ showModal: true });
    const filteredBeast = data.filter((hBeast) => {
      return hBeast._id === key;
    });
    this.setState({ selectedBeast: filteredBeast[0] });
  };

  setShowModalFalse = () => {
    this.setState({ showModal: false });
  };

  //BeastForm Component- pass this as a prop to main
  handleForm = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const selectedHorns = parseInt(event.target.value);
    let filteredBeasts 
    if (selectedHorns) {
      filteredBeasts = data.filter(beast => beast.horns === selectedHorns)
    } else {
      filteredBeasts = data
    }

    this.setState({ renderedBeasts: filteredBeasts })
  }

  
  render() {
    return (
      <>
        <Header />
        <Main
          setShowModalTrue={this.setShowModalTrue}
          setShowModalFalse={this.setShowModalFalse}
          appHandleForm={this.handleForm}
          beastArray={this.state.renderedBeasts}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          setShowModalFalse={this.setShowModalFalse}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </>
    );
  }
}

export default App;
