import { Bot, Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Robotics & AI & Software Development
            </h3>

            <p className="text-muted-foreground">
            Robotics Engineer Student with over a year of academic study in physics, statics, kinematics, and electronics, coupled with programming skills in Arduino, C++, C#, and Python. Proven practical experience includes 8 months as a SuperAI Engineer and a valuable internship.
            </p>

            <p className="text-muted-foreground">
            I'm driven by a passion for creating sustainable hardware and software solutions that contribute to a better world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Development</h4>
                  <p className="text-muted-foreground">
                  I develop hardware-integrated software to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Robotics</h4>
                  <p className="text-muted-foreground">
                  I possess strong capabilities in both SolidWorks CAD design and comprehensive electronics work. My SolidWorks expertise includes detailed 3D modeling and technical drawing, while my electronics skills cover circuit design, prototyping, and testing.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                  I have extensive experience managing projects, identifying problems, and implementing solutions using frameworks like Design Thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};