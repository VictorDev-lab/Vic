import React from 'react';
import { CheckCircle, Users, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gold-500">
            About Entrepreneur Site
          </h1>
          <p className="lead text-xl md:text-2xl max-w-3xl mx-auto text-white">
            We are dedicated to fostering innovation and supporting the next generation of business leaders.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="two-col">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-6 text-gold-500">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our mission is to empower aspiring and established entrepreneurs with the tools, knowledge, and network they need to succeed in a rapidly evolving global market. We believe in the power of ideas and the drive of individuals to create lasting impact.
            </p>
            <p className="text-lg text-muted-foreground">
              Through strategic guidance, innovative solutions, and a supportive community, we aim to transform ambitious visions into tangible achievements.
            </p>
          </div>
          <aside>
            <h3 className="text-xl font-semibold mb-4 text-primary">Why Choose Us?</h3>
            <ul className="values-list">
              <li><CheckCircle className="inline-block mr-2 text-gold-500" size={18} /> <strong>Expert Guidance:</strong> Benefit from seasoned industry professionals.</li>
              <li><CheckCircle className="inline-block mr-2 text-gold-500" size={18} /> <strong>Tailored Strategies:</strong> Solutions crafted specifically for your unique challenges.</li>
              <li><CheckCircle className="inline-block mr-2 text-gold-500" size={18} /> <strong>Community Focus:</strong> Join a network of like-minded innovators.</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-card">
        <h2 className="text-4xl font-bold mb-8 text-gold-500">Our Core Values</h2>
        <div className="card-grid">
          <div className="card">
            <Lightbulb className="text-gold-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-primary">Innovation</h3>
            <p>We constantly seek new and better ways to solve problems and create value.</p>
          </div>
          <div className="card">
            <Users className="text-gold-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-primary">Integrity</h3>
            <p>We operate with honesty, transparency, and a strong ethical compass.</p>
          </div>
          <div className="card">
            <CheckCircle className="text-gold-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-primary">Excellence</h3>
            <p>We are committed to delivering the highest quality in everything we do.</p>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder for future content) */}
      <section className="section">
        <h2 className="text-4xl font-bold mb-8 text-gold-500">Meet Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our diverse team of experts is passionate about entrepreneurship and dedicated to your success.
          Team member profiles coming soon!
        </p>
        {/* Team member cards would go here */}
      </section>
    </>
  );
};

export default AboutPage;