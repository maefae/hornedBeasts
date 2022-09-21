import React from 'react';
import HornedBeast from './hornedBeast.js';
import data from "./data.json";
// import Beast from './hornedBeast.js';


class Main extends React.Component {
  render() {
    let beastsDisplay = data.map(beast => (
      <HornedBeast title={beast.title} src={beast.image_url} description={beast.description} alt={beast.description} key={beast._id}/>
    ))
    return (
      <>
        <div>
          {beastsDisplay}
        </div>
      </>
    );
  }
}

export default Main;