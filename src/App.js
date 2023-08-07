import './App.css';
import useDrivePicker from 'react-google-drive-picker';
import { useEffect, useState } from 'react';

function App() {
  const [openPicker, data, authResponsive] = useDrivePicker();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenPicker = () => {
    try {
      openPicker({
        clientId: '40933126903-1v96olplokq9tvtbqltg5e06r4fmq81h.apps.googleusercontent.com',
        developerKey: 'AIzaSyC1-p7REKwhaEMc3RygAgKmR9D3l_K1UBs',
        viewId: "DOCS",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: false,
        callbackFunction: (data) => {
          if (data.action === 'picked') {
            const fileId = data.docs[0].id;
            const selectedImageURL = `https://drive.google.com/uc?export=view&id=${fileId}`;
            setSelectedImage({ name: data.docs[0].name, url: selectedImageURL });
          } else if (data.action === 'cancel') {
            console.log('User clicked cancel/close button');
          }
        },
      });

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (data && data.docs) {
      data.docs.map((i) => console.log(i));
    }
  }, [data]);

  return (
    <div className="App" id="driveImage">
      
      <h2>Select Image - Drive :</h2>
      <button onClick={() => handleOpenPicker()}>Open Drive Picker</button>
      {selectedImage && (
        <div>
          <img src={selectedImage.url} alt={selectedImage.name} className='drive-img' />
        </div>
      )}
    </div>
  );
}

export default App;
