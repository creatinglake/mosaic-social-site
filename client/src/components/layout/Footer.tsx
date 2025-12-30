import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-primary font-heading font-bold text-xl mb-4">Mosaic</h3>
            <p className="text-muted-foreground max-w-sm">
              An open, interoperable social media ecosystem that puts people, communities, and the public good first.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">Ecosystem</h4>
            <ul className="space-y-3">
              <li><Link href="/use-cases"><a className="text-muted-foreground hover:text-mosaic-blue transition-colors">Use Cases</a></Link></li>
              <li><Link href="/ecosystem-design"><a className="text-muted-foreground hover:text-mosaic-blue transition-colors">Ecosystem Design</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/contact"><a className="text-muted-foreground hover:text-mosaic-blue transition-colors">Contact Us</a></Link></li>
              <li><a href="mailto:contact@mosaic.social" className="text-muted-foreground hover:text-mosaic-blue transition-colors">contact@mosaic.social</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mosaic Initiative. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
