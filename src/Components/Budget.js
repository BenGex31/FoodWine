import React from 'react'
import './Budget.css'

const Budget = () => {
    return (
        <div className='container'>
            <div className='row text-center'>
                <div className='col d-flex justify-content-center'>
                    <div className='budgetBloc d-flex justify-content-center align-items-center'>
                        <h5 className='budget'>Pour tous les budgets</h5>
                        <i class="fas fa-euro-sign"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget