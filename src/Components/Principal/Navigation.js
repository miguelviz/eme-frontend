import React from "react";
import {Switch,Route} from "react-router-dom";
import Home from "../Pages/Home";
import UsersAdmin from "../Pages/UsersAdmin";
import Branches from "../Pages/Branches";
import ProductsAdmin from "../Pages/ProductsAdmin";
import Jobs from "../Pages/Jobs";
import ListRooms from "../Pages/ListRooms"
import Companies from "../Pages/Companies";
import Clients from "../Pages/Clients";
import Reservations from "../Pages/Reservations";
import ApartmentReports from "../Pages/ApartmentReports";

import Error from "../Pages/Error";

const Navigation = (props) => {
  return(
    <Switch>
      <Route exact path="/" component={()=><Home />} />
      <Route exact path="/users-admin" component={()=><UsersAdmin />} />
      <Route exact path="/branches" component={()=><Branches />} />
      <Route exact path="/products-admin" component={()=><ProductsAdmin />} />
      <Route exact path="/jobs" component={()=><Jobs />} />
      <Route exact path="/list-rooms" component={()=><ListRooms />} />
      <Route exact path="/companies" component={()=><Companies />} />
      <Route exact path="/reservations" component={()=><Reservations />} />
      <Route exact path="/clients" component={()=><Clients />} />
      <Route exact path="/apartment-reports" component={()=><ApartmentReports />} />
      <Route component={()=><Error />}/>
    </Switch>
  )
};
export default (Navigation);
