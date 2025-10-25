import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> by{" "}
          <span className="text-primary font-semibold">Rogem A. Lanuza</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
