import React, { useState } from 'react';

const DropboxImageChooser = () => {
  const [imageURL, setImageURL] = useState('');

  // TODO: change from localhost to URL in chooser API

  const handleSuccess = files => {
    if (files.length > 0) {
      const file = files[0];
      setImageURL(file.link);
    }
  };

  const handleChooseImage = () => {
    const options = {
      success: handleSuccess,
      cancel: () => {},
      linkType: 'direct',
      multiselect: false,
      extensions: ['.jpg', '.png', '.gif'], 
    };

    window.Dropbox.choose(options);
  };

  return (
    <div className='App'>
      <h2>Dropbox Image : </h2>
      <button onClick={handleChooseImage}>Choose an Image from Dropbox</button>
      {imageURL && (
        <div>
          <h2>Selected Image:</h2>
          <img src={imageURL} alt="Selected from Dropbox" />
        </div>
      )}
    </div>
  );
};

export default DropboxImageChooser;
