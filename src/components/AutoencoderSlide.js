import React, { useState } from 'react';
import { Card, CardContent, Typography, Slider, Box } from '@mui/material';

const AutoencoderSlide = () => {
  const [compression, setCompression] = useState(50);
  
  const originalImage = [
    [1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1]
  ];

  const compressImage = (image, compressionLevel) => {
    const compressed = image.map(row => 
      row.map(pixel => pixel * (compressionLevel / 100))
    );
    return compressed;
  };

  const renderImage = (image, size = 20) => (
    <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${image[0].length}, 1fr)`, gap: 1 }}>
      {image.flat().map((value, index) => (
        <Box key={index} sx={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          backgroundColor: `rgba(33, 150, 243, ${value})`,
          border: '1px solid black'
        }} />
      ))}
    </Box>
  );

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">Autoencoders</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', my: 2 }}>
          <Box>
            <Typography variant="subtitle1">Original</Typography>
            {renderImage(originalImage)}
          </Box>
          <Box>
            <Typography variant="subtitle1">Encoded</Typography>
            {renderImage(compressImage(originalImage, compression), 10)}
          </Box>
          <Box>
            <Typography variant="subtitle1">Decoded</Typography>
            {renderImage(compressImage(originalImage, compression))}
          </Box>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography id="compression-slider" gutterBottom>Compression: {compression}%</Typography>
          <Slider
            aria-labelledby="compression-slider"
            value={compression}
            onChange={(_, newValue) => setCompression(newValue)}
            valueLabelDisplay="auto"
          />
        </Box>
        <Typography variant="body2">
          Autoencoders learn to compress (encode) input data and then reconstruct (decode) it. 
          The slider simulates different levels of compression in the encoded representation. 
          Notice how the autoencoder tries to reconstruct the original image from the compressed data. 
          At lower compression levels, more detail is preserved.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AutoencoderSlide;