import React from 'react';

import Form from 'react-bootstrap/Form';

import { Container } from "react-bootstrap";

class BeastForm extends React.Component {

    render(){
        return(

            <>
            <Container>
                <Form.Select onChange={this.props.formFunction} variant="success" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One Horn</option>
                    <option value="2">Two Horns</option>
                    <option value="3">Three Horns</option>
                    <option value="100">Hundred Horns</option>
                </Form.Select>
            </Container>
            </>
        );
    }
}

export default BeastForm;

// function SelectBasicExample() {
//     return (
//       <Form.Select aria-label="Default select example">
//         <option>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </Form.Select>
//     );
//   }
  
//   export default SelectBasicExample;