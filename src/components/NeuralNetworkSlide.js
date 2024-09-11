import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { BrainCircuit } from 'lucide-react';

const NeuralNetworkSlide = () => {
  const [input, setInput] = useState(0);
  const [hiddenLayer, setHiddenLayer] = useState(0);
  const [output, setOutput] = useState(0);

  const processInput = () => {
    const newHidden = Math.sin(input * 0.5) * 2;
    setHiddenLayer(Number(newHidden.toFixed(2)));
    
    const newOutput = Math.tanh(newHidden);
    setOutput(Number(newOutput.toFixed(2)));
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom align="center">
          How Neural Networks Work
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <BrainCircuit size={64} color="#9c27b0" />
          <Typography variant="body1" align="center">
            Neural networks process data through interconnected layers!
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div>
              <Typography variant="subtitle1">Input</Typography>
              <TextField
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
                variant="outlined"
                size="small"
              />
            </div>
            <div>
              <Typography variant="subtitle1">Hidden</Typography>
              <Typography variant="body1" sx={{ bgcolor: 'grey.200', p: 1, borderRadius: 1 }}>
                {hiddenLayer}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1">Output</Typography>
              <Typography variant="body1" sx={{ bgcolor: 'grey.200', p: 1, borderRadius: 1 }}>
                {output}
              </Typography>
            </div>
          </div>
          <Button variant="contained" onClick={processInput}>Process Input</Button>
          <Typography variant="body2" align="center">
            This simplified model shows how data flows through a neural network,
            being transformed at each layer.
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeuralNetworkSlide;