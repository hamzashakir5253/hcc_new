import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',           // Full width at the bottom
        backgroundColor: '#484848',
        color: 'white',
        py: 3,
      }}
    >
      <Container maxWidth="lg" >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Dot Com Solutions
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
