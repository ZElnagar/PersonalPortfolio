import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                        <p className="text-muted-foreground">
                            With over 2 years of experience, I specialize in creating
                            responsive, accessible, and sleek web applications using modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate about finding creative solutions to complex problems, and I'm
                            constantly learning new technologies and languages to stay up-to-date with the
                            evolving web landscape.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Contact Me</a>
                            <a
                                href={`${import.meta.env.BASE_URL}Ziad_Elnagar_Resume.pdf`}
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web development</h4>
                                    <p className="text-muted-foreground">
                                        Developed responsive websites and web apps using modern frameworks to ensure performance across all devices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intiuitive user interfaces and seamless user experiences that enhance usability and engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Workshop Management</h4>
                                    <p className="text-muted-foreground">
                                        Designed and led hands-on Python workshops, teaching others how to apply AI concepts and build practical machine learning solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};