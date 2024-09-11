import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Box, LinearProgress } from '@mui/material';

const GANSlide = () => {
  const [generatedImage, setGeneratedImage] = useState(Array(6).fill(Array(6).fill(0)));
  const [discriminatorFeedback, setDiscriminatorFeedback] = useState('');
  const [generatorProgress, setGeneratorProgress] = useState(0);

  const generateImage = () => {
    setGeneratedImage(Array(6).fill().map(() => Array(6).fill().map(() => Math.random())));
    setGeneratorProgress(0);
    setDiscriminatorFeedback('');
  };

  const improveImage = () => {
    setGeneratedImage(prevImage => 
      prevImage.map(row => row.map(pixel => Math.min(1, pixel + Math.random() * 0.2)))
    );
    setGeneratorProgress(prev => Math.min(100, prev + 20));
  };

  useEffect(() => {
    if (generatorProgress >= 80) {
      setDiscriminatorFeedback("This looks like a real image!");
    } else if (generatorProgress >= 40) {
      setDiscriminatorFeedback("Getting better, but still not quite real.");
    } else {
      setDiscriminatorFeedback("This doesn't look like a real image.");
    }
  }, [generatorProgress]);

  const renderImage = (image) => (
    <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${image[0].length}, 1fr)`, gap: 1 }}>
      {image.flat().map((value, index) => (
        <Box key={index} sx={{ 
          width: '20px', 
          height: '20px', 
          backgroundColor: `rgba(33, 150, 243, ${value})`,
          border: '1px solid black'
        }} />
      ))}
    </Box>
  );

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">Generative Adversarial Networks</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          {renderImage(generatedImage)}
        </Box>
        <Box sx={{ my: 2 }}>
          <Button variant="contained" onClick={generateImage} sx={{ mr: 2 }}>Generate New Image</Button>
          <Button variant="contained" onClick={improveImage}>Improve Image</Button>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="subtitle1">Generator Progress:</Typography>
          <LinearProgress variant="determinate" value={generatorProgress} />
        </Box>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Discriminator: {discriminatorFeedback}
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          This demo simulates a GAN. The Generator creates images, starting with random noise. 
          The Discriminator provides feedback, helping the Generator improve its output. 
          In real GANs, this process continues until the generated images are indistinguishable from real ones.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GANSlide;