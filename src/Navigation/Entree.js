import React, { Fragment } from 'react'
import DescriptionListWine from '../Components/DescriptionListWine'
import DishCard from '../Components/DishCard'
import FilterWine from '../Components/FilterWine'
import EntreeImg from './../img/entrée_FoodWine.jpg'
import './Entree.css'


//const listWine = data.filter(element => element.category === "entrée")

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
            <FilterWine category="entrée"/>
        </Fragment>
    )
}

export default Entree