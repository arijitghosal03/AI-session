import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

const RNNSlide = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const processInput = () => {
    setOutput([]);
    setCurrentStep(0);
  };

  const stepForward = () => {
    if (currentStep < input.length) {
      const newOutput = [...output, input[currentStep].toUpperCase()];
      setOutput(newOutput);
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">Recurrent Neural Networks</Typography>
        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            label="Enter a word"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2 }}>
          <Button variant="contained" onClick={processInput}>Process</Button>
          <Button variant="contained" onClick={stepForward}>Step Forward</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="50" r="30" fill="#ff9800" />
            <path d="M 130 50 Q 160 20 130 50 T 130 50" fill="none" stroke="black" strokeWidth="2" />
            <text x="95" y="55" fontSize="20">{output[currentStep - 1] || ''}</text>
            <text x="10" y="55" fontSize="16">{input[currentStep] || ''}</text>
            <text x="180" y="55" fontSize="16">{output[currentStep - 1] || ''}</text>
          </svg>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Output: {output.join('')}
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          This simple RNN takes lowercase letters as input and outputs uppercase letters. 
          It processes one character at a time, demonstrating how RNNs handle sequential data. 
          The loop in the diagram represents the recurrent connection, allowing the network to 
          use information from previous steps.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RNNSlide;