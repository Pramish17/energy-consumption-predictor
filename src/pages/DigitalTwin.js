import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Grid, Paper, Card, CardContent } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const MAX_DATA_POINTS = 20;  // Limit the number of points to display on the graph

const DigitalTwin = () => {
  const [formData, setFormData] = useState({
    sub_metering_1: 1.0,
    sub_metering_2: 1.5,
    voltage: 230.0,
    global_intensity: 10.0,
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  // State variables for different metrics' graph data
  const [graphData, setGraphData] = useState([]);
  const [voltageData, setVoltageData] = useState([]);
  const [subMeteringData, setSubMeteringData] = useState([]);
  const [intensityData, setIntensityData] = useState([]);

  // Function to simulate real-time changes in data
  const simulateData = () => {
    setFormData((prevData) => ({
      ...prevData,
      sub_metering_1: (Math.random() * 5).toFixed(2),
      sub_metering_2: (Math.random() * 5).toFixed(2),
      voltage: (220 + Math.random() * 10).toFixed(2),
      global_intensity: (5 + Math.random() * 15).toFixed(2),
    }));
  };

  const fetchPrediction = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        sub_metering_1: parseFloat(formData.sub_metering_1),
        sub_metering_2: parseFloat(formData.sub_metering_2),
        voltage: parseFloat(formData.voltage),
        global_intensity: parseFloat(formData.global_intensity),
      });

      setPrediction(response.data.predicted_energy_consumption);

      const currentTime = new Date().toLocaleTimeString();

      // Add new data points and maintain the sliding window of data points
      setGraphData((prevData) => {
        const newData = [...prevData, {
          time: currentTime,
          energy: response.data.predicted_energy_consumption,
        }];
        return newData.length > MAX_DATA_POINTS ? newData.slice(-MAX_DATA_POINTS) : newData;
      });

      setVoltageData((prevData) => {
        const newData = [...prevData, {
          time: currentTime,
          voltage: formData.voltage,
        }];
        return newData.length > MAX_DATA_POINTS ? newData.slice(-MAX_DATA_POINTS) : newData;
      });

      setSubMeteringData((prevData) => {
        const newData = [...prevData, {
          time: currentTime,
          sub_metering_1: formData.sub_metering_1,
          sub_metering_2: formData.sub_metering_2,
        }];
        return newData.length > MAX_DATA_POINTS ? newData.slice(-MAX_DATA_POINTS) : newData;
      });

      setIntensityData((prevData) => {
        const newData = [...prevData, {
          time: currentTime,
          global_intensity: formData.global_intensity,
        }];
        return newData.length > MAX_DATA_POINTS ? newData.slice(-MAX_DATA_POINTS) : newData;
      });

    } catch (error) {
      setError(error.response ? error.response.data.error : 'Network Error');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      simulateData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchPrediction();
  }, [formData]);

  return (
    <Container maxWidth="lg">
      <Box mt={5} mb={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Real-Time Digital Twin Monitoring
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Simulating and visualizing energy consumption metrics in real-time.
        </Typography>

        <Grid container spacing={4} mt={3}>
          {/* Real-time data metrics displayed in cards */}
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">
                  Sub Metering 1
                </Typography>
                <Typography variant="h4" align="center" color="primary">
                  {formData.sub_metering_1} kWh
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">
                  Sub Metering 2
                </Typography>
                <Typography variant="h4" align="center" color="primary">
                  {formData.sub_metering_2} kWh
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">
                  Voltage
                </Typography>
                <Typography variant="h4" align="center" color="primary">
                  {formData.voltage} V
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">
                  Global Intensity
                </Typography>
                <Typography variant="h4" align="center" color="primary">
                  {formData.global_intensity} A
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Energy Consumption Graph */}
        <Box mt={5}>
          <Typography variant="h6" align="left" gutterBottom>
            Energy Consumption Over Time
          </Typography>
          <Paper elevation={3}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="energy" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Box>

        {/* Voltage Monitoring Graph */}
        <Box mt={5}>
          <Typography variant="h6" align="left" gutterBottom>
            Voltage Over Time
          </Typography>
          <Paper elevation={3}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={voltageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="voltage" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Box>

        {/* Sub Metering Monitoring Graph */}
        <Box mt={5}>
          <Typography variant="h6" align="left" gutterBottom>
            Sub Metering Over Time
          </Typography>
          <Paper elevation={3}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={subMeteringData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sub_metering_1" stroke="#8884d8" />
                <Line type="monotone" dataKey="sub_metering_2" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Box>

        {/* Global Intensity Monitoring Graph */}
<Box mt={5}>
  <Typography variant="h6" align="left" gutterBottom>
    Global Intensity Over Time
  </Typography>
  <Paper elevation={3}>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={intensityData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        {/* Try a fixed domain to make sure values fit within the graph */}
        <YAxis domain={[0, 20]} /> {/* Static Y-axis range between 0 and 20 */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="global_intensity" stroke="#ff7300" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </Paper>
</Box>
      </Box>
    </Container>
  );
};

export default DigitalTwin;
