import React from "react";
import imgEntree from '../img/entrée_FoodWine.jpg'
import './Entree.css';

import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
  

const Entree = () => {
    return (
        <Card>
            <CardBody className='text-center'>
                <CardTitle tag='h5'>Entrées</CardTitle>
            </CardBody>
            <CardImg src={imgEntree} />
        </Card>
    )
}

export default Entree