import React from "react";
import DescriptionListWine from "../Components/DescriptionListWine";
import DishCard from "../Components/DishCard";
import SelectBudget from "../Components/SelectBudget";
import { Fragment } from "react";
import imgDessert from './../img/dessert_FoodWine.jpg'

const Dessert = () => {
    return (
        <Fragment>
            <DishCard image={imgDessert} title='Desserts' />
            <DescriptionListWine />
            <SelectBudget />
        </Fragment>
    )
}

export default Dessert