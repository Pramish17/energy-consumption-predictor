import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Energy Consumption Predictor
        </Typography>
        <Typography variant="h6" align="center">
          Use our tool to predict energy consumption based on different variables.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
