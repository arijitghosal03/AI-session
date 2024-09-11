import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Brain } from 'lucide-react';

const MLIntroSlide = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentExample, setCurrentExample] = useState(0);

  const examples = [
    { input: "🐱", output: "Cat" },
    { input: "🐶", output: "Dog" },
    { input: "🐠", output: "Fish" },
    { input: "🐘", output: "Elephant" },
  ];

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setShowAnswer(false);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom align="center">
          Machine Learning: Image Classification
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <Brain size={64} color="#2196f3" />
          <Typography variant="body1" align="center">
            Machine Learning can identify objects in images!
          </Typography>
          <Typography variant="h2">{examples[currentExample].input}</Typography>
          <Button variant="contained" onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? "Hide Answer" : "What am I?"}
          </Button>
          {showAnswer && (
            <Typography variant="h6">
              I'm a {examples[currentExample].output}!
            </Typography>
          )}
          <Button variant="outlined" onClick={nextExample}>Next Example</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MLIntroSlide;