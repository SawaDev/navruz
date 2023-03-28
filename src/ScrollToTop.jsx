import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [navigate]);

  return null;
};

export default ScrollToTop;
