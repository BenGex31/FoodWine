import React from "react";
import DescriptionListWine from "../Components/DescriptionListWine";
import DishCard from "../Components/DishCard";
import { Fragment } from "react";
import imgPlat from './../img/plat_FoodWine.jpg'
import './plat.css'
import FilterWine from "../Components/FilterWine";

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
            <FilterWine category="plat"/>
        </Fragment>
    )
}

export default Plat