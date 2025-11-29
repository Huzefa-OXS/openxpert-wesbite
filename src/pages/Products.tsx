import { Database, Lock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Enterprise-grade solutions that power modern businesses. From ERP to cybersecurity, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Odoo ERP Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="glass rounded-3xl p-10 hover-float">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-primary mb-4">Odoo ERP</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Complete business management solution that integrates all your operations into one powerful platform. From sales to inventory, accounting to HR - manage everything seamlessly.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Key Modules</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["Sales", "CRM", "Inventory", "Accounting", "HR", "Manufacturing", "Project Management", "E-commerce"].map((module, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-foreground">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Our Services</h3>
                    <ul className="space-y-2">
                      {[
                        "Implementation & Customization",
                        "Data Migration",
                        "User Training & Support",
                        "Module Integration",
                        "Ongoing Maintenance",
                      ].map((service, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/quote">
                  <Button className="w-full group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                    Get Odoo ERP
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-6">
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Why Choose Odoo?</h3>
                  <div className="space-y-4">
                    {[
                      { title: "All-in-One Solution", desc: "Manage your entire business from a single platform" },
                      { title: "Highly Customizable", desc: "Tailor every aspect to fit your unique processes" },
                      { title: "Scalable", desc: "Grows with your business from startup to enterprise" },
                      { title: "Cost-Effective", desc: "Pay only for the modules you need" },
                    ].map((item, idx) => (
                      <div key={idx} className="border-l-4 border-purple-600 pl-4">
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Use Cases</h3>
                  <ul className="space-y-3">
                    {[
                      "Retail & E-commerce businesses",
                      "Manufacturing companies",
                      "Service providers",
                      "Distribution & logistics",
                      "Professional services firms",
                    ].map((useCase, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        <span className="text-muted-foreground">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Xcitium Cybersecurity Section */}
      <section className="py-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Security Features</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Endpoint Protection", desc: "Advanced threat detection and prevention" },
                      { title: "MDR (Managed Detection & Response)", desc: "24/7 monitoring by security experts" },
                      { title: "EDR (Endpoint Detection & Response)", desc: "Real-time threat hunting and response" },
                      { title: "SIEM Integration", desc: "Comprehensive security information management" },
                    ].map((item, idx) => (
                      <div key={idx} className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Protection Against</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Malware", "Ransomware", "Phishing", "Zero-Day Attacks", "Data Breaches", "Insider Threats"].map((threat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 bg-destructive/10 rounded-lg p-2">
                        <Lock className="w-4 h-4 text-destructive flex-shrink-0" />
                        <span className="text-sm text-foreground">{threat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 glass rounded-3xl p-10 hover-float">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-primary mb-4">Xcitium Cybersecurity</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Enterprise-grade cybersecurity solution that protects your business from advanced threats. With AI-powered threat detection and 24/7 monitoring, your data stays secure.
                </p>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Key Capabilities</h3>
                    <ul className="space-y-2">
                      {[
                        "Zero-Trust Architecture",
                        "AI-Powered Threat Detection",
                        "Automated Response & Remediation",
                        "Compliance Management",
                        "Vulnerability Assessment",
                        "Security Analytics Dashboard",
                      ].map((capability, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Why Xcitium?</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["99.9% Detection Rate", "24/7 Support", "Cloud-Based", "Easy Deployment"].map((benefit, idx) => (
                        <div key={idx} className="bg-primary/10 rounded-lg p-3 text-center">
                          <div className="font-semibold text-primary text-sm">{benefit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/quote">
                  <Button className="gradient-primary w-full group">
                    Get Xcitium Protection
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in Our Products?</h2>
            <p className="text-xl text-white/90 mb-10">
              Let's schedule a demo and show you how our solutions can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                  Request a Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8">
                  Speak to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
