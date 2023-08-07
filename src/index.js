import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ImageFromURL from './components/ImageFromURL';
import ImageSearch from "./components/ImageSearch";
import ImageUploader from './components/ImageUploader';
import CameraCapture from './components/CameraCapture';
import DropboxImageChooser from './components/DropboxImageChooser';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div id='app'>
        <Nav />
    </div>

);

reportWebVitals();
