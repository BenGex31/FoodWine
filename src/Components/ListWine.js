import React from 'react'
import Wine from './Wine'
import data from '../data.json'

const ListWine = (props) => {
    const choiceCategory = data.filter(choice => choice.category === props.category);
    //console.log(choiceCategory)
    return (

        choiceCategory.filter(choice => choice.price === props.price).map(wine => (
            <Wine
            id={wine.id}
            type={wine.type}
            nameWine={wine.nameWine}
            description={wine.description}
            rating={wine.rating}
            story={wine.story}
            src={wine.imgWine}
            price={wine.price}
            year={wine.year}
            />
        ))
    )
}

export default ListWine