import React, { Fragment } from 'react'
import Budget from '../Components/Budget'
import DescriptionChoiceFood from '../Components/DescriptionChoiceFood'
import MainImg from '../Components/MainImg'
import SectionFood from '../Components/SectionFood'

const Home = () => {
    return (
        <Fragment>
            <MainImg />
            <SectionFood />
            <DescriptionChoiceFood />
            <Budget />
        </Fragment>
    )
}

export default Home