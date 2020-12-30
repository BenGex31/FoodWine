import React, { Fragment } from 'react'
import DescriptionListWine from '../Components/DescriptionListWine'
import DishCard from '../Components/DishCard'
import SelectBudget from '../Components/SelectBudget'
import EntreeImg from './../img/entrée_FoodWine.jpg'

const Entree = () => {
    return (
        <Fragment>
            <DishCard image={EntreeImg} title='Entrées' />
            <DescriptionListWine />
            <SelectBudget />
        </Fragment>
    )
}

export default Entree