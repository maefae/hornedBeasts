import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';

import data from './data.json'
import SelectedBeast from './SelectedBeasts'; //8 and 9

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
    };
  }

  setShowModalTrue = (key) => {
    this.setState({ showModal: true });
    const filteredBeast = data.filter((hBeast) => {
      return hBeast._id === key;
    });
    this.setState({ selectedBeast: filteredBeast[0] });
  }

  setShowModalFalse = () => {
    this.setState({ showModal: false });
  }
//13 to 32



  render() {
    return (
     <>
      <Header />
      <Main setShowModalTrue={this.setShowModalTrue} setShowModalFalse={this.setShowModalFalse}/>
        <SelectedBeast showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} selectedBeast={this.state.selectedBeast} />
      <Footer />
     </>
    );
  }
}

export default App;