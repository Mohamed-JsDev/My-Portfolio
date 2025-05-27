"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { useTheme } from "../context/ThemeContext";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!vantaRef.current) return;

    const vantaOptions = {
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: theme === "dark" ? 0x0f172a : 0x3f51b5,
      backgroundColor: theme === "dark" ? 0x0f172a : 0xf5f5f5,
      points: theme === "dark" ? 12 : 8,
      maxDistance: theme === "dark" ? 20 : 15,
    };

    if (!vantaEffect.current) {
      vantaEffect.current = NET(vantaOptions);
    } else if (
      vantaEffect.current &&
      typeof vantaEffect.current.setOptions === "function"
    ) {
      try {
        vantaEffect.current.setOptions(vantaOptions);
      } catch (error) {
        console.error("Failed to update Vanta options:", error);

        vantaEffect.current.destroy();
        vantaEffect.current = NET(vantaOptions);
      }
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [theme]);

  return (
    <div
      ref={vantaRef}
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      {children}
    </div>
  );
};

export default VantaBackground;
