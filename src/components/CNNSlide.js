import React, { useState } from 'react';
import { Card, CardContent, Typography, Slider, Box, Button } from '@mui/material';

const CNNSlide = () => {
  const [filterSize, setFilterSize] = useState(3);
  const [inputImage, setInputImage] = useState(Array(5).fill(Array(5).fill(0)));
  const [filter, setFilter] = useState(Array(3).fill(Array(3).fill(0)));

  const generateRandomImage = () => {
    setInputImage(Array(5).fill().map(() => Array(5).fill().map(() => Math.round(Math.random()))));
  };

  const generateRandomFilter = () => {
    setFilter(Array(filterSize).fill().map(() => Array(filterSize).fill().map(() => Math.round(Math.random() * 2 - 1))));
  };

  const convolve = () => {
    const outputSize = 6 - filterSize;
    let output = Array(outputSize).fill().map(() => Array(outputSize).fill(0));
    
    for (let i = 0; i < outputSize; i++) {
      for (let j = 0; j < outputSize; j++) {
        let sum = 0;
        for (let fi = 0; fi < filterSize; fi++) {
          for (let fj = 0; fj < filterSize; fj++) {
            sum += inputImage[i + fi][j + fj] * filter[fi][fj];
          }
        }
        output[i][j] = Math.max(0, sum); // ReLU activation
      }
    }
    
    return output;
  };

  const renderMatrix = (matrix) => (
    <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${matrix[0].length}, 1fr)`, gap: 1 }}>
      {matrix.flat().map((value, index) => (
        <Box key={index} sx={{ 
          width: '20px', 
          height: '20px', 
          backgroundColor: value > 0 ? `rgba(33, 150, 243, ${value})` : 'white',
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {value !== 0 && value.toFixed(1)}
        </Box>
      ))}
    </Box>
  );

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">Convolutional Neural Networks</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', my: 2 }}>
          <Box>
            <Typography variant="subtitle1">Input Image</Typography>
            {renderMatrix(inputImage)}
            <Button onClick={generateRandomImage} sx={{ mt: 1 }}>Randomize Input</Button>
          </Box>
          <Box>
            <Typography variant="subtitle1">Filter</Typography>
            {renderMatrix(filter)}
            <Button onClick={generateRandomFilter} sx={{ mt: 1 }}>Randomize Filter</Button>
          </Box>
          <Box>
            <Typography variant="subtitle1">Output</Typography>
            {renderMatrix(convolve())}
          </Box>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography id="filter-size-slider" gutterBottom>Filter Size: {filterSize}x{filterSize}</Typography>
          <Slider
            aria-labelledby="filter-size-slider"
            value={filterSize}
            onChange={(_, newValue) => {
              setFilterSize(newValue);
              generateRandomFilter();
            }}
            min={2}
            max={4}
            step={1}
            marks
            valueLabelDisplay="auto"
          />
        </Box>
        <Typography variant="body2">
          This interactive demo shows how a convolutional filter works. The filter slides over the input image, 
          performing element-wise multiplication and summing the results to produce the output. 
          Adjust the filter size and randomize the input and filter to see how it affects the output.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CNNSlide;