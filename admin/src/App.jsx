import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
import Slider from './pages/Slider';
import DigitalSales from './pages/DigitalSales';
import QuoteRequests from './pages/QuoteRequests';
import CustomFields from './pages/CustomFields';
import AddCustomField from './pages/AddCustomField';
import AbuseReports from './pages/AbuseReports';
import RefundRequests from './pages/RefundRequests';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/admin' element={<Home />} />
        <Route path='/admin/navigation' element={<Navigation />} />
        <Route path='/admin/slider' element={<Slider />} />
        <Route path='/admin/digital-sales' element={<DigitalSales />} />
        <Route path='/admin/quote-requests' element={<QuoteRequests />} />
        <Route path='/admin/custom-fields' element={<CustomFields />} />
        <Route path='/admin/add-custom-field' element={<AddCustomField />} />
        <Route path='/admin/abuse-reports' element={<AbuseReports />} />
        <Route path='/admin/refund-requests' element={<RefundRequests />} />
      </Routes>
  );
}

export default App;
