import tailwindLogo from "@/assets/tailwindcss-logo.svg";

const skillLogos = [
    { name: "HTML5", type: "Markup & Styling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", type: "Markup & Styling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", type: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", type: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", type: "Frontend Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", type: "Frontend Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", type: "Styling", logo: tailwindLogo },
    { name: "Node.js", type: "Backend Runtime", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", type: "Backend Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", type: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Python", type: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", type: "Backend Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "C#", type: "Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: ".NET", type: "Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "Unity", type: "Engine", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
];

const marqueeSkills = [...skillLogos, ...skillLogos]; // Keep duplication for seamless scrolling

const SkillBadge = ({ name, type, logo }) => (
    <div className="flex min-w-[200px] items-center gap-4 rounded-xl border border-border/50 bg-card/80 px-6 py-4 shadow-sm backdrop-blur-sm card-hover">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/60 p-2">
            <img
                src={logo}
                alt={`${name} logo`}
                className="h-8 w-8 object-contain"
                loading="lazy"
                draggable="false"
            />
        </div>
        <div className="text-left">
            <p className="text-base font-semibold tracking-tight">{name}</p>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{type}</p>
        </div>
    </div>
);

export const SkillsSection = () => {
    return (
        <section
            id="skills"
            className="relative bg-secondary/30 px-4 py-24 overflow-hidden"
        >
            <div className="container mx-auto max-w-5xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-primary">
                    Skills
                </p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    Languages & <span className="text-primary">Frameworks</span>
                </h2>
                <p className="mx-auto mb-12 max-w-3xl text-base text-muted-foreground md:text-lg">
                    A snapshot of the technologies I rely on every day—from the languages
                    I write in to the frameworks and tools that bring each build to life.
                </p>
            </div>

            <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

                <div className="flex flex-col gap-8 py-8">
                    {/* First Row - Left to Right */}
                    <div className="flex overflow-hidden">
                        <div className="skills-marquee flex items-center gap-6">
                            {marqueeSkills.map((skill, index) => (
                                <SkillBadge key={`row1-${index}-${skill.name}`} {...skill} />
                            ))}
                        </div>
                    </div>

                    {/* Second Row - Right to Left */}
                    <div className="flex overflow-hidden">
                        <div className="skills-marquee skills-marquee-reverse flex items-center gap-6">
                            {marqueeSkills.map((skill, index) => (
                                <SkillBadge key={`row2-${index}-${skill.name}`} {...skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};