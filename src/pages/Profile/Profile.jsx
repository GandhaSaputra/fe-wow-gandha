import React from 'react';
import Left from '../../components/Left';
import './Profile.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { EmailIcon, FotoProfileBesar, GenderIcon, MapsIcon, PhoneIcon } from '../../assets/assets';
import MyList from '../../components/list/MyList';

const Profile = () => {
    return (
        <div className="container-home">
            <Left/>
            <div className="right">
                <p className="profile-title">Profile</p>
                <Container className="profile-box">
                    <Row>
                        <Col sm={8} className="item-satu">
                            <div className="icon-group-profile">
                                <img src={EmailIcon} alt="email" />
                                <img src={GenderIcon} alt="gender"/>
                                <img src={PhoneIcon} alt="phone" />
                                <img src={MapsIcon} alt="maps" />
                            </div>
                            <div className="text-group-profile">
                                <div className="top-group-profile">
                                    <p className="text-data-profile text-satu">ganzs499@gmail.com</p>
                                    <p className="text-label-profile">Email</p>
                                </div>
                                <div>
                                    <p className="text-data-profile text-dua">Male</p>
                                    <p className="text-label-profile">Gender</p>
                                </div>
                                <div>
                                    <p className="text-data-profile text-tiga">0896-2662-4244</p>
                                    <p className="text-label-profile">Mobile Phone</p>
                                </div>
                                <div>
                                    <p className="text-data-profile text-empat">Jalan Kom Yos Sudarso Gang Sukapadi No. 4</p>
                                    <p className="text-label-profile">Address</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className="item-dua">
                            <img className="foto-profil-besar" src={FotoProfileBesar} alt="foto-profil-besar" />
                            <Button className="btn-edit-profile">Edit Profile</Button>
                        </Col>
                    </Row>
                </Container>
                <p className="title-my-list-book">My List Book</p>
                <MyList/>
            </div>
        </div>
    )
}

export default Profile;
