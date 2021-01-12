import React, { Fragment } from 'react'
import DescriptionChoiceFood from '../Components/DescriptionChoiceFood'
import MainImg from '../Components/MainImg'
import SectionFood from '../Components/SectionFood'

const Home = () => {
    return (
        <Fragment>
            <MainImg />
            <DescriptionChoiceFood />
            <SectionFood />
        </Fragment>
    )
}

export default Home