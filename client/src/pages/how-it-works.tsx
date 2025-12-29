import Layout from "@/components/layout/Layout";

export default function HowItWorks() {
  return (
    <Layout>
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">How It Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Detailed architecture and ecosystem mechanics coming soon.
          </p>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p>
              Mosaic's architecture relies on separating the layers of social media that are typically bundled together: identity, data, logic, and interface.
            </p>
            <h3>Core Components</h3>
            <ul>
              <li><strong>People:</strong> Portable identity (DID)</li>
              <li><strong>Data:</strong> Personal Data Stores (PDS)</li>
              <li><strong>Spaces:</strong> Federated or decentralized servers</li>
              <li><strong>The River:</strong> Aggregated feeds via algorithms of choice</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
