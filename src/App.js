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
import Programs from './pages/Programs';

import { AuthContextProvider } from "./context/Auth"
import { FoodContextProvider } from './context/Food';
import { RiderContextProvider } from './context/Rider';
import { ThemeContextProvider } from './context/Theme';
import { ProgramContextProvider } from './context/Program';
import { IngredientsContextProvider } from './context/Ingredients';
import Meals from './pages/Meals';
import { MealsContextProvider } from './context/Meals';
import ConfirmedOrders from './pages/ConfirmedOrders';
import CompleteOrders from './pages/CompleteOrders';
import CancelOrders from './pages/CancelOrders';

function App() {
  return (
    <>
      <Router>
        <ThemeContextProvider>
          <AuthContextProvider>
            <FoodContextProvider>
              <RiderContextProvider>
                <ProgramContextProvider>
                  <IngredientsContextProvider>
                    <MealsContextProvider>
                      <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<SignIn />} />
                        <Route path="/all-orders" element={<Orders />} />
                        <Route path="/confirmed-orders" element={<ConfirmedOrders />} />
                        <Route path="/complete-orders" element={<CompleteOrders />} />
                        <Route path="/cancel-orders" element={<CancelOrders />} />
                        <Route path="/order-details" element={<OrderDetails />} />
                        <Route path="/new-orders" element={<NewOrders />} />
                        <Route path="/list-foods" element={<ListFood />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/rider" element={<Rider />} />
                        <Route path="/reviews" element={<Review />} />
                        <Route path="/statement" element={<Statement />} />
                        <Route path="/withdrawals" element={<Withdrawal />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/meals" element={<Meals />} />
                      </Routes>
                    </MealsContextProvider>
                  </IngredientsContextProvider>
                </ProgramContextProvider>
              </RiderContextProvider>
            </FoodContextProvider>
          </AuthContextProvider>
        </ThemeContextProvider>
      </Router>
    </>
  );
}

export default App;
