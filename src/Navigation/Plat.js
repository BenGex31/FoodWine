import React from "react";
import DescriptionListWine from "../Components/DescriptionListWine";
import DishCard from "../Components/DishCard";
import SelectBudget from "../Components/SelectBudget";
import { Fragment } from "react";
import imgPlat from './../img/plat_FoodWine.jpg'

const Plat = () => {
    return (
        <Fragment>
            <DishCard image={imgPlat} title='Plats' />
            <DescriptionListWine />
            <SelectBudget />
        </Fragment>
    )
}

export default Plat