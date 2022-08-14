import React from 'react';
import {URL} from './components/ImageLinkForm/ImageLinkForm';

const FaceRecognition = ({URL}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img src={URL} alt="the picture from the url you chose" width='500px' height='auto'></img>
            </div>
        </div>
    );
}

export default FaceRecognition;
