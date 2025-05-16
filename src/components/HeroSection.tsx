
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-background">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="text-lg md:text-xl font-medium text-primary animate-fade-in">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="block">John Doe</span>
            <span className="text-muted-foreground">Web Developer</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I design and build exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View My Work
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
