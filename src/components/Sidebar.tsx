import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import { FaHome } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      open={true}
      onClose={onClose}
      anchor="left"
      variant="persistent"
    >
      <List>
        <ListItem button onClick={onClose}>
            <ListItemIcon><FaHome/></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={onClose}>
        <ListItemIcon><FaHome/></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
