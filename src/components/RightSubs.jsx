import React from 'react'

import { attache, smallWow } from '../assets/assets';
import {Form, Button} from 'react-bootstrap';

const RightSubs = () => {
    return (
        <div className="right right-subs">
            <div className="subs-box">
                <p className="subs-box-title">Premium</p>
                <p className="subs-box-desc">Pay now and access all the latest books from <img src={smallWow} alt="wow"/></p> 
                <p className="subs-box-number"><img src={smallWow} alt="wow"/> : 0981312323</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formAccountNumber">
                        <Form.Control type="text" placeholder="Input Your Account Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTransferProof">
                        <Form.Label className="file-label" for="file">Attache proof of transfer <img className="attache-icon" src={attache} alt="attache"/></Form.Label>
                        <Form.Control type="file" placeholder="Password" id="file" hidden/>
                    </Form.Group>

                    <Button type="submit" className="btn-submit-send">
                        Send
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default RightSubs
