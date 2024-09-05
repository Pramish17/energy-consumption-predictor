import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        <Typography variant="h3" align="center" gutterBottom>
          About This Project
        </Typography>
        <Typography variant="h6" align="center">
          This is a tool that allows users to predict energy consumption based on different variables such as sub-metering data, voltage, and global intensity. 
          It's powered by a machine learning model built using scikit-learn and React.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
