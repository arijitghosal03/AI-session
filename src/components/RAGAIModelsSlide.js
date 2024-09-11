import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RefreshIcon from '@mui/icons-material/Refresh';

const RAGAIModelsSlide = () => {
  const [userQuery, setUserQuery] = useState('');
  const [response, setResponse] = useState('');
  const [retrievedInfo, setRetrievedInfo] = useState('');
  const [step, setStep] = useState(0);

  const knowledgeBase = [
    { topic: 'octopus', info: "Octopuses have three hearts." },
    { topic: 'paris', info: "The capital of France is Paris." },
    { topic: 'water', info: "Water boils at 100 degrees Celsius at sea level." },
    { topic: 'earth', info: "The Earth orbits around the Sun." },
    { topic: 'photosynthesis', info: "Photosynthesis is the process by which plants use sunlight to produce energy." },
    { topic: 'sharks', info: "Sharks are immune to most diseases." },
    { topic: 'honey', info: "Honey never spoils." },
    { topic: 'bananas', info: "Bananas are berries, but strawberries aren't." },
    { topic: 'venus', info: "A day on Venus is longer than a year on Venus." },
    { topic: 'eiffel tower', info: "The Eiffel Tower can be 15 cm taller during the summer." }
  ];

  const relatedQuestions = [
    "What are some fun facts about Earth?",
    "What's unique about octopuses?",
    "Tell me something cool about space!",
    "Why is Paris famous?",
    "What's a surprising fact about everyday things?",
  ];

  const fuzzyMatch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    // Check if any entry in the knowledgeBase topic contains the query
    const relevantEntry = knowledgeBase.find(entry =>
      lowerCaseQuery.includes(entry.topic)
    );
    return relevantEntry ? relevantEntry.info : null;
  };

  const simulateRAG = () => {
    // Step 1: Simulate retrieval using fuzzy matching
    const relevantInfo = fuzzyMatch(userQuery) || "No relevant information found.";
    setRetrievedInfo(relevantInfo);

    // Step 2: Simulate generation
    setStep(1);
    setTimeout(() => {
      setStep(2);
      if (relevantInfo !== "No relevant information found.") {
        setResponse(`Based on the retrieved information: "${relevantInfo}", here's a response to your query: ${userQuery}\n\nThis is how AI combines relevant information with natural language to generate responses!`);
      } else {
        setResponse(`Sorry, I couldn't find relevant information for your query: "${userQuery}". Try asking something else!`);
      }
    }, 1500); // Simulating "thinking"
  };

  return (
    <div>
      {/* Slide to demonstrate RAG */}
      <Card sx={{ maxWidth: 800, margin: 'auto', padding: '20px', backgroundColor: '#e3f2fd' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            What is RAG? 🤖
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Retrieval-Augmented Generation (RAG) is an AI technique that combines information retrieval with text generation. 
            Here's how it works:
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
              <EmojiObjectsIcon sx={{ fontSize: 50, color: '#ffca28' }} />
              <Typography variant="body2">Step 1: Retrieve Info</Typography>
              <Typography variant="caption">The model searches the knowledge base.</Typography>
            </Box>
            <RefreshIcon sx={{ fontSize: 40, color: '#0288d1' }} />
            <Box sx={{ textAlign: 'center' }}>
              <AutoAwesomeIcon sx={{ fontSize: 50, color: '#00e676' }} />
              <Typography variant="body2">Step 2: Generate Response</Typography>
              <Typography variant="caption">The model generates an answer using the retrieved data.</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Interactive RAG Model */}
      <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '20px', backgroundColor: '#f0f4ff' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Explore RAG in Action! 🎓
          </Typography>
          
          <Typography variant="body1" gutterBottom align="center">
            Ask a question below and see how the AI retrieves relevant info and generates a response.
          </Typography>

          <Box sx={{ my: 2 }}>
            <TextField
              fullWidth
              label="Ask a question"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
            />
          </Box>
          
          <Button variant="contained" onClick={simulateRAG} sx={{ my: 2, backgroundColor: '#00bcd4' }}>
            Get AI Response
          </Button>

          {step === 1 && (
            <Box sx={{ my: 2, textAlign: 'center' }}>
              <Typography variant="h6">Retrieving Information... 🔍</Typography>
              <EmojiObjectsIcon sx={{ fontSize: 40, color: '#ffca28' }} />
            </Box>
          )}

          {retrievedInfo && step === 2 && (
            <Box sx={{ my: 2, textAlign: 'center', p: 2, bgcolor: '#e3f2fd', borderRadius: '10px' }}>
              <Typography variant="subtitle1">Retrieved Information:</Typography>
              <Typography variant="body2">{retrievedInfo}</Typography>
            </Box>
          )}

          {step === 2 && (
            <Box sx={{ my: 2, textAlign: 'center' }}>
              <Typography variant="h6">Generating a Response... 🤖</Typography>
              <AutoAwesomeIcon sx={{ fontSize: 40, color: '#00e676' }} />
            </Box>
          )}

          {response && (
            <Box sx={{ my: 2, p: 2, bgcolor: '#ffebee', borderRadius: '10px' }}>
              <Typography variant="subtitle1">AI Response:</Typography>
              <Typography variant="body2">{response}</Typography>
            </Box>
          )}

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" align="center">Try asking these fun questions:</Typography>
            {relatedQuestions.map((question, idx) => (
              <Button key={idx} variant="outlined" onClick={() => setUserQuery(question)} sx={{ my: 1, mx: 1 }}>
                {question}
              </Button>
            ))}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default RAGAIModelsSlide;
