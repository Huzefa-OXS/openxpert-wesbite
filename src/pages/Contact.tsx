import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Ajman Free Zone – Neuventures", "Ajman, United Arab Emirates"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 XXX XXXX", "+971 YYY YYYY"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@openxpert.com", "support@openxpert.com"],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a question or ready to start your project? We're here to help. Reach out to us and let's discuss how we can transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass rounded-3xl p-10">
                <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 XXX XXXX"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-primary group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="glass rounded-2xl p-8 hover-float hover:shadow-elevated transition-all duration-500"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* WhatsApp */}
                <div className="glass rounded-2xl p-8 bg-gradient-to-br from-green-500/10 to-green-600/10 hover-float">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-3">WhatsApp Support</h3>
                      <p className="text-muted-foreground mb-4">Get instant replies on WhatsApp</p>
                      <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="glass rounded-2xl overflow-hidden h-64">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Office Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Monday - Friday</h3>
                <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Saturday - Sunday</h3>
                <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              * Response time: Within 24 hours on business days
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
