import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Card, CardContent } from '@mui/material';

const EnergyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    sub_metering_1: '',
    sub_metering_2: '',
    voltage: '',
    global_intensity: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send form data back to parent component
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sub Metering 1"
                name="sub_metering_1"
                type="number"
                value={formData.sub_metering_1}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sub Metering 2"
                name="sub_metering_2"
                type="number"
                value={formData.sub_metering_2}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Voltage"
                name="voltage"
                type="number"
                value={formData.voltage}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Global Intensity"
                name="global_intensity"
                type="number"
                value={formData.global_intensity}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Predict
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnergyForm;
