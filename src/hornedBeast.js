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
    }) 

  }
  render() {
    return (
      <>
        <Card>
          <Card.Img variant = "top" id="imgBeast" src={this.props.src} alt={this.props.alt} title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.state.favorites}</Card.Text>
          </Card.Body>
          <Button variant="primary" onClick={this.increaseFavorites}>Like</Button>
        </Card>
      </>
    );
  }
}

export default Beast;