import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // auto
    });
  }, [pathname]);

  return null;
}
