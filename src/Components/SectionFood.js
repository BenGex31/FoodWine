import React from "react";
import Entree from "./Entree";
import './SectionFood.css';


const SectionFood = () => {
    return (
        <section className='food'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Entree />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFood