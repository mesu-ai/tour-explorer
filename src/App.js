import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/login/Login';
import Register from './components/authentication/register/Register';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Booking from './components/pages/booking/Booking';
import Home from './components/pages/home/Home';
import AddTourPackage from './components/pages/manageTour/add/AddTourPackage';
import DeleteUpdate from './components/pages/manageTour/deleteUpdate/DeleteUpdate';
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
        <PrivateRoute path='/booking'><Booking></Booking></PrivateRoute>

        <Route path='/tour/add'><AddTourPackage></AddTourPackage></Route>
        <Route path='/tour/managetour'><DeleteUpdate></DeleteUpdate></Route>
        
        <Route path='/tourdetails/:id'><TourDetails></TourDetails></Route>

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
