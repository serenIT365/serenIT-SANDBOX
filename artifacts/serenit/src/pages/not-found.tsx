import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="relative z-10 text-center space-y-6 max-w-lg px-4">
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-muted-foreground">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Page Not Found</h2>
        <p className="text-muted-foreground text-lg">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <div className="pt-8">
          <Button size="lg" onClick={() => window.location.href = import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
