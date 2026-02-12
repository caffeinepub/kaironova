import { type ReactNode } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SiFacebook, SiX, SiLinkedin, SiGithub } from 'react-icons/si';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/chat', label: 'Chat' },
    { path: '/about', label: 'About' },
    { path: '/privacy', label: 'Privacy' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              KairoNova
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPath === link.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border/40 bg-background md:hidden">
            <div className="container flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    currentPath === link.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 font-semibold text-lg mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span>KairoNova</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your intelligent AI companion for meaningful conversations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background hover:bg-accent transition-colors"
                  aria-label="X (Twitter)"
                >
                  <SiX className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <SiGithub className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} KairoNova. All rights reserved.</p>
            <p>
              Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'kaironova'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
