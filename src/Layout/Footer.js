import React from 'react'
import './Footer.css';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <footer>
                        <div className='row'>
                            <div className='col-lg-4 pt-2 text-center text-white'>
                                <p>Plan du site</p>
                                <p>Mentions légales</p>
                                <p>Cookies</p>
                            </div>
                            <div className='col-lg-4 text-center mt-2 mb-3 d-flex align-items-center'>
                                <InputGroup>
                                    <Input placeholder='Newsletter : Votre adresse email' />
                                    <InputGroupAddon addonType="append">
                                    <Button color="dark">Envoyer</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                            <div className='col-lg-4 text-center pb-3 d-flex align-items-center justify-content-center'>
                                <i class="fab fa-facebook-square"></i>
                                <i class="fab fa-instagram-square"></i>
                                <i class="fab fa-twitter-square"></i>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer