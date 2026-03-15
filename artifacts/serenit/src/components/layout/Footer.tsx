import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-foreground mb-6">
          <Logo height={26} />
        </div>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
          Elevating enterprise operations with precision IT consulting. Partner with us to build resilient, scalable systems.
        </p>
        <div className="text-xs text-muted-foreground/60 flex flex-col sm:flex-row items-center gap-4">
          <span>&copy; {new Date().getFullYear()} SERENIT Consulting. All rights reserved.</span>
          <span className="hidden sm:inline">&bull;</span>
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <span className="hidden sm:inline">&bull;</span>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
