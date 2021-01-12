import React from "react";
import DescriptionListWine from "../Components/DescriptionListWine";
import DishCard from "../Components/DishCard";
import SelectBudget from "../Components/SelectBudget";
import { Fragment } from "react";
import imgDessert from './../img/dessert_FoodWine.jpg'
import ListWine from "../Components/ListWine";
import './Dessert.css'

const Dessert = () => {
    return (
        <Fragment>
            <div className='container blocDessert'>
                <div className="col">
                    <div className='row'>
                        <DishCard image={imgDessert} title='Desserts' />
                    </div>
                </div>
            </div>
            <DescriptionListWine />
            <SelectBudget />
            <ListWine category="dessert" />
        </Fragment>
    )
}

export default Dessert