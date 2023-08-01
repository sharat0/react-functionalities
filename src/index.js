import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ImageFromURL from './components/ImageFromURL';
import ImageSearch from "./components/ImageSearch";
import ImageUploader from './components/ImageUploader';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div id='app'>
        <App />
        <ImageSearch/>
        <ImageFromURL />
        <ImageUploader/>
    </div>

);

reportWebVitals();
