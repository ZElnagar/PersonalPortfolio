import { ExternalLink, Github, ArrowRight } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Western Formula Website",
        description: "A beautiful landing page using React and Tailwind for the western formula racing team.",
        image: "projects/Project1.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://westernformularacing.org/",
        githubUrl: "https://github.com/Western-Formula-Racing/wfrwebsite",
    },
    {
        id: 2,
        title: "Citadel Break",
        description: "A third person puzzle-solving game with an escape the room concept.",
        image: "projects/Project2.png",
        tags: ["Unity", "C#"],
        demoUrl: "https://alexandralheureuxece.github.io/final-project-citadelbreak/",
        githubUrl: "https://github.com/AlexandraLHeureuxECE/final-project-citadelbreak",
    },
    {
        id: 3,
        title: "Resumind",
        description: "An AI Resume Reviewer and Feedback Website.",
        image: "projects/Project3.png",
        tags: ["React", "TailWind CSS", "TypeScript", "Gemini API"],
        demoUrl: "https://puter.com/app/ai-resume-analyzer-104",
        githubUrl: "https://github.com/ZElnagar/ai-resume-analyzer",
    },
    {
        id: 4,
        title: "NutriScan",
        description: "A Hackathon-winning AI health analyzer that turns a facial scan into personalized nutrition guidance.",
        image: "projects/Project4.png",
        tags: ["React", "TailWind CSS", "TypeScript", "Gemini API"],
        demoUrl: "https://nutriscans.tech/",
        githubUrl: "https://github.com/ZElnagar/HackWestern12",
    },
];


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>


            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects, feel free to visit the demo github repos for each!
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {[...projects].reverse().map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL}${project.image}`}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-3">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
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
                    href="https://github.com/ZElnagar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}