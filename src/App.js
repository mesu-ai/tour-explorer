import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Booking from './components/pages/booking/Booking';
import Home from './components/pages/home/Home';
import Notfind from './components/pages/notfind/Notfind';
import Services from './components/pages/services/Services';
import Tourguide from './components/pages/tourguide/Tourguide';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
      <Switch>

        <Route exact path='/'><Home></Home></Route>
        <Route exact path='/home'><Home></Home></Route>
        <Route path='/services'><Services></Services></Route>
        <Route path='/tourguide'><Tourguide></Tourguide></Route>
        <Route path='/booking'><Booking></Booking></Route>

        <Route path='*'><Notfind></Notfind></Route>
    

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
