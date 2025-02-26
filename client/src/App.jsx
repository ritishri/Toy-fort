import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";
import HelpCenter from "./pages/HelpCenter";
import TermsConditions from "./pages/TermsConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Books from "./pages/Books";
import Sidebar from "./components/Sidebar";
import WriteForUs from "./pages/WriteForUs";
import ColoringBooks from "./pages/ColoringBooks";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write-for-us" element={<WriteForUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route
          path="/dashboard"
          element={
            <div>
              <Sidebar />
              <Books />
            </div>
          }
        /> */}
        <Route
          path="/books"
          element={
            <div>
              {/* <Sidebar /> */}
              <Books />
            </div>
          }
        />





        <Route
          path="/books/colouring-books"
          element={
            <div>
              {/* <Sidebar /> */}
              <ColoringBooks />
            </div>
          }
        />



      </Routes>

      <Footer />
    </div>
  );
}

export default App;
