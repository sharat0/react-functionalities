import React, { useRef, useState } from 'react';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [errorText, setErrorText]= useState(null);

  const handleCapture = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        setErrorText('Error accessing the camera ', err);
        console.error('Error accessing the camera: ', err);
      }
    }
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setCapturedImage(dataUrl);
    videoRef.current.srcObject.getVideoTracks().forEach(track => track.stop());
  };

  return (
    <div className='App'>
      <h2>Camera Capture : </h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={handleCapture}>Capture Image</button>
        {capturedImage && <button onClick={handleSave}>Save Image</button>}
      </div>
      <h3 className='error-text'>{errorText}</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <video ref={videoRef} width="300" height="200" />
      </div>
      {capturedImage && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src={capturedImage} alt="Captured" />
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default CameraCapture;
