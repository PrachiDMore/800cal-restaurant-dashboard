import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Orders from './pages/Orders';
import ListFood from './pages/ListFood';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import NewOrders from './pages/NewOrders';
import OrderDetails from './pages/OrderDetails';
import Settings from './pages/Settings';
import Rider from './pages/Rider';
import Statement from './pages/Statement';
import Withdrawal from './pages/Withdrawal';
import Review from './pages/Review';

import { AuthContextProvider } from "./context/Auth"
import { FoodContextProvider } from './context/Food';
import { RiderContextProvider } from './context/Rider';

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <FoodContextProvider>
            <RiderContextProvider>
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/all-orders" element={<Orders />} />
                <Route path="/order-details" element={<OrderDetails />} />
                <Route path="/new-orders" element={<NewOrders />} />
                <Route path="/list-foods" element={<ListFood />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/rider" element={<Rider />} />
                <Route path="/reviews" element={<Review />} />
                <Route path="/statement" element={<Statement />} />
                <Route path="/withdrawals" element={<Withdrawal />} />
              </Routes>
            </RiderContextProvider>
          </FoodContextProvider>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
