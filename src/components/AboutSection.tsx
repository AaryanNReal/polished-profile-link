
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "JavaScript", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "HTML/CSS", level: "Expert" },
    { name: "Node.js", level: "Intermediate" },
    { name: "UI/UX Design", level: "Intermediate" }
  ];

  return (
    <section id="about" className="bg-secondary/50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="space-y-4 animate-slide-in">
            <p className="text-lg">
              Hello! I'm a passionate web developer with over 5 years of experience creating web applications.
              I enjoy turning complex problems into simple, beautiful and intuitive designs.
            </p>
            <p className="text-lg">
              My main areas of expertise are front-end development, responsive design, and creating intuitive, accessible user interfaces.
              I have worked on a wide range of projects, from simple landing pages to complex web applications.
            </p>
            <p className="text-lg">
              When I'm not coding, you'll find me hiking, reading, or experimenting with new technologies.
              I believe in continuous learning and constantly strive to improve my skills and stay up-to-date with the latest industry trends.
            </p>
          </div>
          
          <div className="animate-slide-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="card-hover">
                  <CardContent className="p-4">
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-sm text-muted-foreground">{skill.level}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
