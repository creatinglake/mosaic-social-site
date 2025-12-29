import Layout from "@/components/layout/Layout";

export default function UseCases() {
  return (
    <Layout>
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Use Cases</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications for a healthier social web.
          </p>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl grid gap-12">
          <div className="p-8 rounded-2xl border border-border bg-background">
            <h3 className="text-2xl font-bold mb-4 text-primary">Creators & Publications</h3>
            <p className="text-muted-foreground">Direct ownership of audience relationships without algorithmic interference.</p>
          </div>
          
          <div className="p-8 rounded-2xl border border-border bg-background">
            <h3 className="text-2xl font-bold mb-4 text-primary">Communities & Groups</h3>
            <p className="text-muted-foreground">Sovereign spaces with their own moderation rules and governance models.</p>
          </div>
          
          <div className="p-8 rounded-2xl border border-border bg-background">
            <h3 className="text-2xl font-bold mb-4 text-primary">Civic & Public Interest</h3>
            <p className="text-muted-foreground">Digital town squares optimized for constructive discourse rather than engagement.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
