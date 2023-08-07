import '../App.css';
import App from '../App';
import DropboxImageChooser from './DropboxImageChooser';
import ImageSearch from './ImageSearch';
import ImageFromURL from './ImageFromURL';
import ImageUploader from './ImageUploader';
import CameraCapture from './CameraCapture';
import { useState } from 'react';

function Nav() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleLinkClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <div id="AppNav">
        <nav className="nav nav-pills nav-justified" id="nav">
          <a className={`nav-link ${activeComponent === 'drive' ? 'active' : ''}`} href="#" onClick={() => handleLinkClick('drive')}>
            Select from Drive
          </a>
          <a className={`nav-link ${activeComponent === 'search' ? 'active' : ''}`} href="#" onClick={() => handleLinkClick('search')}>
            Image Search
          </a>
          <a className={`nav-link ${activeComponent === 'url' ? 'active' : ''}`} href="#" onClick={() => handleLinkClick('url')}>
            Image from URL
          </a>
          <a className={`nav-link ${activeComponent === 'upload' ? 'active' : ''}`} href="#" onClick={() => handleLinkClick('upload')}>
            Upload Image
          </a>
          <a className={`nav-link ${activeComponent === 'capture' ? 'active' : ''}`} href="#" onClick={() => handleLinkClick('capture')}>
            Capture Image
          </a>
          <a className={`nav-link ${activeComponent === 'dropbox' ? 'active' : ''}`} href="#" onClick={() => handleLinkClick('dropbox')}>
            Select from Dropbox
          </a>
        </nav>
      </div>
        {activeComponent === 'drive' && <App/>}
        {activeComponent === 'search' && <ImageSearch />}
        {activeComponent === 'url' && <ImageFromURL/>}
        {activeComponent === 'upload' && <ImageUploader/>}
        {activeComponent === 'capture' && <CameraCapture/>}
        {activeComponent === 'dropbox' && <DropboxImageChooser/>}
    </>
  );
}

export default Nav;
