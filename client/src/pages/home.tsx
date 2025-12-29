import Layout from "@/components/layout/Layout";
import { Link } from "wouter";
import { Users, Database, LayoutGrid, Radio, ArrowRight, ExternalLink, Palette, User, Landmark } from "lucide-react";
import heroImage from "@assets/MosaicHero_1767024748577.png";
import problemImage from "@assets/generated_images/cracked_column_large_saturated.png";
import townSquareImage from "@assets/generated_images/sunny_town_square_with_diverse_community_gathering.png";
import audienceImage from "@assets/generated_images/subtle_abstract_network_of_connections_background.png";

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
                <div className="absolute inset-0 bg-[#5E161C]/5 rounded-full blur-3xl opacity-50" />
                <img 
                  src={problemImage} 
                  alt="Broken public forum column icon" 
                  className="relative z-10 w-3/4 max-w-xs drop-shadow-sm hover:scale-105 transition-all duration-500"
                />
             </div>
             <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#5E161C]">Social media is failing society</h2>
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
      <section className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={townSquareImage} 
            alt="Diverse community gathering in a sunny town square" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-tight">
            It doesn't have to be this way
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl font-bold text-mosaic-gold drop-shadow-md leading-tight">
              A healthier social media ecosystem is possible.
            </p>
            
            <div className="prose prose-xl mx-auto text-white/95 leading-relaxed font-medium">
              <p className="drop-shadow-sm">
                Many of the core building blocks already exist: decentralized identity, personal data stores, open social protocols, and community-based platforms. What’s missing is coherence—an integrated way to align these pieces into a decentralized, high-performance social media ecosystem that people can use at scale.
              </p>
              <p className="text-2xl pt-8 font-bold text-white drop-shadow-md border-t border-white/20 inline-block px-8 mt-4">
                Mosaic's role is to provide that missing connective tissue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Mosaic Section */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">What is Mosaic?</h2>
              <div className="prose prose-lg text-foreground/80 space-y-4">
                <p className="font-semibold text-xl text-primary/90">
                  Mosaic is not a new social media app.
                </p>
                <p>
                  It is an ecosystem design and implementation effort that connects independent technologies and services into a unified, human-centered alternative to Big Tech social media.
                </p>
                <p>
                  Rather than rebuilding everything from scratch, Mosaic integrates what already works—while addressing the gaps that have held previous efforts back, including coordination, governance, performance, and economic sustainability.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end" aria-hidden="true">
              <img 
                src="/assets/diagrams/mosaic-coherence-hex.svg" 
                alt="Mosaic coherence diagram showing governance, protocols, web standards, performance, business models, and spaces connected through Mosaic"
                className="w-full max-w-[550px] h-auto object-contain"
              />
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
              Mosaic brings together four core components into a coherent ecosystem:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Element 1 */}
            <div className="flex flex-col items-center text-center p-6 group">
              <div className="mb-6 text-mosaic-gold transform group-hover:scale-110 transition-transform duration-300">
                <Users size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">People</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Each person has a portable, user-controlled digital identity that works across the ecosystem and is not owned by any single company.
              </p>
            </div>

            {/* Element 2 */}
            <div className="flex flex-col items-center text-center p-6 group">
              <div className="mb-6 text-mosaic-gold transform group-hover:scale-110 transition-transform duration-300">
                <Database size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Personal data</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Your data lives in a personal data store you control, rather than being locked inside a platform's database.
              </p>
            </div>

            {/* Element 3 */}
            <div className="flex flex-col items-center text-center p-6 group">
              <div className="mb-6 text-mosaic-gold transform group-hover:scale-110 transition-transform duration-300">
                <LayoutGrid size={64} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Spaces</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Social interaction happens inside independent Spaces—communities, publications, creator hubs, civic groups, or private circles.
              </p>
            </div>

            {/* Element 4 */}
            <div className="flex flex-col items-center text-center p-6 group">
              <div className="mb-6 text-mosaic-gold transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-[64px] w-[64px]">
                 <img src="/assets/icons/river-flow.svg" alt="River Flow" className="w-16 h-16 text-mosaic-gold" style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(26%) saturate(1478%) hue-rotate(359deg) brightness(101%) contrast(106%)' }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The River</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
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
      <section className="py-24 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={audienceImage} 
            alt="Abstract network background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-primary">Who Mosaic is for</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {/* Creators Card */}
             <div className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#F2B233]" />
               <div className="flex items-start justify-between mb-4">
                 <h3 className="text-2xl font-bold text-[#F2B233]">Creators</h3>
                 <div className="p-2 rounded-lg bg-[#F2B233]/10 text-[#F2B233]">
                   <Palette size={24} />
                 </div>
               </div>
               <p className="text-lg text-foreground/80 leading-relaxed">
                 who want direct, lasting relationships with their audiences—without platform middlemen deciding what gets seen or how you make money. Choose your own tools and business model. Your content, your identity, and your audience relationships belong to you.
               </p>
             </div>

             {/* Communities Card */}
             <div className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3A67A5]" />
               <div className="flex items-start justify-between mb-4">
                 <h3 className="text-2xl font-bold text-[#3A67A5]">Communities</h3>
                 <div className="p-2 rounded-lg bg-[#3A67A5]/10 text-[#3A67A5]">
                   <Users size={24} />
                 </div>
               </div>
               <p className="text-lg text-foreground/80 leading-relaxed">
                 that need autonomy and tools tailored to their purpose. Set your own norms, moderation, and features—no one-size-fits-all rules imposed from above. Stay independent while connecting to the broader network.
               </p>
             </div>

             {/* Individuals Card */}
             <div className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#D04C3F]" />
               <div className="flex items-start justify-between mb-4">
                 <h3 className="text-2xl font-bold text-[#D04C3F]">Individuals</h3>
                 <div className="p-2 rounded-lg bg-[#D04C3F]/10 text-[#D04C3F]">
                   <User size={24} />
                 </div>
               </div>
               <p className="text-lg text-foreground/80 leading-relaxed">
                 seeking healthier, more intentional online spaces. Control what you see and how information reaches you. Choose which algorithms—or non-algorithmic filters—shape your experience. Built for individual sovereignty and well-being, not endless scrolling.
               </p>
             </div>

             {/* Society Card */}
             <div className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1E3F6B]" />
               <div className="flex items-start justify-between mb-4">
                 <h3 className="text-2xl font-bold text-[#1E3F6B]">Society and democracy</h3>
                 <div className="p-2 rounded-lg bg-[#1E3F6B]/10 text-[#1E3F6B]">
                   <Landmark size={24} />
                 </div>
               </div>
               <p className="text-lg text-foreground/80 leading-relaxed">
                 needs social infrastructure which is open, transparent, and accountable to the societies it shapes. Mosaic makes its structures auditable and its incentives explicit, enabling new forms of collective sensemaking that support a more resilient and participatory model of digital democracy.
               </p>
             </div>
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
