import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react"
import { cn } from "../lib/utils"



export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            alert("Message sent successfully!");
        }, 1500);
        console.log("Form submitted");
    }

    return <section
        id="contact"
        className="py-24 px-4 realtive bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Bra bra bra bra bra bra
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail />
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto:Thadzy025@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                > Thadzy025@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone />
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone </h4>
                                <a href="tel:+66844524645"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                > +66 844524645
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin />
                            </div>
                            <div>
                                <h4 className="font-medium"> Location </h4>
                                <a
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                > Bangkok, Thrung kru, Thailand
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="#" target="_blank">
                                <Facebook />
                            </a>
                            <a href="#" target="_blank">
                                <Instagram />
                            </a>
                            <a href="#" target="_blank">
                                <Youtube />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                            <input type="text" id="name" name="name" required
                                className="w-full px-4 py-3 rounded-md border border-input bg-backgound focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Thadchai Suksaran"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                            <input type="text" id="email" name="email" required
                                className="w-full px-4 py-3 rounded-md border border-input bg-backgound focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Thadzy025@gmail.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea id="message" required
                                className="w-full px-4 py-3 rounded-md border border-input bg-backgound focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Hello I'd like to know more about you."
                            />
                        </div>

                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                        )}
                        >
                            Send Message
                            <Send size={16} />
                        </button>

                    </form>
                </div>

            </div>
        </div>
    </section>
}