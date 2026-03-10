import bathroomImg from "@/assets/bathroom-project.jpg";
import newbuildImg from "@/assets/newbuild-project.jpg";
import kitchenImg from "@/assets/hero-kitchen.jpg";
import refurbImg from "@/assets/refurbishment-progress.jpg";

const projects = [
  {
    title: "Victorian Terrace",
    subtitle: "Full Renovation",
    tags: ["Kitchen", "Bathroom", "Rewire", "Replumb"],
    location: "South London",
    duration: "14 weeks",
    image: kitchenImg,
    imageAlt: "Completed kitchen with exposed brick and copper fixtures",
    large: true,
  },
  {
    title: "Contemporary Suite",
    subtitle: "Bathroom",
    tags: ["Wet Room", "Underfloor Heating", "Concrete Finish"],
    location: "Surrey",
    duration: "5 weeks",
    image: bathroomImg,
    imageAlt: "Modern bathroom with freestanding tub and concrete walls",
    large: false,
  },
  {
    title: "Timber Frame",
    subtitle: "New Build",
    tags: ["Foundations", "Structure", "First Fix"],
    location: "Kent",
    duration: "Ongoing",
    image: newbuildImg,
    imageAlt: "Timber frame house under construction with scaffolding",
    large: false,
  },
  {
    title: "Period Property",
    subtitle: "Strip & Refurb",
    tags: ["Demolition", "Structural", "Damp Treatment"],
    location: "East London",
    duration: "Ongoing",
    image: refurbImg,
    imageAlt: "Room during strip-out phase showing exposed walls",
    large: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 lg:px-10 bg-card">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
          Selected work
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-16 md:mb-24">
          Recent <span className="italic text-gradient">projects.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden ${
                project.large ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                      {project.subtitle}
                    </p>
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider text-muted-foreground border border-foreground/10 px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:block text-right shrink-0">
                    <p className="text-xs text-muted-foreground">{project.location}</p>
                    <p className="text-xs text-muted-foreground">{project.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
