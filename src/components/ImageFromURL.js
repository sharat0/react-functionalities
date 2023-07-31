import React, { useState } from 'react';

const ImageFromURL = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [displayImage, setDisplayImage] = useState('');

  const handleInputChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleImageDisplay = () => {
    setDisplayImage(imageUrl);
  };
  
  return (
    <div id='imageUrlForm'>
      <h2>Get Image from URL :</h2>
        <input
          type="text"
          placeholder="Enter Image URL"
          value={imageUrl}
          onChange={handleInputChange}
        />
        <button onClick={handleImageDisplay}>Display Image</button>
      
      {displayImage && (
        <div>
          <img src={displayImage} alt="User Input" className='urlImage' />
        </div>
      )}
    </div>
  );
};

export default ImageFromURL;
