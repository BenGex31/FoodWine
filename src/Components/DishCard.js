import React from "react";
import './DishCard.css';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
  

const DishCard = (props) => {
    return (
        <Card>
            <CardBody className='text-center'>
                <CardTitle tag='h3'>{props.title}</CardTitle>
            </CardBody>
            <CardImg src={props.image} />
        </Card>
    )
}

export default DishCard