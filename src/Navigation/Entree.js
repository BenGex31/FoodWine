import React, { Fragment } from 'react'
import DescriptionListWine from '../Components/DescriptionListWine'
import DishCard from '../Components/DishCard'
import SelectBudget from '../Components/SelectBudget'
import EntreeImg from './../img/entrée_FoodWine.jpg'
import ListWine from './../Components/ListWine'
import './Entree.css'

const Entree = () => {
    return (
        <Fragment>
            <div className='container blocEntree'>
                <div className="col">
                    <div className='row'>
                        <DishCard image={EntreeImg} title='Entrées' />
                    </div>
                </div>
            </div>
            <DescriptionListWine />
            <SelectBudget />
            <ListWine category="entrée" />
        </Fragment>
    )
}

export default Entree