import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Box, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const drawerWidthExpanded = 240;
const drawerWidthCollapsed = 60;

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidthExpanded : drawerWidthCollapsed,
          flexShrink: 0,
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
          '& .MuiDrawer-paper': {
            width: open ? drawerWidthExpanded : drawerWidthCollapsed,
            boxSizing: 'border-box',
            overflowX: 'hidden',
          },
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center" p={1}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ display: open ? 'block' : 'none' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" sx={{ display: open ? 'block' : 'none' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" sx={{ display: open ? 'block' : 'none' }} />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        //   p: 3,
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
          marginLeft: open ? `${drawerWidthExpanded}px` : `${drawerWidthCollapsed}px`,
        }}
      >
        
      </Box>
    </Box>
  );
};

export default Sidebar;
