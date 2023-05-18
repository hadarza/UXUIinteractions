import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const ImageCrop = () => {
    async function getCroppedImg(imageSrc, croppedAreaPixels) {
        const image = new Image();
        image.src = imageSrc;
      
        return new Promise((resolve) => {
          image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
      
            canvas.width = croppedAreaPixels.width;
            canvas.height = croppedAreaPixels.height;
      
            ctx.drawImage(
              image,
              croppedAreaPixels.x,
              croppedAreaPixels.y,
              croppedAreaPixels.width,
              croppedAreaPixels.height,
              0,
              0,
              croppedAreaPixels.width,
              croppedAreaPixels.height
            );
      
            canvas.toBlob((blob) => {
              resolve(URL.createObjectURL(blob));
            }, 'image/png');
          };
        });
      }
      
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
      const [cropping,setCropping]= useState(null)
  const onCropComplete = async (_, croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    setCropping(croppedImage)
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if(file.size > 5120000){
      alert('Image size should be less than 5MB')
    }
    reader.onload = () => {
      setImageSrc(reader.result);
     // setCrop({ x: 0, y: 0 });
     // setZoom(1);
     // setCroppedImage(null);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageSrc && (
        <div style={{ width: '400px', height: '400px', position: 'relative' }}>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={4 / 4}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            showGrid={false}
            cropShape="round"
            restrictPosition={false}
          />
        </div>
      )}
      <div>
        <button onClick={() => setZoom((prevZoom) => prevZoom - 0.1)}>
          Zoom Out
        </button>
        <button onClick={() => setZoom((prevZoom) => prevZoom + 0.1)}>
          Zoom In
        </button>
        <button onClick={()=>{    
          setCroppedImage(cropping);
}}>ok

        </button>
      </div>
      {croppedImage && (
        <div>
          <h3>Cropped Image:</h3>
          <img className='img-present' src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
};

export default ImageCrop;

