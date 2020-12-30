import React from "react";
import './SectionFood.css';
import DishCard from './DishCard'
import EntreeImg from './../img/entrée_FoodWine.jpg'
import platImg from './../img/plat_FoodWine.jpg'
import DessertImg from './../img/dessert_FoodWine.jpg'

const SectionFood = () => {
    return (
        <section className='food'>
            <div className='container-fluid'>
                <div className='row text-center'>
                    <div className='col-lg-4'>
                        <DishCard image={EntreeImg} title='Entrée' />
                    </div>
                    <div className='col-lg-4'>
                        <DishCard image={platImg} title='Plat' />
                    </div>
                    <div className='col-lg-4'>
                        <DishCard image={DessertImg} title='Dessert' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFood