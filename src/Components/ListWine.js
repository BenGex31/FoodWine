import React from 'react'
import Wine from './Wine'
import data from '../data.json'
import {Container} from 'reactstrap'

const ListWine = (props) => {
    const choiceCategory = data.filter(choice => choice.category === props.category);
    console.log(choiceCategory)
    return (
        choiceCategory.map(wine => (
            <Container>
                <Wine id={wine.id} nameWine={wine.nameWine} description={wine.description} rating={wine.rating} story={wine.story} src={wine.imgWine} price={wine.price} year={wine.year} />
            </Container>
        ))
        
    )
}

export default ListWine