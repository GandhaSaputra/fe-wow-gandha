import React, {useContext} from 'react'

import {Modal, Form, Button} from 'react-bootstrap'
import { useHistory } from 'react-router';
import { UserContext } from '../../config/UserContext/UserContext';

const ModalSignIn = (props) => {

    const onClickHere = () => {
      props.handleShowSignUp();
      props.onHide();
    }

    const [state, dispatch] = useContext(UserContext);
    let history = useHistory();

    const handleOnSubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      const dataAdmin = {
        email,
        password,
      };

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: dataAdmin
      });

      if (dataAdmin.email === 'admin@gmail.com' && dataAdmin.password === 'admin') {
        console.log ("Login as Admin")
        history.push('/admin');
      } else {
        alert("Not Match")
      }
    };

    return (
        <Modal show={props.show} onHide={props.onHide} className="modal-signin" centered>
          <Modal.Title>Sign In</Modal.Title>
          <Modal.Body>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="input-signin" id="email" type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className="input-signin" id="password" type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="danger" type="submit" className="btn-submit-signup">
                  Sing In
              </Button>
            </Form>
            <p className="text-have-account">Don't have an account ? Klik <strong onClick={onClickHere} style={{cursor:"pointer"}}>Here</strong> </p>
          </Modal.Body>
      </Modal>
    )
}

export default ModalSignIn
