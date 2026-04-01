import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Zap } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="bg-primary p-1.5 rounded-lg">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">KaspiStream</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link to="/#features" className="hover:text-foreground transition-colors">Возможности</Link>
          <Link to="/pricing" className="hover:text-foreground transition-colors">Тарифы</Link>
          <Link to="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Войти
          </Link>
          <Button asChild>
            <Link to="/register">Начать бесплатно</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
