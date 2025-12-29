import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { Users, Database, LayoutGrid, Radio, ArrowRight, ExternalLink } from "lucide-react";
import heroImage from "@assets/MosaicHero_1767024748577.png";
import problemImage from "@assets/generated_images/cracked_column_recolored.png";

export default function Home() {
  const scrollToGetInvolved = () => {
    const element = document.getElementById('get-involved');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Mosaic Ecosystem Landscape" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay: White top for logo, Darker bottom for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-black/75 to-black/95" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
              A Human-Centered Social Media Ecosystem
            </h1>
            <div className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl drop-shadow-md leading-relaxed font-medium space-y-4">
              <p>
                Social media was meant to help us connect. Instead, today's dominant platforms are built on incentives that undermine trust, weaken communities, and extract value from users and creators.
              </p>
              <p>
                Mosaic is an effort to design an open, interoperable social media ecosystem that puts people, communities, and the public good first.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/how-it-works">
                <a className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-white text-primary font-bold text-xl hover:bg-white/90 transition-all shadow-lg hover:translate-y-[-1px]">
                  Explore how it works
                </a>
              </Link>
              <button 
                onClick={scrollToGetInvolved}
                className="inline-flex items-center justify-center px-10 py-5 rounded-xl border-2 border-white text-white font-semibold text-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Get involved
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative flex justify-center">
                <div className="absolute inset-0 bg-[#230505]/5 rounded-full blur-3xl opacity-50" />
                <img 
                  src={problemImage} 
                  alt="Broken public forum column icon" 
                  className="relative z-10 w-3/4 max-w-xs drop-shadow-sm hover:scale-105 transition-all duration-500"
                />
             </div>
             <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#230505]">Social media is failing society</h2>
                <div className="prose prose-lg text-foreground/80 space-y-6">
                  <p>
                    The problem with today's social media isn't just content or moderation—it's structural.
                  </p>
                  <p>
                    Most platforms are optimized for advertising and engagement above all else. Opaque algorithms amplify conflict and polarization. Personal data is harvested and monetized. Creators and communities are locked into systems they don't control.
                  </p>
                  <p>
                    The result is a digital environment that distorts public discourse, erodes trust, and weakens civil liberties in the digital age.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Hope Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-pattern-voronoi opacity-[0.05]" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">It doesn't have to be this way</h2>
          <div className="prose prose-xl mx-auto text-foreground/80">
            <p className="mb-8">
              A healthier social media ecosystem is possible.
            </p>
            <p>
              Many of the core building blocks already exist: decentralized identity, personal data stores, open social protocols, and community-based platforms. What's missing is coherence—a way to connect these pieces into something people can actually use at scale.
            </p>
            <p className="font-semibold text-primary">
              Mosaic's role is to provide that missing connective tissue.
            </p>
          </div>
        </div>
      </section>

      {/* What is Mosaic Section */}
      <section className="py-24 bg-secondary/10 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">What is Mosaic?</h2>
            <div className="prose prose-lg text-foreground/80 space-y-4">
              <p className="font-semibold text-xl text-primary/90">
                Mosaic is not a new social media app.
              </p>
              <p>
                It is an ecosystem design and implementation effort that connects independent technologies and services into a unified, human-centered alternative to Big Tech social media.
              </p>
              <p>
                Rather than rebuilding everything from scratch, Mosaic integrates what already works—while addressing the gaps that have held previous efforts back, including coordination, governance, performance, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Mosaic Works - Deep Blue Band */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-mesh opacity-[0.1]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">How Mosaic works</h2>
            <p className="text-xl text-primary-foreground/80">
              Mosaic brings together four foundational elements into a coherent system:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Element 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-mosaic-gold/20 flex items-center justify-center mb-4 text-mosaic-gold">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">People</h3>
              <p className="text-primary-foreground/70">
                Each person has a portable, user-controlled digital identity that works across the ecosystem and is not owned by any single company.
              </p>
            </div>

            {/* Element 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-mosaic-gold/20 flex items-center justify-center mb-4 text-mosaic-gold">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Personal data</h3>
              <p className="text-primary-foreground/70">
                Your data lives in a personal data store you control, rather than being locked inside a platform's database.
              </p>
            </div>

            {/* Element 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-mosaic-gold/20 flex items-center justify-center mb-4 text-mosaic-gold">
                <LayoutGrid size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Spaces</h3>
              <p className="text-primary-foreground/70">
                Social interaction happens inside independent Spaces—communities, publications, creator hubs, civic groups, or private circles.
              </p>
            </div>

            {/* Element 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-mosaic-gold/20 flex items-center justify-center mb-4 text-mosaic-gold">
                <Radio size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The River</h3>
              <p className="text-primary-foreground/70">
                Updates from the Spaces you follow flow into a unified, customizable feed—filtered using methods and algorithms you choose.
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-primary-foreground/80 mb-8">
              Together, these elements form an open social ecosystem that restores choice, agency, and accountability.
            </p>
            <Link href="/how-it-works">
              <a className="inline-flex items-center gap-2 text-white font-semibold border-b border-mosaic-gold pb-0.5 hover:text-mosaic-gold transition-colors">
                Explore the full architecture <ArrowRight size={16} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Who Mosaic is for</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             {[
               "Creators who want direct relationships with their audiences",
               "Communities that need autonomy and context-aware governance",
               "Individuals who want healthier, more intentional information diets",
               "Civic and public-interest groups seeking trustworthy digital spaces"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4 p-6 rounded-xl border border-border bg-muted/20">
                 <div className="mt-1 w-2 h-2 rounded-full bg-mosaic-gold shrink-0" />
                 <p className="text-lg text-foreground/80 font-medium">{item}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary/5 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-pattern-voronoi opacity-[0.03]" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">A collaborative design process</h2>
          <div className="prose prose-lg mx-auto text-foreground/80 mb-8">
            <p>
              The social media problem spans technology, governance, economics, mental health, and democracy. No single person or organization can solve it alone.
            </p>
            <p>
              Mosaic's next step is a collaborative ecosystem design process—bringing together technologists, social scientists, creators, service providers, and funders to define the standards, governance, and architecture for a new social media commons.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Get involved</h2>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 font-light">
            If this vision resonates with you, we'd love to hear from you.
            <br className="hidden md:block" />
            We're looking for collaborators, partners, advisors, and funders who are interested in helping shape a healthier social web.
          </p>
          
          <a 
            href="mailto:contact@mosaic.social" 
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-primary font-bold text-xl hover:bg-mosaic-gold hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            contact@mosaic.social
          </a>
        </div>
      </section>
    </Layout>
  );
}
