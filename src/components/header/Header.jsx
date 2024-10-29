import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#484848' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HATIM CARBON COMPANY
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
