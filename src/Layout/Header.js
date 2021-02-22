import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'
import {Navbar} from 'reactstrap';
import ButtonAddWine from '../Components/ButtonFormAddWine';

const Header = () => {
    return (
        <header className="sticky-top" id='header'>
            <div className='container-fluid'>
                <div className='row text-center'>
                    <div className='col'>
                        <Navbar dark expand="xxl">
                            <button className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className='col text-right pl-5'>
                                <Link className="navbar-brand" to='/'><h1 className='text-center'><i class="fas fa-wine-bottle"></i>FoodWine</h1></Link>
                            </div>
                            <div className='col text-right'>
                                <ButtonAddWine/>
                            </div>
                            <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link href="#header" className='nav-item nav-link text-white' to='/Entrées'>Entrées</Link>
                                    <Link href="#header" className='nav-item nav-link text-white' to='/Plats'>Plats</Link>
                                    <Link href="#header" className='nav-item nav-link text-white' to='/Desserts'>Desserts</Link>
                                </div>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header