import React from 'react';
import { Box, Alert, Typography } from '@mui/material';

const PredictionResult = ({ prediction, error }) => {
  if (error) {
    return (
      <Box mt={3}>
        <Alert severity="error">
          <Typography variant="h6">Error: {error}</Typography>
        </Alert>
      </Box>
    );
  }

  if (prediction) {
    return (
      <Box mt={3}>
        <Alert severity="success">
          <Typography variant="h6">
            Predicted Energy Consumption: {prediction} kWh
          </Typography>
        </Alert>
      </Box>
    );
  }

  return null;
};

export default PredictionResult;
