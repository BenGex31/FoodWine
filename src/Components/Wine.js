import { Row, Col } from 'reactstrap'
import React from 'react';
import './Wine.css'

const Wine = (props) => {
    return (
        <Row className="text-left align-items-center blocListWine">
            <Col className={props.type + "justify-content-center"} lg="3">
                <img className="imgListWine" src={props.src} alt={props.nameWine + props.year}></img>
            </Col>
            <Col lg="9">
                <h6 className="nameWine">{props.nameWine + " " + props.year} {props.description}</h6>
                <p className="rating">Note : {props.rating}/5</p>
                <p className="price"> {props.price}</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#wine"+props.id}>
                Plus d'infos
                </button>
                <div class="modal fade" id={"wine"+props.id} tabindex="-1" role="dialog" aria-labelledby={"ModalLabel"+props.id} aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={"ModalLabel"+props.id} > {props.nameWine} </h5>
                        </div>
                        <div class="modal-body">
                            {props.story}
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