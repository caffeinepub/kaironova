import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Heart, Zap, Shield } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About - KairoNova';
  }, []);

  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Sparkles className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">About KairoNova</h1>
        <p className="text-lg text-muted-foreground">
          Your intelligent AI companion for meaningful conversations
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              KairoNova is designed to provide an intuitive and engaging AI chat experience. We
              believe in making advanced AI technology accessible to everyone through natural,
              meaningful conversations. Our platform combines cutting-edge technology with a
              user-friendly interface to deliver an exceptional conversational experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">User-Centric</h3>
                <p className="text-sm text-muted-foreground">
                  Built with your needs in mind, focusing on simplicity and effectiveness.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Fast & Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  Lightning-fast responses powered by efficient technology.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Secure</h3>
                <p className="text-sm text-muted-foreground">
                  Your privacy and data security are our top priorities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Developed by Kairav</h2>
            <p className="text-muted-foreground leading-relaxed">
              KairoNova is proudly developed by Kairav, combining passion for technology with a
              vision to create meaningful AI interactions. This project represents a commitment to
              innovation, user experience, and the future of human-AI collaboration.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Technology</h2>
            <p className="text-muted-foreground leading-relaxed">
              Built on the Internet Computer blockchain, KairoNova leverages decentralized
              technology to provide a secure, scalable, and reliable chat experience. Our platform
              combines modern web technologies with blockchain infrastructure to deliver a seamless
              user experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
