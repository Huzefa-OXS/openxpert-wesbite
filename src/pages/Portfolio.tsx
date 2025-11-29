import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform Transformation",
      client: "Retail Giant UAE",
      category: "Odoo ERP",
      description: "Complete digital transformation with Odoo ERP integration, resulting in 40% increase in operational efficiency.",
      challenge: "Manual processes causing delays and inventory mismanagement",
      solution: "Implemented Odoo ERP with custom modules for inventory, sales, and accounting",
      outcome: "Reduced processing time by 60%, improved inventory accuracy to 99.5%",
      tags: ["ERP", "E-commerce", "Integration"],
    },
    {
      title: "Healthcare Security Infrastructure",
      client: "Major Hospital Network",
      category: "Xcitium Cybersecurity",
      description: "Deployed enterprise cybersecurity solution protecting patient data and meeting HIPAA compliance.",
      challenge: "Vulnerable endpoints and compliance requirements",
      solution: "Xcitium endpoint protection with MDR and comprehensive monitoring",
      outcome: "Zero breaches, 100% compliance, 24/7 threat monitoring",
      tags: ["Cybersecurity", "Healthcare", "Compliance"],
    },
    {
      title: "Real Estate Management Portal",
      client: "Property Management Co.",
      category: "Web Development",
      description: "Custom web portal for property listings, tenant management, and payment processing.",
      challenge: "Disconnected systems and poor user experience",
      solution: "Modern web application with integrated payment gateway and CRM",
      outcome: "50% reduction in administrative work, 3x increase in online inquiries",
      tags: ["Web Dev", "CRM", "Portal"],
    },
    {
      title: "Manufacturing ERP Implementation",
      client: "Industrial Equipment Manufacturer",
      category: "Odoo ERP",
      description: "Full-scale Odoo ERP deployment covering manufacturing, inventory, and supply chain.",
      challenge: "Complex manufacturing processes with poor visibility",
      solution: "Customized Odoo manufacturing module with real-time tracking",
      outcome: "35% improvement in production efficiency, better resource utilization",
      tags: ["ERP", "Manufacturing", "Supply Chain"],
    },
    {
      title: "Financial Services Mobile App",
      client: "FinTech Startup",
      category: "App Development",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      challenge: "Need for secure, user-friendly mobile banking solution",
      solution: "Native iOS/Android apps with advanced security features",
      outcome: "100K+ downloads in first quarter, 4.8 star rating",
      tags: ["Mobile App", "FinTech", "Security"],
    },
    {
      title: "Corporate IT Infrastructure Overhaul",
      client: "Multinational Corporation",
      category: "IT Consultancy",
      description: "Complete IT infrastructure assessment and modernization with cloud migration strategy.",
      challenge: "Legacy systems hampering growth and innovation",
      solution: "Phased cloud migration with modern DevOps practices",
      outcome: "40% cost reduction, improved scalability and performance",
      tags: ["Consultancy", "Cloud", "DevOps"],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Showcasing successful projects and client transformations across industries. Real problems solved with innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "15+", label: "Industries Served" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 hover-float hover:shadow-elevated transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-sm font-semibold text-accent">{project.category}</div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{project.client}</div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-4 border-destructive/30 pl-4">
                      <div className="text-xs font-semibold text-muted-foreground mb-1">CHALLENGE</div>
                      <p className="text-sm text-foreground">{project.challenge}</p>
                    </div>

                    <div className="border-l-4 border-accent pl-4">
                      <div className="text-xs font-semibold text-muted-foreground mb-1">SOLUTION</div>
                      <p className="text-sm text-foreground">{project.solution}</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <div className="text-xs font-semibold text-muted-foreground mb-1">OUTCOME</div>
                      <p className="text-sm text-foreground font-medium">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-6">
          <div className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" className="gradient-primary text-lg px-8 group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
