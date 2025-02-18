import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import BookingPage from './components/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking'


function App() {
  return (
  <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/confirmation" element={<ConfirmedBooking/>}></Route>
            </Route>
        </Routes>
  </BrowserRouter>

  );
}

export default App;
