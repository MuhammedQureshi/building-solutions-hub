import bathroomImg from "@/assets/bathroom-project.jpg";
import newbuildImg from "@/assets/newbuild-project.jpg";
import kitchenImg from "@/assets/hero-kitchen.jpg";
import refurbImg from "@/assets/refurbishment-progress.jpg";
import AnimateOnScroll from "./AnimateOnScroll";
import { MapPin, Clock } from "lucide-react";

const projects = [
  { title: "Victorian Terrace Renovation", tags: ["Kitchen", "Bathroom", "Rewire"], location: "South London", duration: "14 weeks", image: kitchenImg, imageAlt: "Completed kitchen with exposed brick and copper fixtures" },
  { title: "Contemporary Bathroom", tags: ["Wet Room", "Underfloor Heating"], location: "Surrey", duration: "5 weeks", image: bathroomImg, imageAlt: "Modern bathroom with freestanding tub" },
  { title: "New Build — Timber Frame", tags: ["Foundations", "Structure"], location: "Kent", duration: "Ongoing", image: newbuildImg, imageAlt: "Timber frame house under construction" },
  { title: "Period Property Refurbishment", tags: ["Structural", "Damp Treatment"], location: "East London", duration: "Ongoing", image: refurbImg, imageAlt: "Room during renovation strip-out phase" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-5">
            Our work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Recent projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            A selection of completed and in-progress work across London and the South East.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} animation="animate-scale-in" delay={i * 100}>
              <div className="group rounded-3xl overflow-hidden bg-secondary hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-primary bg-primary/[0.07] px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin size={13} /> {project.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {project.duration}</span>
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
