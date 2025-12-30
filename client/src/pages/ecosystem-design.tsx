import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";

export default function EcosystemDesign() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileTocOpen(false);
    }
  };

  const TableOfContents = () => (
    <nav className="space-y-1">
      <p className="font-semibold text-sm text-foreground/70 uppercase tracking-wider mb-4 px-2">On this page</p>
      <a
        href="#overview"
        onClick={(e) => scrollToSection(e, "overview")}
        className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
          activeSection === "overview"
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
      >
        Overview
      </a>
      <a
        href="#architecture"
        onClick={(e) => scrollToSection(e, "architecture")}
        className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
          activeSection === "architecture"
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
      >
        Architecture
      </a>
      <a
        href="#governance"
        onClick={(e) => scrollToSection(e, "governance")}
        className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
          activeSection === "governance"
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
      >
        Governance & Stewardship
      </a>
      <a
        href="#interoperability"
        onClick={(e) => scrollToSection(e, "interoperability")}
        className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
          activeSection === "interoperability"
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
      >
        Interoperability & Standards
      </a>
      <a
        href="#economics"
        onClick={(e) => scrollToSection(e, "economics")}
        className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
          activeSection === "economics"
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
      >
        Economic Considerations
      </a>
      <a
        href="#future"
        onClick={(e) => scrollToSection(e, "future")}
        className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
          activeSection === "future"
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`}
      >
        Future Design Areas
      </a>
    </nav>
  );

  return (
    <Layout>
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-b from-[#1E3F6B]/5 to-background border-b border-border/40 pt-28 pb-16 relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#84B5DD]/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary tracking-tight">
              Mosaic Ecosystem Design
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                WORKING DRAFT
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Scope: Architecture, Governance, Interoperability
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light max-w-3xl">
              Mosaic is a proposal for a different kind of social media—one built around human well-being, democratic health, and long-term public value.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-12 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 relative">
          
          {/* Desktop Table of Contents */}
          <aside className="hidden lg:block sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pt-2">
            <TableOfContents />
          </aside>

          {/* Mobile Table of Contents Toggle */}
          <div className="lg:hidden mb-8 border border-border rounded-lg bg-background shadow-sm">
            <button
              onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium"
            >
              <span className="flex items-center gap-2">
                <Menu size={16} />
                Contents
              </span>
              {isMobileTocOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {isMobileTocOpen && (
              <div className="px-4 pb-4 border-t border-border pt-2">
                <TableOfContents />
              </div>
            )}
          </div>

          {/* Main Content */}
          <article className="prose prose-lg prose-slate max-w-none">
            
            {/* Disclaimer Box */}
            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-16">
              <p className="font-medium text-foreground italic mb-2 mt-0">
                This is a working draft. It's incomplete on purpose.
              </p>
              <p className="text-muted-foreground m-0">
                We're publishing it to invite criticism, ideas, and collaboration. It explores how a human-centered, interoperable social media ecosystem could work, not a commitment to build any specific product.
              </p>
            </div>

            {/* Overview Section */}
            <section id="overview" className="scroll-mt-24 mb-16 border-b border-border/50 pb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground group flex items-center gap-2">
                Overview
                <a href="#overview" className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-opacity" aria-label="Link to this section">#</a>
              </h2>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8 text-foreground">What Mosaic actually is (and isn't)</h3>
              <p>
                Mosaic isn't a single platform, app, or company.
              </p>
              <p>
                It's an ecosystem design—a shared framework that lets many different social spaces and services work together, evolve, and stay connected without anyone owning or controlling the whole thing.
              </p>
              <p>
                The goal isn't to replace every existing social platform. It's to create a real, scalable alternative to the dominant model—one where the technology, incentives, and governance actually serve the public good.
              </p>

              <h3 className="text-2xl font-semibold mb-6 mt-12 text-foreground">Design principles</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Human-centered by design</h4>
                  <p className="mt-0">
                    People and communities should be able to optimize for their own well-being, agency, and meaningful connection. Rather than baking in one definition of "healthy" behavior, Mosaic provides the structural conditions—choice, transparency, portability—that let people curate experiences aligned with their values.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Interoperability as a requirement, not a feature</h4>
                  <p className="mt-0">
                    Real competition between service providers only works with interoperability. Shared standards and portability prevent vendor lock-in, enable genuine choice, and keep any single actor from capturing or controlling the network.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Users control their identity and data</h4>
                  <p className="mt-0">
                    You should own your identity and personal data. You choose your providers, move between services, and revoke access without losing your social connections.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Pluralism over uniformity</h4>
                  <p className="mt-0">
                    Different communities need different norms, tools, and governance. The ecosystem supports this diversity while maintaining the ability to interoperate.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">Governance is infrastructure</h4>
                  <p className="mt-0">
                    Lasting public benefit requires governance mechanisms built into the foundation, not bolted on as an afterthought.
                  </p>
                </div>
              </div>
            </section>

            {/* Architecture Section */}
            <section id="architecture" className="scroll-mt-24 mb-16 border-b border-border/50 pb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground group flex items-center gap-2">
                Architecture: How Mosaic Works
                <a href="#architecture" className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-opacity" aria-label="Link to this section">#</a>
              </h2>

              <h3 className="text-2xl font-semibold mb-4 mt-8 text-foreground">The four layers</h3>
              <p>Mosaic has four interconnected layers:</p>
              <ol className="list-decimal pl-6 space-y-2 mb-6 font-medium text-foreground">
                <li>People</li>
                <li>Personal data</li>
                <li>Spaces</li>
                <li>The River</li>
              </ol>
              <p>
                These layers enable social interaction, discovery, and collaboration across independent systems without central control.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-4 mt-0 text-foreground">People (identity & agency)</h3>
                  <p className="text-base">
                    You participate in Mosaic with a portable, user-controlled digital identity instead of platform-bound accounts.
                  </p>
                  <p className="text-sm font-semibold mb-2 mt-4">Your identity:</p>
                  <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
                    <li>Works independently of any single service</li>
                    <li>Lets you authenticate across multiple spaces</li>
                    <li>Supports privacy-preserving and selective disclosure</li>
                  </ul>
                  <p className="text-base font-medium">
                    Identity is treated as public infrastructure, not platform property.
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-4 mt-0 text-foreground">Personal data (storage & control)</h3>
                  <p className="text-base">
                    Your personal data lives in places you control or trust, not captured and monetized by platforms.
                  </p>
                  <p className="text-base mt-4">
                    <span className="font-semibold">The key requirement: portability and consent.</span> You can move, revoke, or grant access to your data without losing your social graph.
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-4 mt-0 text-foreground">Spaces (communities & services)</h3>
                  <p className="text-base">
                    Spaces are interoperable social environments built on shared standards.
                  </p>
                  <p className="text-sm font-semibold mb-2 mt-4">Examples:</p>
                  <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
                    <li>Interest or affinity-based community groups</li>
                    <li>Creator and publisher spaces</li>
                    <li>Civic hubs for digital democracy</li>
                    <li>Local community groups</li>
                  </ul>
                  <p className="text-base">
                    Each space defines its own norms and governance, chooses its own business model, and stays interoperable with the wider ecosystem. <span className="font-medium">No single space owns the network.</span>
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-4 mt-0 text-foreground">The River (decentralized social feed)</h3>
                  <p className="text-base">
                    The River is a decentralized activity stream that pulls together updates from spaces you follow.
                  </p>
                  <p className="text-sm font-semibold mb-2 mt-4">Unlike centralized feeds:</p>
                  <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
                    <li>There's no single algorithmic authority</li>
                    <li>Aggregation happens across independent systems</li>
                    <li>You control what flows into your River</li>
                    <li>You can choose between different algorithms or ranking systems</li>
                  </ul>
                  <p className="text-base font-medium">
                    This enables discovery and connection without a central platform controlling attention.
                  </p>
                </div>
              </div>
            </section>

            {/* Governance Section */}
            <section id="governance" className="scroll-mt-24 mb-16 border-b border-border/50 pb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground group flex items-center gap-2">
                Governance & Stewardship
                <a href="#governance" className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-opacity" aria-label="Link to this section">#</a>
              </h2>
              
              <p className="text-xl font-medium text-foreground/90 mb-6">
                Technical design alone can't make a social media ecosystem serve the public good.
              </p>
              
              <p>
                Much of the need for innovation is around governance: how shared infrastructure gets stewarded, how incentives align, and how long-term public value is protected from short-term extraction or capture.
              </p>
              
              <p>
                Mosaic will need explicit governance mechanisms, potentially including:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Nonprofit, cooperative, or social-enterprise stewardship models</li>
                <li>Transparent and accountable standards development</li>
                <li>Certification or compliance mechanisms for ecosystem participants</li>
                <li>Representation across users, communities, service providers, and public-interest stakeholders</li>
              </ul>
              
              <p className="bg-secondary/5 p-6 rounded-lg border border-secondary/20 font-medium">
                The exact institutional form is deliberately left open. What matters is that the ecosystem works well and the incentives shaping it align with the public good rather than extraction or capture.
              </p>
            </section>

            {/* Interoperability Section */}
            <section id="interoperability" className="scroll-mt-24 mb-16 border-b border-border/50 pb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground group flex items-center gap-2">
                Interoperability & Standards
                <a href="#interoperability" className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-opacity" aria-label="Link to this section">#</a>
              </h2>
              
              <p>
                Interoperability isn't aspirational—it's the minimum requirement for Mosaic to work.
              </p>
              
              <p>
                To compete with large, vertically integrated platforms while staying open and decentralized, Mosaic needs connective tissue that lets independent services and spaces work together reliably.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8 text-foreground">This connective tissue includes:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Clearly defined interoperability surfaces between components</li>
                <li>Shared protocols for identity, activity, and data exchange</li>
                <li>Portable credentials and relationships across services</li>
                <li>Predictable behavior across implementations</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8 text-foreground">Standards alone don't guarantee real-world interoperability</h3>
              <p>Mosaic also needs:</p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Reference implementations</li>
                <li>Conformance profiles</li>
                <li>Automated test suites and compliance testing</li>
              </ul>
              
              <p>
                These ensure independently developed services can actually interoperate, not just theoretically, while preserving competition, choice, and decentralization.
              </p>
            </section>

            {/* Economics Section */}
            <section id="economics" className="scroll-mt-24 mb-16 border-b border-border/50 pb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground group flex items-center gap-2">
                Economic Considerations
                <a href="#economics" className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-opacity" aria-label="Link to this section">#</a>
              </h2>
              
              <p>
                Mosaic is intentionally agnostic about business models. The ecosystem doesn't dictate how individual services, spaces, or providers make money.
              </p>
              
              <p>
                Instead, Mosaic enables open and competitive markets for social media services. Because identity, relationships, and data are portable, individuals and creators can move between providers and business models without losing their social graph or audience.
              </p>

              <p>
                This portability is a core economic feature. It lowers switching costs, prevents lock-in, and lets multiple business models coexist and compete:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Advertising-supported services (providing low-friction entry)</li>
                <li>Subscription-based services</li>
                <li>Creator-supported and patronage models</li>
                <li>Cooperative or membership-based structures</li>
                <li>Public-interest and grant-supported services</li>
              </ul>
              
              <p>
                Advertising is one option among many, not a structural requirement. Individuals and creators remain free to move between services and business models, including opting out of advertising entirely.
              </p>
              
              <p>
                By supporting a marketplace of interoperable services instead of a single dominant platform, the ecosystem can attract the capital and infrastructure needed to operate reliably at scale, while avoiding the extractive dynamics of advertising-driven monopolies.
              </p>
              
              <p className="font-medium text-foreground/80">
                The exact mix of business models will evolve as the ecosystem matures.
              </p>
            </section>

            {/* Future Design Areas Section */}
            <section id="future" className="scroll-mt-24 pb-8">
              <h2 className="text-3xl font-bold mb-8 text-foreground group flex items-center gap-2">
                Future Design Areas
                <a href="#future" className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-primary transition-opacity" aria-label="Link to this section">#</a>
              </h2>
              
              <p>
                This draft focuses on foundational architecture and governance. Additional areas to develop as the ecosystem matures:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Misinformation and disinformation mitigation</li>
                <li>Trust, reputation, and credibility signals</li>
                <li>Safety, moderation, and legal considerations</li>
                <li>Data sharing and consent models</li>
                <li>Relationships to emerging technologies like AI and immersive environments</li>
              </ul>
              
              <p className="bg-muted/30 p-6 rounded-lg text-muted-foreground italic">
                These topics are intentionally deferred until core architectural decisions are clearer.
              </p>
            </section>

          </article>
        </div>
      </main>
    </Layout>
  );
}