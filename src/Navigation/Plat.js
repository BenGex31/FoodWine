import React from "react";
import DescriptionListWine from "../Components/DescriptionListWine";
import DishCard from "../Components/DishCard";
import SelectBudget from "../Components/SelectBudget";
import { Fragment } from "react";
import imgPlat from './../img/plat_FoodWine.jpg'
import ListWine from "../Components/ListWine";
import './plat.css'
import { Col, Container, Row } from "reactstrap";

const Plat = () => {
    return (
        <Fragment>
            <div className='container BlocPlat'>
                <div className="col">
                    <div className='row'>
                        <DishCard image={imgPlat} title='Plats' />
                    </div>
                </div>
            </div>
            <DescriptionListWine />
            <SelectBudget />
            <Container className="listWine">
                <Row>
                    <Col lg="12">
                        <ListWine category="plat"/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Plat