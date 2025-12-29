import Layout from "@/components/layout/Layout";

export default function EcosystemDesign() {
  return (
    <Layout>
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Ecosystem Design</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborative standards for a new social commons.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <div className="prose prose-lg mx-auto">
             <p>
               We are convening a diverse group of stakeholders to design the standards and governance protocols that will ensure Mosaic remains open, safe, and sustainable.
             </p>
             <h3>Key Focus Areas</h3>
             <ul>
               <li>Interoperability Standards</li>
               <li>Content Moderation & Safety</li>
               <li>Economic Models & Incentives</li>
               <li>Democratic Governance</li>
             </ul>
           </div>
        </div>
      </section>
    </Layout>
  );
}
