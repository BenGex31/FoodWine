import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function ToastAddWine(){
    const notify = () => toast("Bravo ! Votre vin a été ajouté");

    return (
        <div className="col">
            <button id="submitAddWine" type="button" onClick={notify}>Soumettre !</button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
            <ToastContainer />
        </div>
    );
}

export default ToastAddWine