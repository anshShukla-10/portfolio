const TechStack = () => {
  // Matches the 3-column layout in the image
  const stack = [
    { items: ["React", "TypeScript", "Motion Design"] },
    { items: ["Next.js", "Tailwind CSS", "Figma"] },
    { items: ["React Native", "UI/UX Design", "System Architecture"] }
  ];

  return (
    <section>
      <h2 className="text-white font-medium mb-1">Skills</h2>
      <p className="text-neutral-500 text-sm mb-8">Technologies and tools I work with</p>

      <div className="grid grid-cols-3 gap-4">
        {stack.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col space-y-3">
            {column.items.map((item) => (
              <span key={item} className="text-neutral-400 text-sm hover:text-white transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;