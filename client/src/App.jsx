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
import Infants from "./pages/Infants";
import Toys from "./pages/Toys";
import Sports from "./pages/Sports";
import SchoolItems from "./pages/SchoolItems";
import Electronics from "./pages/Electronics";
import BlogContent from "./pages/BlogContent";
import BrandProducts from "./pages/BrandProducts";
import ProductDetails from "./pages/ProductDetails";
import UpdateProfile from './pages/UpdateSideBar'
import ShippingAddress from "./pages/ShippingAddress";
import ChangePassword from "./pages/ChangePassword";
import Orders from "./pages/Orders";
import Refund from "./pages/Refund";


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
        <Route path="/infants" element={<Infants />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/school-items" element={<SchoolItems />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/blog/:category_slug/:id" element={<BlogContent />} />
        <Route path="/products" element={<BrandProducts />} />
        <Route path="/:slug" element={<ProductDetails/>}/>
        <Route path="/settings/edit-profile" element={<UpdateProfile/>}/>
        <Route path="/settings/shipping-address" element={<ShippingAddress/>}/>
        <Route path="/settings/change-password" element={<ChangePassword/>}/>
        <Route path="/order" element={<Orders/>}/>
        <Route path="/refund-requests" element={<Refund/>}/>
        


        <Route
          path="/books"
          element={
            <div>
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
