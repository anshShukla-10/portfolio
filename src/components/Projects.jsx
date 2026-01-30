import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Smart Link Hub",
    desc: "A full-stack linktree clone with QR code generation, authentication and theme customization.",
    link: "#"
  },
  {
    title: "Portfolio v1",
    desc: "My personal digital garden. Minimalist design built with React and Tailwind.",
    link: "#"
  },
  {
    title: "Music Production",
    desc: "A collection of beats and ambient tracks I've produced.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section>
      <h2 className="text-white font-medium mb-1">Projects I Built</h2>
      <p className="text-neutral-500 text-sm mb-8">Selected work and experiments</p>
      
      <div className="flex flex-col space-y-8">
        {projects.map((item, i) => (
          <a key={i} href={item.link} className="group block">
            <div className="flex items-center gap-1 mb-2">
              <h3 className="text-white font-medium group-hover:underline decoration-neutral-600 underline-offset-4">
                {item.title}
              </h3>
              <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;