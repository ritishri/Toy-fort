import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Blog from './pages/Blog'
import Contact from './pages/contact'
import HelpCenter from "./pages/HelpCenter"
import TermsConditions from "./pages/TermsConditions"
import ShippingPolicy from "./pages/ShippingPolicy"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Infants from "./pages/Infants"
import Toys from "./pages/Toys"
import Sports from "./pages/Sports"
import SchoolItems from "./pages/SchoolItems"
import Electronics from "./pages/Electronics"




function App() {

  return(
    <div>
     <Navbar/>

     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/infants" element={<Infants/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/toys" element={<Toys/>}/>
      <Route path="/school-items" element={<SchoolItems/>}/>
      <Route path="/electronics" element={<Electronics/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     

     <Footer/>
    </div>
  )
}

export default App
