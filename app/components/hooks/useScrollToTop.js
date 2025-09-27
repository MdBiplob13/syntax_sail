"use client";
// hooks/useScrollToTop.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const useScrollToTop = () => {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);

    // Scroll to top on route change
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
  }, []);
};

export default useScrollToTop;
