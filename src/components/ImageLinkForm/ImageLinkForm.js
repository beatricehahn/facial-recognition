import React, { useState } from 'react';
//import Clarifai from 'clarifai';
import './ImageLinkForm.css';
export const URL = "google";

function ImageLinkForm () {
    /*const app = new Clarifai.App({
        apiKey: 'f3313b24c9ae4c4aac936aeb4756a1e3'
    }); */
    const USER_ID = 'concretelinguist';
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = '06e226a3d5544e258ca3aea5c7b26324';
    const APP_ID = 'my-first-application';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
    const [input, setInput] = useState('');
    let IMAGE_URL = 'https://samples.clarifai.com/face-det.jpg';
    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
    
    // save the url string
    const onInputChange = (input) => {
        console.log(input.target.value);
        setInput(input);
    }

    //onClick for button, carry out a fetch request from clarifai api
    const onButtonSubmit = () => {       
        IMAGE_URL = setInput(input);
        console.log({IMAGE_URL});
        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <p className="f3">
                {'Detect faces in your pictures.'}
            </p>
            <div className="center">
                <div className = "pa4 br3 shadow-5 form center">
                    <input className="f4 pa2 w-70 center" type="tex" onChange={e => onInputChange(e)}/>
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
