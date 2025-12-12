import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gold-500">
            Innovate. Create. Succeed.
          </h1>
          <p className="lead text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white">
            Empowering entrepreneurs to turn visionary ideas into impactful realities.
          </p>
          <div className="cta-row flex justify-center gap-4">
            <a href="/#contact" className="btn primary">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="/about" className="btn secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-card">
        <h2 className="text-4xl font-bold mb-8 text-gold-500">Our Core Strengths</h2>
        <div className="feature-grid">
          <div className="feature">
            <h4 className="text-lg font-semibold mb-2 text-primary">Strategic Consulting</h4>
            <p>Guidance to navigate complex markets and define clear pathways to success.</p>
          </div>
          <div className="feature">
            <h4 className="text-lg font-semibold mb-2 text-primary">Innovative Solutions</h4>
            <p>Developing cutting-edge technologies and creative approaches for your business.</p>
          </div>
          <div className="feature">
            <h4 className="text-lg font-semibold mb-2 text-primary">Growth Hacking</h4>
            <p>Accelerating your user acquisition and revenue with data-driven strategies.</p>
          </div>
          <div className="feature">
            <h4 className="text-lg font-semibold mb-2 text-primary">Brand Development</h4>
            <p>Crafting compelling brand identities that resonate with your target audience.</p>
          </div>
          <div className="feature">
            <h4 className="text-lg font-semibold mb-2 text-primary">Market Analysis</h4>
            <p>In-depth research to identify opportunities and mitigate risks.</p>
          </div>
          <div className="feature">
            <h4 className="text-lg font-semibold mb-2 text-primary">Funding Support</h4>
            <p>Connecting you with investors and helping secure the capital you need.</p>
          </div>
        </div>
      </section>

      {/* Projects Section (Placeholder for future content) */}
      <section id="projects" className="section">
        <h2 className="text-4xl font-bold mb-8 text-gold-500">Our Latest Ventures</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the innovative projects we've helped bring to life. Details coming soon!
        </p>
        {/* Project cards or carousel would go here */}
      </section>

      {/* Contact Section (Placeholder for future content) */}
      <section id="contact" className="section bg-card">
        <h2 className="text-4xl font-bold mb-8 text-gold-500">Ready to Start Your Journey?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Get in touch with our team to discuss your vision and how we can help you achieve it.
        </p>
        <a href="mailto:info@entrepreneur.com" className="btn primary">
          Contact Us
        </a>
      </section>
    </>
  );
};

export default HomePage;