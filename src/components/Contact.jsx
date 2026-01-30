// src/components/Contact.jsx
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const socials = [
    { name: "Email", link: "mailto:thisisanshshukla@gmail.com" },
    { name: "Twitter / X", link: "#" },
    { name: "LinkedIn", link: "#" },
    { name: "Instagram", link: "#" },
  ];

  return (
    <section>
      <h2 className="text-white font-medium mb-4">Connect</h2>
      <p className="text-neutral-500 text-sm mb-8 max-w-sm leading-relaxed">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      <div className="flex flex-col items-start space-y-4">
        {socials.map((item) => (
          <a 
            key={item.name}
            href={item.link}
            className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <span className="underline decoration-blue-500 decoration-wavy underline-offset-4 decoration-1 group-hover:decoration-2">
              {item.name}
            </span>
            <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;