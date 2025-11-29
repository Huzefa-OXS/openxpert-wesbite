import { Headphones, Code, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: "AMC Services",
      subtitle: "Annual Maintenance Contracts",
      description: "Comprehensive IT maintenance and support ensuring your systems run smoothly 24/7. Our proactive approach prevents issues before they impact your business.",
      features: [
        "24/7 Technical Support",
        "Preventive Maintenance",
        "Hardware & Software Management",
        "Network Monitoring",
        "Priority Response Times",
        "Regular System Audits",
      ],
      benefits: [
        "Reduced Downtime",
        "Predictable IT Costs",
        "Extended Equipment Life",
        "Expert Technical Team",
      ],
      process: [
        { step: "Assessment", desc: "Evaluate your IT infrastructure" },
        { step: "Planning", desc: "Design customized maintenance plan" },
        { step: "Implementation", desc: "Deploy support systems" },
        { step: "Monitoring", desc: "Continuous system monitoring" },
      ],
    },
    {
      icon: Code,
      title: "Web & App Development",
      subtitle: "Custom Digital Solutions",
      description: "We create stunning, high-performance web and mobile applications that drive engagement and business growth. Built with modern technologies for scalability and security.",
      features: [
        "Responsive Web Design",
        "Progressive Web Apps (PWA)",
        "Native Mobile Apps (iOS/Android)",
        "E-commerce Solutions",
        "CMS Integration",
        "API Development",
      ],
      benefits: [
        "Modern Tech Stack",
        "Scalable Architecture",
        "User-Centric Design",
        "Fast Performance",
      ],
      process: [
        { step: "Discovery", desc: "Understand your requirements" },
        { step: "Design", desc: "Create wireframes and prototypes" },
        { step: "Development", desc: "Build with agile methodology" },
        { step: "Launch", desc: "Deploy and support" },
      ],
    },
    {
      icon: Shield,
      title: "IT Consultancy",
      subtitle: "Strategic Technology Guidance",
      description: "Expert consultation to optimize your IT infrastructure, reduce costs, and align technology with your business goals. We help you make informed decisions.",
      features: [
        "IT Strategy & Planning",
        "Digital Transformation",
        "Technology Roadmap",
        "System Integration",
        "Cloud Migration",
        "Security Assessment",
      ],
      benefits: [
        "Expert Guidance",
        "Cost Optimization",
        "Risk Mitigation",
        "Future-Ready Solutions",
      ],
      process: [
        { step: "Analysis", desc: "Current state assessment" },
        { step: "Strategy", desc: "Develop IT roadmap" },
        { step: "Execution", desc: "Implement recommendations" },
        { step: "Support", desc: "Ongoing advisory" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive IT solutions designed to empower your business with technology that drives growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-gradient-to-b from-muted to-background'}`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/2">
                  <div className="glass rounded-3xl p-10 hover-float">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-accent mb-2">{service.subtitle}</div>
                    <h2 className="text-4xl font-bold text-primary mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-primary mb-4">Key Benefits</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to="/quote">
                      <Button className="gradient-primary w-full group">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  {/* Features */}
                  <div className="glass rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-primary mb-6">Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="glass rounded-2xl p-8">
                    <h3 className="text-2xl font-semibold text-primary mb-6">Our Process</h3>
                    <div className="space-y-4">
                      {service.process.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-white font-bold">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{item.step}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-10">
              Let's discuss how our services can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
