import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const MainListItems = (): React.ReactElement => {
  return (
    <List component="nav">
      <ListItem>
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <QrCodeScannerIcon />
          </ListItemIcon>
          <ListItemText primary="Scans" />
        </ListItemButton>
      </ListItem>

      <ListItem>
        <ListItemButton component="a" href="/scans/new">
          <ListItemIcon>
            <QrCodeScannerIcon />
          </ListItemIcon>
          <ListItemText primary="New Scan" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default MainListItems;
