import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      const errorObj = error as { text?: string; message?: string };
      const errorMessage = errorObj?.text || errorObj?.message || "Unknown error occurred";
      console.error("Failed to send email:", errorMessage);

      // Provide more user-friendly error messages
      let userMessage = "Failed to send message. Please try again later.";

      if (errorMessage.includes("insufficient authentication scopes")) {
        userMessage = "Email service configuration issue. Please contact the site administrator.";
      } else if (errorMessage.includes("Invalid")) {
        userMessage = "Invalid email configuration. Please check your EmailJS setup.";
      }

      alert(userMessage);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Connect With Me
            </h3>

            <a
              href="mailto:vidhi@example.com"
              className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground text-sm">
                  vdmaharwade@gmail.com 
                </p>
              </div>
            </a>

            <a
              href="https://github.com/vidhi3000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Github size={20} />
              </div>
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <p className="text-muted-foreground text-sm">github.com/vidhi3000</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/vidhi-maharwade-07979738b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="font-medium text-foreground">LinkedIn</p>
                <p className="text-muted-foreground text-sm">
                  linkedin.com/in/vidhi-maharwade-07979738b
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
