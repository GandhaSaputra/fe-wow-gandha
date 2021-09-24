import React from 'react'

import {Modal, Form, Button} from 'react-bootstrap'
import { useHistory } from 'react-router';

const ModalSignIn = (props) => {
  let history = useHistory();

  const email = 'aa';
  const password = 'aa';

  function handleLogin() {
    if (email && password) {
      history.push('/home');
    }
  }


    return (
        <Modal show={props.show} onHide={props.onHide} className="modal-signin" centered>
          <Modal.Title>Sign In</Modal.Title>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-submit-signup" onClick={handleLogin}>
                  Sing In
              </Button>
            </Form>
            <p className="text-have-account">Don't have an account ? Klik <strong>Here</strong> </p>
          </Modal.Body>
      </Modal>
    )
}

export default ModalSignIn
