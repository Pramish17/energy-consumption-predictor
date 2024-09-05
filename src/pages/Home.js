import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/background.jpg")', // Make sure the image is in public/images
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full height of the viewport
        width: '100vw', // Full width of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // White text for contrast
        textAlign: 'center',
        overflow: 'hidden', // Ensures no scrolling
        padding: '20px',
        position: 'relative', // Keep the container in the viewable area
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
