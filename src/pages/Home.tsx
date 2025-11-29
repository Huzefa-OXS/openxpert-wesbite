import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Code, Headphones, Database, Lock, Cloud } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Headphones,
      title: "AMC Services",
      description: "Comprehensive annual maintenance contracts ensuring your IT infrastructure runs smoothly 24/7.",
    },
    {
      icon: Code,
      title: "Web & App Development",
      description: "Custom web and mobile applications built with cutting-edge technologies for modern businesses.",
    },
    {
      icon: Shield,
      title: "IT Consultancy",
      description: "Expert guidance to optimize your technology stack and digital transformation journey.",
    },
  ];

  const products = [
    {
      icon: Database,
      title: "Odoo ERP",
      description: "Complete business management solution with customization and implementation support.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Lock,
      title: "Xcitium Cybersecurity",
      description: "Advanced endpoint protection with MDR, EDR, and SIEM capabilities.",
      color: "from-primary to-accent",
    },
  ];

  const whyChooseUs = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="glass max-w-6xl mx-auto rounded-3xl p-12 animate-fade-in-up">
            ⁠ <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-blue-200 mb-8 tracking-tight leading-none">
              Precision. Innovation.
              <span className="block mt-3 bg-gradient-to-r from-blue-200 via-blue-100/80 to-blue-400 bg-clip-text text-transparent">
                Open Solutions.
              </span>
            </h1> ⁠
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link to="/quote">
                <Button size="lg" className="gradient-primary text-lg px-8 hover:shadow-elevated transition-all duration-300 group">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link> */}
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white hover:bg-white/80 transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover-float hover:shadow-elevated transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-primary font-medium inline-flex items-center group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-10 hover-float hover:shadow-elevated transition-all duration-500"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                  <product.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-primary mb-4">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                <Link to="/products" className="text-primary font-medium inline-flex items-center group">
                  Explore Product
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Trusted by businesses across the region for excellence and reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyChooseUs.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 transition-all duration-300">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-6">
          <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss how our solutions can drive your digital transformation and boost your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" className="gradient-primary text-lg px-8 hover:shadow-elevated transition-all duration-300">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-primary/5 transition-all duration-300">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
