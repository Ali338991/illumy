"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Services from "./components/Services";

export default function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-[670px] mx-auto">
        <Navbar />
        <Hero />
        <Demo />
        <Services />
      </div>
    </div>
  );
}
