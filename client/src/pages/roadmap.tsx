import Layout from "@/components/layout/Layout";

export default function Roadmap() {
  return (
    <Layout>
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Roadmap</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our path to a decentralized social future.
          </p>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <div className="space-y-12">
             <div className="relative pl-8 border-l-2 border-primary/20">
               <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
               <h3 className="text-2xl font-bold mb-2 text-primary">Phase 1: Design & Convening</h3>
               <p className="text-muted-foreground">Gathering partners, defining standards, and creating the architectural blueprint.</p>
             </div>
             
             <div className="relative pl-8 border-l-2 border-primary/20">
               <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/50" />
               <h3 className="text-2xl font-bold mb-2 text-primary">Phase 2: Prototypes & Pilots</h3>
               <p className="text-muted-foreground">Building proof-of-concept implementations and testing with small communities.</p>
             </div>
             
             <div className="relative pl-8 border-l-2 border-primary/20">
               <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20" />
               <h3 className="text-2xl font-bold mb-2 text-primary">Phase 3: Public Launch</h3>
               <p className="text-muted-foreground">Opening the ecosystem to the wider public with a robust set of initial applications.</p>
             </div>
           </div>
        </div>
      </section>
    </Layout>
  );
}
