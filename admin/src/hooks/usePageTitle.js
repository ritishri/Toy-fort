import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTitle(title) {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home | ToyFort";
        break;
      case "/admin":
        document.title = "Admin Panel - Toyfort";
        break;
      case "/admin/navigation":
        document.title = "Navigation - Toyfort";
        break;
      case "/admin/slider":
        document.title = "Slider Items - Toyfort";
        break;
      case "/admin/digital-sales":
        document.title = "Digital Sales - Toyfort";
        break;
      case "/admin/quote-requests":
        document.title = "Quote Requests - Toyfort";
        break;
      case "/admin/custom-fields":
        document.title = "Custom Fields - Toyfort";
        break;  
      case "/admin/abuse-reports":
        document.title = "Abuse Reports - Toyfort";
        break;
      case "/admin/refund-requests":
        document.title = "Refund Requests - Toyfort";
        break;         
      default:
        document.title = "ToyFort";
    }
  }, [location.pathname]);
}

