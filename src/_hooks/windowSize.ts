"use client";
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);

    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
