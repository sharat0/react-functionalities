import React, { useState } from 'react';
import axios from 'axios';

const ImageSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showResults, setShowResults] = useState(true);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchImages();
  };

  const searchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          headers: {
            Authorization: `Client-ID HcxnCUhkN-wK_NVkkYzThD0o4jCFcBAbQjToF5gj3ME`,
          },
          params: {
            query: searchText,
            per_page: 50,
          },
        }
      );

      setImages(response.data.results);
      setShowResults(true);
      setSelectedImage(null);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowResults(false);
  };

  return (
    <div id='imageSearch' className='App'>
      <form onSubmit={handleSubmit}>
        <h2>Image Search :</h2>
        <input
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Enter search text"
        />
        <button type="submit">Search</button>
      </form>

      {showResults && (
        <div>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => handleImageClick(image)}
              className='searchImg'
            />
          ))}
        </div>
      )}

      {!showResults && selectedImage && (
        <div>
          <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} className='searchImg' />
          <br />
          <button onClick={() => setShowResults(true)}>Back to Results</button>
        </div>
      )}
    </div>
  );
};

export default ImageSearch;
