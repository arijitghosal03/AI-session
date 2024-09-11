import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Menu, MenuItem } from '@mui/material';
import MLIntroSlide from './components/MLIntroSlide';
import NeuralNetworkSlide from './components/NeuralNetworkSlide';
import NeuralNetworkTypesSlide from './components/NeuralNetworkTypesSlide';
import DeepLearningBasicsSlide from './components/DeepLearningBasicsSlide';
import CNNSlide from './components/CNNSlide';
import RNNSlide from './components/RNNSlide';
import AutoencoderSlide from './components/AutoencoderSlide';
import GANSlide from './components/GANSlide';
import RAGAIModelsSlide from './components/RAGAIModelsSlide';

function App() {
  const [currentSlide, setCurrentSlide] = useState('mlIntro');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSlideChange = (slide) => {
    setCurrentSlide(slide);
    handleClose();
  };

  const renderSlide = () => {
    switch(currentSlide) {
      case 'mlIntro': return <MLIntroSlide />;
      case 'neuralNetwork': return <NeuralNetworkSlide />;
      case 'networkTypes': return <NeuralNetworkTypesSlide />;
      case 'deepLearningBasics': return <DeepLearningBasicsSlide />;
      case 'cnn': return <CNNSlide />;
      case 'rnn': return <RNNSlide />;
      case 'autoencoder': return <AutoencoderSlide />;
      case 'gan': return <GANSlide />;
      case 'ragAIModels': return <RAGAIModelsSlide />;
      default: return <MLIntroSlide />;
    }
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Deep Learning Interactive Slides
          </Typography>
          <Button color="inherit" onClick={handleClick}>Select Slide</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleSlideChange('mlIntro')}>ML Intro</MenuItem>
            <MenuItem onClick={() => handleSlideChange('neuralNetwork')}>Neural Network</MenuItem>
            <MenuItem onClick={() => handleSlideChange('networkTypes')}>Network Types</MenuItem>
            <MenuItem onClick={() => handleSlideChange('deepLearningBasics')}>Deep Learning Basics</MenuItem>
            <MenuItem onClick={() => handleSlideChange('cnn')}>CNNs</MenuItem>
            <MenuItem onClick={() => handleSlideChange('rnn')}>RNNs</MenuItem>
            <MenuItem onClick={() => handleSlideChange('autoencoder')}>Autoencoders</MenuItem>
            <MenuItem onClick={() => handleSlideChange('gan')}>GANs</MenuItem>
            <MenuItem onClick={() => handleSlideChange('ragAIModels')}>RAGs & AI Models</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ my: 4 }}>
          {renderSlide()}
        </Box>
      </Container>
    </div>
  );
}

export default App;