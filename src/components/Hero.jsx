const Hero = () => {
  return (
    <section className="flex flex-col justify-start">
      {/* Name & Role */}
      <h1 className="text-white text-lg font-medium tracking-tight mb-1">
        Ansh
      </h1>
      <p className="text-neutral-500 text-base mb-8">
        19, full stack developer.
      </p>

      {/* Bio Paragraphs */}
      <div className="space-y-6 text-neutral-400 text-[15px] leading-relaxed">
        <p>
          I like being the person who turns ideas into logic.
        </p>
        <p>
          Started as a curious student exploring React, now I build complete web applications 
          from scratch. I was always fascinated by how data moves through a system, 
          from the database to the pixel on the screen.
        </p>
        <p>
          Currently, I do a mix of everything—from building <span className="text-white">Next.js</span> apps 
          to exploring <span className="text-white">System Design</span>.
        </p>
        
        {/* Blue Squiggly Links Section */}
        <p>
          You'll find me writing code on{' '}
          <a 
            href="#" 
            className="text-white underline decoration-blue-500 decoration-wavy underline-offset-4 decoration-1 hover:decoration-2 transition-all"
          >
            GitHub
          </a>, listening to{' '}
          <a 
            href="#" 
            className="text-white underline decoration-blue-500 decoration-wavy underline-offset-4 decoration-1 hover:decoration-2 transition-all"
          >
            Music
          </a>, or you can always reach me at{' '}
          <a 
            href="mailto:email@example.com" 
            className="text-white underline decoration-blue-500 decoration-wavy underline-offset-4 decoration-1 hover:decoration-2 transition-all"
          >
            email@example.com
          </a>.
        </p>
      </div>
    </section>
  );
};

export default Hero;