import React from 'react';
import HornedBeast from './hornedBeast.js';
import data from "./data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends React.Component {
  render() {
    // let beastsDisplay = data.map(beast => (
    //   <HornedBeast title={beast.title} src={beast.image_url} description={beast.description} alt={beast.description} key={beast._id}/>
    // ))
    return (
      <>
        <Container>
                    <Row lg={4}>
                        {data.map((hBeast) => {
                            return (<Col classname="mb-3"><HornedBeast src={hBeast.image_url} description={hBeast.description}
                                title={hBeast.title} setShowModalTrue={this.props.setShowModalTrue} key={hBeast._id} id={hBeast._id} /></Col>)
                        })}
                    </Row>
        </Container> 

      </>
    );
  }
}

export default Main;