import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box } from '@mui/material';
import EnergyForm from '../components/EnergyForm';
import PredictionResult from '../components/PredictionResult';

const Prediction = () => {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handlePredictionSubmit = async (formData) => {
    setError(null); // Reset error state before making the request

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        sub_metering_1: parseFloat(formData.sub_metering_1),
        sub_metering_2: parseFloat(formData.sub_metering_2),
        voltage: parseFloat(formData.voltage),
        global_intensity: parseFloat(formData.global_intensity)
      });

      setPrediction(response.data.predicted_energy_consumption);
    } catch (error) {
      setError(error.response ? error.response.data.error : 'Network Error');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <EnergyForm onSubmit={handlePredictionSubmit} />
        <PredictionResult prediction={prediction} error={error} />
      </Box>
    </Container>
  );
};

export default Prediction;
