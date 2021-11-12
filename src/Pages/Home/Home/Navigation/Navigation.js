import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const Navigation = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'
      }
    },
    navItemContainer:{
      [theme.breakpoints.down('sm')]: {
        display: 'none !important'
      }
    }
  })
  const {navIcon, navItemContainer} = useStyle()
  const [state, setState] = React.useState(false);
  const { user, logout } = useAuth();
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
          <ListItem button>
           
            <ListItemText>
            <Link style={{textDecoration: 'none', color: 'green'}} to="/morePlants"> <Button color="inherit">More Plants</Button></Link>
            </ListItemText>
          </ListItem>
         <Divider/>
         <Divider/>
          <ListItem button>
            <ListItemText>
          {
                        user?.email ?
                             <NavLink style={{ textDecoration: 'none', color: 'green' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button> <br /> <br /> <br />
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </NavLink>   
                            :      
                            <NavLink style={{ textDecoration: 'none', color: 'green' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                            
                    }
                   </ListItemText>
             </ListItem>
             
      </List>
    </Box>
  );
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={() => setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            PLANT STORE
          </Typography>
          <div className={navItemContainer}>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/morePlants"> <Button color="inherit">More Plants</Button></Link>
          {
                        user?.email ?

                        
                             <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </NavLink> 
                            
                
                            
                            :
                         
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                            
                    }
                    </div>
        </Toolbar>
      </AppBar>
    </Box>
    <div>
    
      <React.Fragment>
        <Drawer
          
          open={state}
          onClose={() => setState(false)}
        >
          {list}
        </Drawer>
      </React.Fragment>
  
  </div>
  </div>
    );
};

export default Navigation;