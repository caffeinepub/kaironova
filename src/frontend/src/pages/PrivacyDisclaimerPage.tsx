import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function PrivacyDisclaimerPage() {
  useEffect(() => {
    document.title = 'Privacy & Disclaimer - KairoNova';
  }, []);

  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy & Disclaimer</h1>
        <p className="text-lg text-muted-foreground">
          Important information about using KairoNova
        </p>
      </div>

      <div className="space-y-6">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Demo Experience</AlertTitle>
          <AlertDescription>
            KairoNova is a demonstration AI chatbot platform. The responses provided are for
            informational and entertainment purposes only.
          </AlertDescription>
        </Alert>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">No Professional Advice:</strong> KairoNova does
                not provide professional, medical, legal, financial, or any other type of
                professional advice. The information provided through this chatbot should not be
                used as a substitute for professional consultation.
              </p>
              <p>
                <strong className="text-foreground">Demo Purpose:</strong> This platform is a
                demonstration of AI chat technology. Responses are generated for illustrative
                purposes and may not always be accurate or appropriate for your specific situation.
              </p>
              <p>
                <strong className="text-foreground">No Guarantees:</strong> We make no guarantees
                about the accuracy, completeness, or reliability of any information provided through
                the chatbot. Use the service at your own discretion.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Data Collection:</strong> KairoNova stores your
                chat messages to provide the service. Your conversations are associated with your
                session and stored on the Internet Computer blockchain.
              </p>
              <p>
                <strong className="text-foreground">Data Usage:</strong> We use your data solely to
                provide and improve the chat experience. We do not sell or share your personal
                information with third parties.
              </p>
              <p>
                <strong className="text-foreground">Data Security:</strong> Your data is stored on
                the Internet Computer blockchain, which provides decentralized and secure storage.
                However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
              <p>
                <strong className="text-foreground">Your Rights:</strong> You have the right to
                access, modify, or delete your data. Since this is a demo platform, data management
                features may be limited.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>By using KairoNova, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to harm, disrupt, or compromise the platform</li>
                <li>Not use the service to generate harmful, illegal, or inappropriate content</li>
                <li>Respect the rights and privacy of others</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy & Disclaimer page from time to time. We encourage you to
              review this page periodically for any changes. Your continued use of KairoNova after
              any modifications indicates your acceptance of the updated terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy & Disclaimer policy or KairoNova in
              general, please feel free to reach out through our About page.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
