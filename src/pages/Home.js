import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/background.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100vw', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden', 
        padding: '20px',
        position: 'relative', 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Energy Consumption Predictor
        </Typography>
        <Typography variant="h6" align="center">
          Use our tool to predict energy consumption based on different variables.
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
