import { Row, Col } from 'reactstrap'
import React from 'react';
import './Wine.css'

const Wine = ({ id, nameWine, year, price, imgWine, description, story, rating}) => {
    return (
        <Row className="align-items-center blocListWine">
            <Col lg="3">
                <img className="imgListWine" src={imgWine} alt={nameWine + year}></img>
            </Col>
            <Col className="mt-2 mb-2" lg="9">
                <h6 className="nameWine">{nameWine + " " + year} {description}</h6>
                <p className="rating">Note : {rating} / 5</p>
                <p className="price"> {price} €</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#wine"+id}>
                Plus d'infos
                </button>
                <div class="modal fade" id={"wine"+id} tabindex="-1" role="dialog" aria-labelledby={"ModalLabel"+id} aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={"ModalLabel"+id} > {nameWine} </h5>
                        </div>
                        <div class="modal-body">
                            {story}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Wine