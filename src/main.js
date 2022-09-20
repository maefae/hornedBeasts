import React from 'react';
import HornedBeast from './hornedBeasts.js';
import beast1 from './img/dragon.jpg';
import beast2 from './img/pans.jpg';


class Main extends React.Component {
  render() {
    return (
      <>
        <div id="mainDiv">
          <HornedBeast
            title="Fierce Dragon"
            src={beast1}
            description="A deadly dragon."
            alt="Dragon"
            />
          <HornedBeast
            title="a goat man"
            src={beast2}
            description="The goat from pans labyrinth"
            alt="una fauna"
            />
        </div>
      </>
    );
  }
}

export default Main;