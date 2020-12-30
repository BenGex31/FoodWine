import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'
import {Navbar} from 'reactstrap';

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className='row text-center'>
                <div className='col'>
                    <header>
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
                            <div className='col'>
                                <Link className="navbar-brand text-white" to='/'><h1 className='text-center'><i class="fas fa-wine-bottle"></i>FoodWine</h1></Link>
                            </div>
                            <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                                <div className="navbar-nav text-white">
                                    <Link className='nav-item nav-link text-white' to='/Entrées'>Entrées</Link>
                                    <Link className='nav-item nav-link text-white' to='/Plats'>Plats</Link>
                                    <Link className='nav-item nav-link text-white' to='/Desserts'>Desserts</Link>
                                </div>
                            </div>
                        </Navbar>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Header