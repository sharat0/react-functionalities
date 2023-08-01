import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='App'>
        <h2>Upload File :</h2>
      <input type="file" onChange={handleImageChange} accept="image/*" /> <br/>
      {selectedImage && <img src={selectedImage} alt="Uploaded" className='searchImg'/>}
    </div>
  );
};

export default ImageUploader;
