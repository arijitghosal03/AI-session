import React, { useState } from 'react';
import { Card, CardContent, Typography, Slider, Box } from '@mui/material';

const DeepLearningBasicsSlide = () => {
  const [layers, setLayers] = useState(3);
  const [neurons, setNeurons] = useState(4);

  const NetworkVisualization = ({ layers, neurons }) => (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      {[...Array(layers)].map((_, layerIndex) => (
        [...Array(neurons)].map((_, neuronIndex) => (
          <React.Fragment key={`${layerIndex}-${neuronIndex}`}>
            <circle 
              cx={10 + (layerIndex * 180 / (layers - 1))} 
              cy={10 + (neuronIndex * 80 / (neurons - 1))} 
              r="5" 
              fill={layerIndex === 0 ? "#2196f3" : layerIndex === layers - 1 ? "#4caf50" : "#ff9800"}
            />
            {layerIndex < layers - 1 && [...Array(neurons)].map((_, nextNeuronIndex) => (
              <line 
                key={`${layerIndex}-${neuronIndex}-${nextNeuronIndex}`}
                x1={15 + (layerIndex * 180 / (layers - 1))} 
                y1={10 + (neuronIndex * 80 / (neurons - 1))}
                x2={5 + ((layerIndex + 1) * 180 / (layers - 1))} 
                y2={10 + (nextNeuronIndex * 80 / (neurons - 1))}
                stroke="black" 
                strokeWidth="0.5"
              />
            ))}
          </React.Fragment>
        ))
      ))}
    </svg>
  );

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">Deep Learning Basics</Typography>
        <Box sx={{ my: 2 }}>
          <Typography id="layers-slider" gutterBottom>Number of Layers: {layers}</Typography>
          <Slider
            aria-labelledby="layers-slider"
            value={layers}
            onChange={(_, newValue) => setLayers(newValue)}
            min={2}
            max={5}
            step={1}
            marks
            valueLabelDisplay="auto"
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography id="neurons-slider" gutterBottom>Neurons per Layer: {neurons}</Typography>
          <Slider
            aria-labelledby="neurons-slider"
            value={neurons}
            onChange={(_, newValue) => setNeurons(newValue)}
            min={2}
            max={6}
            step={1}
            marks
            valueLabelDisplay="auto"
          />
        </Box>
        <Box sx={{ width: '100%', height: '200px' }}>
          <NetworkVisualization layers={layers} neurons={neurons} />
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Adjust the sliders to see how changing the number of layers and neurons affects the network architecture. 
          More layers and neurons increase the network's capacity to learn complex patterns, but also increase 
          computational requirements and the risk of overfitting.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DeepLearningBasicsSlide;