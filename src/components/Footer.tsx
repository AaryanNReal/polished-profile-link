
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <p className="text-sm opacity-80">
              A showcase of my work and skills as a web developer.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</a>
              </li>
              <li>
                <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About</a>
              </li>
              <li>
                <a href="#projects" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-sm opacity-80 mb-2">
              Feel free to reach out if you have any questions or want to work together.
            </p>
            <a href="mailto:johndoe@example.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              johndoe@example.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
