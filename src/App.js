import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LogIn/LogIn/LogIn';
import Register from './Pages/LogIn/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import AllPlantServices from './Pages/AllPlants/AllPlantServices/AllPlantServices';
import OrderDetails from './Pages/OrderDetails/OrderDetails';


function App() {
  return (
    <div className="App">
    <AuthProvider>
     <BrowserRouter>
     <Switch>
       <Route path="/home">
        <Home></Home>
       </Route>
       <Route path="/morePlants">
        <AllPlantServices></AllPlantServices>
       </Route>
       <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
        <Register></Register>
       </Route>
       <PrivateRoute path="/orderDetails/:serviceId">
        <OrderDetails></OrderDetails>
       </PrivateRoute>
       <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
       </PrivateRoute>
       <Route exact path="/">
       <Home></Home>
       </Route>
     </Switch>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
