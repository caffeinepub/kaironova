import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, MessageSquare, Zap, Shield, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  useEffect(() => {
    document.title = 'KairoNova - Your Intelligent AI Companion';
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Engage in fluid, context-aware dialogues that feel genuinely human.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant responses powered by cutting-edge AI technology.',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your conversations are protected with enterprise-grade security.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Developed by Kairav</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Meet{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              KairoNova
            </span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-2xl mx-auto text-balance">
            Your intelligent AI companion for meaningful conversations. Experience the future of
            human-AI interaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/chat">
              <Button size="lg" className="gap-2 shadow-glow">
                Start Chatting
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose KairoNova?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the features that make KairoNova your perfect AI companion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card hover:shadow-soft transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to Experience the Future?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already having meaningful conversations with
                KairoNova.
              </p>
              <Link to="/chat">
                <Button size="lg" className="gap-2 shadow-glow">
                  Get Started Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
