import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Blog = () => {
  const categories = ["All", "ERP", "Cybersecurity", "Web Development", "IT Strategy", "Cloud Computing"];

  const blogPosts = [
    {
      title: "10 Signs Your Business Needs an ERP System",
      excerpt: "Discover the key indicators that it's time to invest in an Enterprise Resource Planning system for your growing business.",
      category: "ERP",
      author: "Sarah Johnson",
      date: "2024-11-15",
      readTime: "5 min read",
      image: "from-purple-500 to-purple-700",
    },
    {
      title: "Cybersecurity Trends to Watch in 2024",
      excerpt: "Stay ahead of emerging threats with insights into the latest cybersecurity trends and best practices for businesses.",
      category: "Cybersecurity",
      author: "Michael Chen",
      date: "2024-11-10",
      readTime: "7 min read",
      image: "from-primary to-accent",
    },
    {
      title: "Modern Web Development: React vs Vue vs Angular",
      excerpt: "A comprehensive comparison of popular JavaScript frameworks to help you choose the right technology for your project.",
      category: "Web Development",
      author: "Emma Wilson",
      date: "2024-11-05",
      readTime: "10 min read",
      image: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cloud Migration Strategy: A Complete Guide",
      excerpt: "Learn how to plan and execute a successful cloud migration strategy for your organization with minimal disruption.",
      category: "Cloud Computing",
      author: "David Martinez",
      date: "2024-10-28",
      readTime: "8 min read",
      image: "from-indigo-500 to-purple-500",
    },
    {
      title: "Maximizing ROI with Odoo ERP Customization",
      excerpt: "Explore how custom Odoo modules can transform your business processes and deliver exceptional return on investment.",
      category: "ERP",
      author: "Lisa Anderson",
      date: "2024-10-20",
      readTime: "6 min read",
      image: "from-purple-600 to-pink-500",
    },
    {
      title: "Building a Comprehensive IT Security Framework",
      excerpt: "Step-by-step guide to creating a robust security framework that protects your business from evolving cyber threats.",
      category: "Cybersecurity",
      author: "James Thompson",
      date: "2024-10-15",
      readTime: "9 min read",
      image: "from-red-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stay informed with the latest trends, best practices, and expert insights in technology and business.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-12 h-14 glass border-none text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "glass hover:bg-primary/10 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="glass rounded-2xl overflow-hidden hover-float hover:shadow-elevated transition-all duration-500 group"
                >
                  <div className={`h-48 bg-gradient-to-br ${post.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <button className="text-primary font-medium inline-flex items-center group/btn">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" className="px-8">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-white/90 mb-10">
              Get the latest insights, tips, and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
