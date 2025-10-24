import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // smooth
    });
  }, [pathname]);

  return null;
}
