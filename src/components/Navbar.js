import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Energy App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/predict">
            Prediction
          </Button>
          <Button color="inherit" component={Link} to="/digital-twin">
            Digital Twin
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
