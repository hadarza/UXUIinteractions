import React, { useState, useRef, useEffect } from 'react';

const ImageDrag = () => {
  const [isPanning, setPanning] = useState(false);
  const [image, setImage] = useState();
  const [position, setPosition] = useState({
    oldX: 0,
    oldY: 0,
    x: 0,
    y: 0,
    z: 1,
  });

  const containerRef = useRef();

  const onLoad = (e) => {
    setImage({
      width: e.target.naturalWidth,
      height: e.target.naturalHeight,
    });
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    setPanning(true);
    setPosition({
      ...position,
      oldX: e.clientX,
      oldY: e.clientY,
    });
  };

  const onWheel = (e) => {
    if (e.deltaY) {
      const sign = Math.sign(e.deltaY) / 10;
      const scale = 1 - sign;
      const rect = containerRef.current.getBoundingClientRect();

      setPosition({
        ...position,
        x:
          position.x * scale -
          (rect.width / 2 - e.clientX + rect.x) * sign,
        y:
          position.y * scale -
          ((image.height * rect.width) / image.width / 2 - e.clientY + rect.y) *
            sign,
        z: position.z * scale,
      });
    }
  };

  useEffect(() => {
    const mouseup = () => {
      setPanning(false);
    };

    const mousemove = (event) => {
      if (isPanning && image) {
        const rect = containerRef.current.getBoundingClientRect();
        const minX = rect.width - image.width * position.z;
        const maxX = 0;
        const minY = rect.height - image.height * position.z;
        const maxY = 0;

        let newX = position.x + event.clientX - position.oldX;
        let newY = position.y + event.clientY - position.oldY;

        newX = Math.max(minX, Math.min(newX, maxX));
        newY = Math.max(minY, Math.min(newY, maxY));

        setPosition({
          ...position,
          x: newX,
          y: newY,
          oldX: event.clientX,
          oldY: event.clientY,
        });
      }
    };

    window.addEventListener('mouseup', mouseup);
    window.addEventListener('mousemove', mousemove);

    return () => {
      window.removeEventListener('mouseup', mouseup);
      window.removeEventListener('mousemove', mousemove);
    };
  }, [image, isPanning, position]);

  return (
    <div
      className="PanAndZoomImage-container"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onWheel={onWheel}
    >
      {image && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            width: `${image.width * position.z}px`,
            height: `${image.height * position.z}px`,
            transformOrigin: 'center',
          }}
        >   <img
            className="PanAndZoomImage-image"
            alt="floorplan"
            src="https://imgv3.fotor.com/images/share/Change-image-background-online-in-seconds-with-Fotors-AI-background-changer.jpg"
            onLoad={onLoad}
          />
        </div>
      )}
    </div>
  );
};

export default ImageDrag;