import React from "react";
import DescriptionListWine from "../Components/DescriptionListWine";
import DishCard from "../Components/DishCard";
import { Fragment } from "react";
import imgDessert from './../img/dessert_FoodWine.jpg'
import './Dessert.css'
import FilterWine from "../Components/FilterWine";

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
            <DescriptionListWine/>
            <FilterWine category="dessert" />
        </Fragment>
    )
}

export default Dessert