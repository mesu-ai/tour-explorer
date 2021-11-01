import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Login from './components/authentication/login/Login';
import Register from './components/authentication/register/Register';
import Contract from './components/contract/Contract';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Booking from './components/pages/booking/Booking';
import ManageBooking from './components/pages/booking/ManageBooking';
import MyBooking from './components/pages/booking/MyBooking';
import UpdateBooking from './components/pages/booking/UpdateBooking';
import Home from './components/pages/home/Home';
import AddTourPackage from './components/pages/manageTour/add/AddTourPackage';
import DeleteUpdate from './components/pages/manageTour/deleteUpdate/DeleteUpdate';
import UpdatePackage from './components/pages/manageTour/update/UpdatePackage';
import Notfind from './components/pages/notfind/Notfind';
import Services from './components/pages/services/Services';
import Tourguide from './components/pages/tourguide/Tourguide';
import TourDetails from './components/pages/tourPackage/TourDetails';
import PrivateRoute from './components/privateroute/PrivateRoute';
import AuthProvider from './contex/AuthProvider';

function App() {
  return (
    <div className="App">

      <AuthProvider>

      <BrowserRouter>
      <Header></Header>
      <Switch>

        <Route exact path='/'><Home></Home></Route>
        <Route exact path='/home'><Home></Home></Route>
        <Route path='/services'><Services></Services></Route>
        <Route path='/tourguide'><Tourguide></Tourguide></Route>
        

        <PrivateRoute path='/tour/add'><AddTourPackage></AddTourPackage></PrivateRoute>
        <PrivateRoute path='/tour/managetour'><DeleteUpdate></DeleteUpdate></PrivateRoute>
        <PrivateRoute path='/tour/updatetour/:id'><UpdatePackage></UpdatePackage></PrivateRoute>

        <PrivateRoute path='/booking/:id'><Booking></Booking></PrivateRoute>

        <PrivateRoute path='/bookingmanage'><ManageBooking></ManageBooking></PrivateRoute>

        <PrivateRoute path='/bookingupdate/:id'><UpdateBooking></UpdateBooking></PrivateRoute>
        <PrivateRoute path="/mybooking"> <MyBooking></MyBooking>  </PrivateRoute>
        

        <PrivateRoute path='/tourdetails/:id'><TourDetails></TourDetails></PrivateRoute>

        <Route path='/about'><About></About></Route>
        <Route path='/contractus'><Contract></Contract></Route>

        <Route path='/login'><Login></Login></Route>
        <Route path='/register'><Register></Register></Route>

        <Route path='*'><Notfind></Notfind></Route>
    

      </Switch>
      
      <Footer></Footer>
      </BrowserRouter>


      </AuthProvider>

      
      

    </div>
  );
}

export default App;
