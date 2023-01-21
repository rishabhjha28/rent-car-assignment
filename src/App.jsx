import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './component/Booking/Booking';
import Home from './component/CarList/Home';
import CarDetail from './component/cars.js/CarDetail';
import Footer from './component/footer/Footer';
import Logo from './component/Logo';

function App() {
  return (
    <div className="app">
      <div className='logo'>
        <Logo/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='booking-form/:id' element={<Booking/>}/>
          <Route path='car/:id' element={<CarDetail/>}/>
        </Routes>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
