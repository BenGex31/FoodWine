import React from "react";
import { Link } from "react-router-dom";

const ButtonAddWine = () => {
    return(
        <button className="addWine">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="#000" width="30" height="30">
            <polygon points="17,15 17,8 15,8 15,15 8,15 8,17 15,17 15,24 17,24 17,17 24,17 24,15"/>
            <rect width="30" height="30" fill="none"/>
            </svg>
            <Link
                to='/formulaire'>
                    Ajouter un vin
            </Link>
        </button>
    )
}

export default ButtonAddWine