import React, {useContext} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import { useHistory } from 'react-router';

import { UserContext } from '../../config/UserContext/UserContext';
// import { useHistory } from 'react-router-dom';

const ModalSignUp = (props) => {
    const [state, dispatch] = useContext(UserContext);


    let history = useHistory();


    const onClickHere = () => {
      props.handleShowSignIn();
      props.onHide();
    }


    const handleOnSubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const fullName = document.getElementById('fullName').value;
      
      const data = {
        email,
        password,
        fullName,
        statusSubs: 'Not Subscribed Yet',
        accNumber: '',
      };

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: data
      });

    
      if (data.email === 'user01@gmail.com' && data.password === 'user01' && data.fullName === 'user01') {
        console.log ("Login as User")
        history.push('/home');
      } else {
        alert("Not Match")
        dispatch({
          type: 'LOGOUT',
          payload: data
        })
      }
    };

    return (
        <Modal show={props.show} onHide={props.onHide} centered>
          <Modal.Title>Sign Up</Modal.Title>
          <Modal.Body>
            <div className="input-group-signup">
              <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className="input-signup" type="email" id="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control className="input-signup" type="password" id="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullname">
                  <Form.Control className="input-signup" type="text" id="fullName" placeholder="Full Name" />
                </Form.Group>
                <Button variant="danger" type="submit" className="btn-submit-signup">
                  Sing Up
                </Button>
              </Form>
              <p className="text-have-account">Already have an account ? Klik <strong id="here" style={{cursor:"pointer"}} onClick={onClickHere}>Here</strong></p>
            </div>
          </Modal.Body>
        </Modal>
    )
}

export default ModalSignUp
