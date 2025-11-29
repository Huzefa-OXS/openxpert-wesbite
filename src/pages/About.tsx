import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through trust and results.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to keep you ahead of the competition.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices guide everything we do.",
    },
  ];

  const timeline = [
    { year: "2015", event: "Company Founded", description: "OpenXpert Solutions established in Ajman Free Zone" },
    { year: "2017", event: "100+ Projects", description: "Reached milestone of 100 successful project deliveries" },
    { year: "2019", event: "Odoo Partnership", description: "Became official Odoo implementation partner" },
    { year: "2021", event: "Xcitium Integration", description: "Added advanced cybersecurity solutions to portfolio" },
    { year: "2023", event: "Regional Expansion", description: "Expanded services across UAE and GCC region" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">About OpenXpert Solutions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted technology partner delivering innovative IT solutions since 2015. Based in Ajman Free Zone – Neuventures, we empower businesses across the UAE and GCC region.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-10 hover-float">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and digital transformation. We're committed to delivering exceptional value through innovation, expertise, and unwavering dedication to our clients' success.
              </p>
            </div>

            <div className="glass rounded-3xl p-10 hover-float">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading IT solutions provider in the region, recognized for transforming businesses through technology. We envision a future where every organization, regardless of size, has access to enterprise-grade IT solutions that propel them forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover-float hover:shadow-elevated transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of growth, innovation, and success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="glass rounded-2xl p-6 hover-float inline-block">
                        <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.event}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background"></div>
                    </div>
                    <div className="w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              With over a decade of experience, our team of certified professionals brings deep expertise across multiple domains including ERP implementation, cybersecurity, web development, and IT infrastructure management. We combine technical excellence with business acumen to deliver solutions that truly transform businesses.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {["Odoo ERP", "Cybersecurity", "Web Development", "Cloud Solutions", "IT Consultancy", "AMC Services"].map((expertise, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-4 font-medium">
                  {expertise}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
