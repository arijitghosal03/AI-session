import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const NeuralNetworkTypesSlide = () => {
  const [currentType, setCurrentType] = useState(0);

  const networkTypes = [
    {
      name: "Feedforward Neural Network",
      description: "Information flows in one direction from input to output.",
      svg: (
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="50" r="10" fill="#2196f3" />
          <circle cx="100" cy="30" r="10" fill="#ff9800" />
          <circle cx="100" cy="70" r="10" fill="#ff9800" />
          <circle cx="180" cy="50" r="10" fill="#4caf50" />
          <line x1="30" y1="50" x2="90" y2="30" stroke="black" />
          <line x1="30" y1="50" x2="90" y2="70" stroke="black" />
          <line x1="110" y1="30" x2="170" y2="50" stroke="black" />
          <line x1="110" y1="70" x2="170" y2="50" stroke="black" />
        </svg>
      )
    },
    {
      name: "Convolutional Neural Network (CNN)",
      description: "Specialized for processing grid-like data, such as images.",
      svg: (
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="30" width="40" height="40" fill="#2196f3" />
          <rect x="60" y="30" width="30" height="30" fill="#ff9800" />
          <rect x="100" y="30" width="20" height="20" fill="#ff9800" />
          <circle cx="140" cy="50" r="10" fill="#ff9800" />
          <circle cx="180" cy="50" r="10" fill="#4caf50" />
          <line x1="50" y1="50" x2="60" y2="50" stroke="black" />
          <line x1="90" y1="50" x2="100" y2="50" stroke="black" />
          <line x1="120" y1="50" x2="130" y2="50" stroke="black" />
          <line x1="150" y1="50" x2="170" y2="50" stroke="black" />
        </svg>
      )
    },
    {
      name: "Recurrent Neural Network (RNN)",
      description: "Can process sequential data using internal memory.",
      svg: (
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="15" fill="#ff9800" />
          <circle cx="150" cy="50" r="15" fill="#4caf50" />
          <path d="M 65 50 Q 100 0 135 50" fill="none" stroke="black" />
          <path d="M 135 50 Q 100 100 65 50" fill="none" stroke="black" />
          <line x1="20" y1="50" x2="35" y2="50" stroke="black" />
          <line x1="165" y1="50" x2="180" y2="50" stroke="black" />
        </svg>
      )
    }
  ];

  const nextType = () => {
    setCurrentType((prev) => (prev + 1) % networkTypes.length);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom align="center">
          Types of Neural Networks
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <Typography variant="h6" align="center">
            {networkTypes[currentType].name}
          </Typography>
          <Box sx={{ width: '100%', height: '150px' }}>
            {networkTypes[currentType].svg}
          </Box>
          <Typography variant="body1" align="center">
            {networkTypes[currentType].description}
          </Typography>
          <Button variant="contained" onClick={nextType}>Next Type</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NeuralNetworkTypesSlide;