import React, { useRef, useEffect } from 'react';

import image1 from '../../../assets/gallery-conference-hall-drawing.jpg';
import image2 from '../../../assets/Strategic-Partners-under-the-Design-Materials-and-Manufacturing.png';

const MergedBlurredImage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Create a temporary canvas for blending the images
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');

    // Load the first image
    const img1 = new Image();
    img1.src = image1;
    img1.onload = () => {
      tempCanvas.width = img1.width;
      tempCanvas.height = img1.height;
      tempCtx.drawImage(img1, 0, 0);

      // Load the second image
      const img2 = new Image();
      img2.src = image2;
      img2.onload = () => {
        // Draw the second image with a gradient mask
        tempCtx.globalCompositeOperation = 'source-over';
        const gradient = tempCtx.createLinearGradient(0, 0, img2.width, 0);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
        tempCtx.fillStyle = gradient;
        tempCtx.fillRect(0, 0, img2.width, img2.height);
        tempCtx.globalCompositeOperation = 'source-atop';
        tempCtx.drawImage(img2, 0, 0);

        // Apply blur filter
        tempCtx.filter = 'blur(10px)'; // Adjust the blur radius as needed
        tempCtx.drawImage(tempCanvas, 0, 0);

        // Draw the blended and blurred image on the main canvas
        canvas.width = tempCanvas.width;
        canvas.height = tempCanvas.height;
        ctx.drawImage(tempCanvas, 0, 0);
      };
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MergedBlurredImage;