import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Vip from './Pages/Vip';
import MyOrders from './Pages/MyOrders';
import DryCleaning from './Pages/DryCleaning';
import Tailoring from './Components/Tailoring';
import MenuBar from './Components/Navbar';
import Footer from './Components/Footer';
import Service from './Pages/Service'
import PriceList from './Pages/PriceList';
import SignIn from './Pages/SignIn';
import Logout from './Pages/Logout';
import { UserAuthContextProvider } from "./contexts/authContext";
import ProtectedRoute from './Utilities/protectedRoute';
import Ironing from './Pages/Ironing'
import About from './Pages/About Us';
import Message from './Components/Modal';

function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthContextProvider>
        <MenuBar/>
        <Message/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Vip" element={<Vip/>} />
          <Route path="/MyOrders" element={
            <ProtectedRoute>
              <MyOrders/>
            </ProtectedRoute>
          } />
          <Route path="/DryCleaning" element={
            <ProtectedRoute>
              <DryCleaning/>
          </ProtectedRoute>
          } />
          <Route path="/Tailoring" element={<Tailoring/>} />
          <Route path="/Ironing" element={
            <ProtectedRoute>
              <Ironing/>
            </ProtectedRoute>
          } />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Logout" element={<Logout />} />
          {/* <Route path="/Payment" element={<Payment/>} /> */}
          <Route path="/Service" element={<Service/>} />
          <Route path="/PriceList" element={<PriceList/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
        <Footer />
        </UserAuthContextProvider>
      </Router>  
    </div>
  );
}
export default App;
