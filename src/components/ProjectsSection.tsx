import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Squash Hitting Machine",
    description: "Squash Hitting Machine (Group 1) offers versatile ball placement by employing a torsion spring and the ability to change the paddle's angle, allowing it to hit squash balls to a range of targets.",
    image: "/projects/SquashHitting.jpeg",
    tags: ["Electronics", "Physics", "Mechanics"],
    demoUrl: "https://drive.google.com/file/d/1T6EOdoRV4ShMcZfcBd-MGSON1C1SsRjh/view?usp=sharing",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "MacSimSquash",
    description:
      "MacSimSquash is a Unity-based physics simulation tool. It models and analyzes squash ball projectile motion from a robotic paddle, incorporating realistic parameters like gravity, mass, coefficient of restitution (COR), spring constants, and angular court zones.",
    image: "/projects/MacSimSquash.png",
    tags: ["Unity", "C#"],
    demoUrl: "#",
    githubUrl: "https://github.com/Thadzy/MacSimSquash",
  },
  {
    id: 3,
    title: "HardChess",
    description:
      "The console game that is written in C ++ has a turn -out playing system and the Ascii board display that is difficult to play.",
    image: "/projects/project2.png",
    tags: ["C++", "OOP"],
    demoUrl: "#",
    githubUrl: "https://github.com/Thadzy/HardChess",
  },
  {
    id: 4,
    title: "VisOil",
    description:
      "VisOil is a U-Net AI segmentation model that detects oil spills at night using infrared cameras.",
    image: "/projects/Visoil.png",
    tags: ["AI", "Design Thinking", "Computer Vision"],
    demoUrl: "#",
    githubUrl: "https://github.com/Thadzy/VisOil",
  },
  {
    id: 5,
    title: "I Can See Your Voice",
    description:
      "This project is designed to classify voices as either real or fake, using AI-based deep fake detection techniques.",
    image: "/projects/ICanSeeYourVoice.png",
    tags: ["AI", "Next.js", "Web Application"],
    demoUrl: "#",
    githubUrl: "https://github.com/Thadzy/I-can-see-your-voice",
  },
  {
    id: 6,
    title: "SmartEnergyPro",
    description:
      "This project aims to provide real-time monitoring of your electrical power consumption, helping you identify areas for energy conservation and potentially saving you money on your electricity bills.",
    image: "/projects/SmartEnergyPro.png",
    tags: ["AI", "IoT", "Arduino"],
    demoUrl: "#",
    githubUrl: "https://github.com/Thadzy/I-can-see-your-voice",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};