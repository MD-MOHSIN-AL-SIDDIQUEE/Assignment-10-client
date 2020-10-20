import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';

import Login from './Component/Login/Login';
import ResisterPage from './Component/ResisterPage/ResisterPage';
import Admin from './Component/Admin/Admin';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import OrderPage from './Component/OrderPage/OrderPage';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        <PrivateRoute path="/resister/:productKey">
           <ResisterPage></ResisterPage>
        </PrivateRoute>
        <Route path='/admin'>
          <Admin></Admin>
        </Route>
        <Route path='/orderPage/:name'>
          <OrderPage></OrderPage>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
