import React, { useState } from 'react';
import App from '../../App';
import './ImageLinkForm.css';

function ImageLinkForm () {
    // Declare state variable for user img search url
    const [input, setInput] = useState(0);
    
    function onInputChange (event) {
        console.log(event.target.value);
        setInput(event.target.value+input);
    }

    const onButtonSubmit = () => {
        console.log('click');
        app.models
            .predict("06e226a3d5544e258ca3aea5c7b2632",
            "url")
            .then(
            function(response) {
                console.log(response);
            },
            function(err) {
                // there was an error
            }
        )
    }

    return (
        <div>
            <p className="f3">
                {'Detect faces in your pictures.'}
            </p>
            <div className="center">
                <div className = "pa4 br3 shadow-5 form center">
                    <input className="f4 pa2 w-70 center" type="tex" onChange={onInputChange}/>
                    <button 
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={onButtonSubmit}    
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
