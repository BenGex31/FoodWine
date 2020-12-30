import React from "react";
import './MainImg.css'
import imgWine from '../img/img_wine.png'

const MainImg = () => {
    return (
        <div id='imgWine' className='container'>
            <div className='row text-center'>
                <div className='col-lg-12'>
                    <img className='imgWine' src={imgWine} alt='Wine' />
                </div>
            </div>
        </div>
    )
}

export default MainImg