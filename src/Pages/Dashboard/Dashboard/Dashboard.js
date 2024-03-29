import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import {
  
  Switch,
  Route,
  Link,

  useRouteMatch,
  NavLink
} from "react-router-dom";
import Pay from '../UserPanel/Pay/Pay';
import MyOrder from '../UserPanel/MyOrder/MyOrder';
import AddReview from '../UserPanel/AddReview/AddReview';
import AddPlant from '../AdminPanel/AddPlant/AddPlant';
import ManageOrders from '../AdminPanel/ManageOrders/ManageOrders';
import MakeAdmin from '../AdminPanel/MakeAdmin/MakeAdmin';
import ManageProduct from '../AdminPanel/ManageProduct/ManageProduct'
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../hooks/useAuth';


const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {user, logout, admin} = useAuth();
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link style={{textDecoration: 'none', color: 'rgb(15, 97, 43)',fontSize:'50px', fontWeight: 'bolder'}} to="/"> <Button color="inherit">PLANT STORE</Button></Link> <br/> 
      <Link style={{textDecoration: 'none', color: 'rgb(15, 97, 43)', fontWeight: 900}} to={`${url}`}> <Button color="inherit">Dashboard</Button></Link> <br/> <br/> <br/>
      {
          !admin &&
          <Box>
      <Link style={{textDecoration: 'none', color: 'rgb(15, 97, 43)', fontWeight: 900}} to={`${url}/pay`}> <Button color="inherit">Pay</Button></Link> <br/> <br/>
      <Link style={{textDecoration: 'none', color: 'rgb(15, 97, 43)', fontWeight: 900}} to={`${url}/myOrder`}> <Button color="inherit">My Orders</Button></Link> <br/> <br/>
      <Link style={{textDecoration: 'none', color: 'rgb(15, 97, 43)', fontWeight: 900}} to={`${url}/addReview`}> <Button color="inherit">Add Review</Button></Link>
      </Box>
}
      {
          admin &&
      <Box>
          <Link style={{textDecoration: 'none', color: 'rgb(15, 97, 43)', fontWeight: 900}} to={`${url}/manageOrder`}> <Button color="inherit">Manage Orders</Button></Link> <br/> <br/>
      <Link style={{textDecoration: 'none', color: 'rgb(15, 97, 43)', fontWeight: 900}} to={`${url}/addPlants`}> <Button color="inherit">Add Plants</Button></Link> <br/> <br/>
      <Link style={{textDecoration: 'none', color: 'rgb(15, 97, 43)', fontWeight: 900}} to={`${url}/manageProducts`}> <Button color="inherit">Manage Products</Button></Link> <br/> <br/>
      <Link style={{textDecoration: 'none', color: 'rgb(15, 97, 43)', fontWeight: 900}} to={`${url}/makeAdmin`}> <Button color="inherit">Make Admin</Button></Link>
       </Box>
     }

{
                        user?.email ?
                                <Button onClick={logout} color="inherit">Logout</Button> 
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                                </NavLink>
                            
                    }
     
      <List>
        {[].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
         <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/myOrder`}>
          <MyOrder></MyOrder>
        </Route>
        <Route path={`${path}/addReview`}>
          <AddReview></AddReview>
        </Route>
        <Route path={`${path}/manageOrder`}>
         <ManageOrders></ManageOrders>
        </Route>
        <Route path={`${path}/manageProducts`}>
          <ManageProduct></ManageProduct>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/addPlants`}>
          <AddPlant></AddPlant>
        </Route>
      </Switch>
        <Typography paragraph>
        
        </Typography>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;


