import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTitle(title) {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home | ToyFort";
        break;
      case "/about":
        document.title = "About Us | ToyFort";
        break;
      case "/products":
        document.title = "Products | ToyFort";
        break;
      case "/admin/abuse-reports":
        document.title = "Abuse Reports - Toyfort";
        break;
      default:
        document.title = "ToyFort";
    }
  }, [location.pathname]);
}
