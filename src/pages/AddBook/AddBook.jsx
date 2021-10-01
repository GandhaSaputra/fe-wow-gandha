import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { BsBookmarkPlus} from 'react-icons/bs';
import {Form, Button} from 'react-bootstrap'

import { UserContext } from '../../config/UserContext/UserContext';

import './AddBook.css'
import NavbarAdmin from '../../components/NavbarAdmin/NavbarAdmin'
import { AttacheGrey } from '../../assets/assets'

const AddBook = () => {

    const [state] = useContext(UserContext);

    if(!state.isLogin){
      return <Redirect to="/" />
    }
    return (
        <div>
            <NavbarAdmin/>
            <p className="table-add-book-title">Add Book</p>
            <div className="input-add-book-box">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className="input-add-book" type="text" placeholder="Title" style={{ marginTop: '20px'}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control className="input-add-book" type="text" placeholder="Publication Date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullname">
                  <Form.Control className="input-add-book" type="text" placeholder="Pages" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullname">
                  <Form.Control className="input-add-book" type="text" placeholder="Author" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullname">
                  <Form.Control className="input-add-book" type="text" placeholder="ISBN" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullname">
                    <Form.Control className="input-add-book" as="textarea"  placeholder="About This Book" style={{ height: '200px', resize:"none" }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTransferProof">
                    <Form.Label className="file-label-add-book" for="file">Attache Book File <img className="attache-icon-add-book" src={AttacheGrey} alt="attache"/></Form.Label>
                    <Form.Control type="file" placeholder="file" id="file" hidden/>
                </Form.Group>

                <Button variant="danger" type="submit" className="btn-submit-add-book">
                  Add Book <BsBookmarkPlus className="icon-add-book-submit"/>
                </Button>
            </Form>
            </div>
        </div>
    )
}

export default AddBook
