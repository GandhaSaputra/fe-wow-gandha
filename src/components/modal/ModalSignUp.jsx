import React from 'react'
import {Modal, Form, Button} from 'react-bootstrap'

import { useHistory } from 'react-router-dom';

const ModalSignUp = (props) => {
    let history = useHistory();

    const email = 'aa';
    const password = 'aa';

    function handleLogin() {
      if (email && password) {
        history.push('/home');
      }
    }

    return (
        <Modal show={props.show} onHide={props.onHide} centered>
          <Modal.Title>Sign Up</Modal.Title>
          <Modal.Body>
            <div className="input-group-signup">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullname">
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Button variant="danger" type="submit" className="btn-submit-signup" onClick={handleLogin}>
                  Sing Up
                </Button>
              </Form>
              <p className="text-have-account">Already have an account ? Klik <strong>Here</strong></p>
            </div>
          </Modal.Body>
        </Modal>
    )
}

export default ModalSignUp
