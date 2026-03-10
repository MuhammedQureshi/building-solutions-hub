import bathroomImg from "@/assets/bathroom-project.jpg";
import newbuildImg from "@/assets/newbuild-project.jpg";
import kitchenImg from "@/assets/hero-kitchen.jpg";
import refurbImg from "@/assets/refurbishment-progress.jpg";

const projects = [
  {
    title: "Victorian Terrace — Full Renovation",
    scope: "Structural alterations, new kitchen, two bathrooms, rewire, replumb",
    location: "South London",
    duration: "14 weeks",
    image: kitchenImg,
    imageAlt: "Completed kitchen with exposed brick and copper fixtures",
    inProgress: false,
  },
  {
    title: "Period Property — Strip Out in Progress",
    scope: "Demolition, structural survey, damp treatment",
    location: "East London",
    duration: "Ongoing",
    image: refurbImg,
    imageAlt: "Room during strip-out phase showing exposed walls",
    inProgress: true,
  },
  {
    title: "Contemporary Bathroom Suite",
    scope: "Wet room, underfloor heating, bespoke vanity, concrete finish walls",
    location: "Surrey",
    duration: "5 weeks",
    image: bathroomImg,
    imageAlt: "Modern bathroom with freestanding tub and concrete walls",
    inProgress: false,
  },
  {
    title: "New Build — Timber Frame",
    scope: "Foundations, timber frame erection, first fix plumbing and electrical",
    location: "Kent",
    duration: "Ongoing",
    image: newbuildImg,
    imageAlt: "Timber frame house under construction with scaffolding",
    inProgress: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Projects
        </h2>
        <p className="font-mono text-sm text-muted-foreground mb-16">
          // Process and result.
        </p>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className={project.inProgress ? "max-w-sm" : "w-full"}>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  {project.inProgress && (
                    <p className="font-mono text-xs text-muted-foreground mt-2 italic">
                      Work in progress
                    </p>
                  )}
                </div>
              </div>

              <div className={`${i % 2 === 1 ? "md:order-1" : ""} flex flex-col justify-center`}>
                <h3 className="font-heading text-xl font-semibold mb-4">
                  {project.title}
                </h3>
                <dl className="font-mono text-sm text-muted-foreground space-y-2">
                  <div className="flex gap-4">
                    <dt className="text-foreground min-w-[80px]">Scope</dt>
                    <dd>{project.scope}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="text-foreground min-w-[80px]">Location</dt>
                    <dd>{project.location}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="text-foreground min-w-[80px]">Duration</dt>
                    <dd>{project.duration}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
