import React from 'react';
import { Card, Button } from 'react-bootstrap';

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      favorites: ""
    }
  }
  increaseFavorites = () => {
    this.setState({
      favorites: this.state.favorites + "❤️"
    }); 
      
  }
  render() {
    return (
      <>
        <Card style={{ width: "18rem"}} className="h-100 mx-auto px-1"> //style to here
        <Card.Img className='py-1 h-50 m-auto' variant="top" src={this.state.src} onClick={() => {
                    this.props.setShowModalTrue(this.props.id);
                }}/> //21 to here


          <Card.Img variant = "top" id="imgBeast" src={this.props.src} alt={this.props.alt} title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.state.favorites}</Card.Text>

            <Button className='mb-3' variant="secondary" onClick={this.handleClick}>Go somewhere</Button> //here

          </Card.Body>
          <Button variant="primary" onClick={this.increaseFavorites}>Like</Button>
        </Card>
      </>
    );
  }
}

export default Beast;