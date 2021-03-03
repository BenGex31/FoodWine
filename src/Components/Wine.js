//import { Row, Col } from 'reactstrap'
import React from 'react';
import './Wine.css'
import $ from 'jquery'

const Wine = ({ id, nameWine, year, price, imgWine, description, story, rating}) => {
    const handleClick = () => {
        $(".modal fade").addClass("animate__animated animate__fadeOutDown animate__slower")
    }
    return (
        <div className="blocListWine">
            <div>
                <img className="imgListWine" src={imgWine} alt={nameWine + year}></img>
            </div>
            <div>
                <h5 className="nameWine">{nameWine + " " + year}</h5>
                <h6 className="descriptionWine">{description}</h6>
                <button className="rating">Note : {rating.toFixed(1).replace(".",",")} / 5</button>
                <p className="price">{ price.toFixed(2).replace(".",",") } €</p>
                <button className="more-infos" type="button" data-toggle="modal" data-target={"#wine"+id}>
                Plus d'infos
                </button>
                <div class="modal fade" id={"wine"+id} tabindex="-1" role="dialog" aria-labelledby={"ModalLabel"+id} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={"ModalLabel"+id} > {nameWine} </h5>
                        </div>
                        <div className="modal-body">
                            {story}
                        </div>
                        <div class="modal-footer">
                            <button onClick={handleClick()} type="button" className="btn" data-dismiss="modal">Fermer</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wine