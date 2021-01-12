import React from "react";
import './DishCard.css';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
import {Link} from 'react-router-dom'

  

const DishCard = (props) => {
    return (
        <Card>
            <CardBody className='text-center d-flex align-items-center justify-content-center'>
                <CardTitle tag='h5'><Link className='nav-item nav-link text-white' to={props.link} >{props.title}</Link></CardTitle>
            </CardBody>
            <CardImg src={props.image} />
        </Card>
    )
}

export default DishCard