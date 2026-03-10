import bathroomImg from "@/assets/bathroom-project.jpg";
import newbuildImg from "@/assets/newbuild-project.jpg";
import kitchenImg from "@/assets/hero-kitchen.jpg";
import refurbImg from "@/assets/refurbishment-progress.jpg";
import AnimateOnScroll from "./AnimateOnScroll";
import { MapPin, Clock } from "lucide-react";

const projects = [
  {
    title: "Victorian Terrace Renovation",
    tags: ["Kitchen", "Bathroom", "Rewire"],
    location: "South London",
    duration: "14 weeks",
    image: kitchenImg,
    imageAlt: "Completed kitchen with exposed brick and copper fixtures",
  },
  {
    title: "Contemporary Bathroom",
    tags: ["Wet Room", "Underfloor Heating"],
    location: "Surrey",
    duration: "5 weeks",
    image: bathroomImg,
    imageAlt: "Modern bathroom with freestanding tub",
  },
  {
    title: "New Build — Timber Frame",
    tags: ["Foundations", "Structure"],
    location: "Kent",
    duration: "Ongoing",
    image: newbuildImg,
    imageAlt: "Timber frame house under construction",
  },
  {
    title: "Period Property Refurbishment",
    tags: ["Structural", "Damp Treatment"],
    location: "East London",
    duration: "Ongoing",
    image: refurbImg,
    imageAlt: "Room during renovation strip-out phase",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-4">
            Our work
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">
            Recent projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A selection of completed and in-progress work across London and the South East.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll
              key={project.title}
              animation="animate-scale-in"
              delay={i * 100}
            >
              <div className="group bg-secondary rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-primary bg-primary/8 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {project.duration}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
