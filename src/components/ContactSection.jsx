import { Mail, MapPin, Phone, Linkedin } from "lucide-react"

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out.
                    I'm always open to discuss new opportunities.
                </p>

                <div className="space-y-8">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <div className="flex items-center space-x-3">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a
                                    href="mailto:ziadelnagar11@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    ziadelnagar11@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a
                                    href="tel:+16478036810"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +1 (647)-803-6810
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <span
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Toronto, On, Canada
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Linkedin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> LinkedIn</h4>
                                <a
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    href="https://www.linkedin.com/in/elnagarziad/"
                                >
                                    Ziad Elnagar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}