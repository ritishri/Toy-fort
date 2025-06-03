import { Routes, Route } from 'react-router-dom';
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
import HomePageManager from './pages/HomePageManager';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/admin' element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path='/admin/navigation' element={<ProtectedRoute><Navigation /></ProtectedRoute>} />
      <Route path='/admin/slider' element={<ProtectedRoute><Slider /></ProtectedRoute>} />
      <Route path='/admin/digital-sales' element={<ProtectedRoute><DigitalSales /></ProtectedRoute>} />
      <Route path='/admin/quote-requests' element={<ProtectedRoute><QuoteRequests /></ProtectedRoute>} />
      <Route path='/admin/custom-fields' element={<ProtectedRoute><CustomFields /></ProtectedRoute>} />
      <Route path='/admin/add-custom-field' element={<ProtectedRoute><AddCustomField /></ProtectedRoute>} />
      <Route path='/admin/abuse-reports' element={<ProtectedRoute><AbuseReports /></ProtectedRoute>} />
      <Route path='/admin/refund-requests' element={<ProtectedRoute><RefundRequests /></ProtectedRoute>} />
      <Route path='/admin/homepage-manager' element={<ProtectedRoute><HomePageManager /></ProtectedRoute>} />
    </Routes>
  );
};

export default App;
