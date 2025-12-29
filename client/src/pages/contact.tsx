import Layout from "@/components/layout/Layout";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Contact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with the team.
          </p>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
          <div className="bg-background border border-border rounded-2xl p-12 shadow-sm">
             <Mail className="mx-auto w-16 h-16 text-primary mb-6" />
             <h2 className="text-2xl font-bold mb-4 text-primary">We'd love to hear from you</h2>
             <p className="text-muted-foreground mb-8">
               Whether you're a developer, researcher, funder, or just interested in the future of social media.
             </p>
             <a 
                href="mailto:contact@mosaic.social" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all"
              >
                contact@mosaic.social
              </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
