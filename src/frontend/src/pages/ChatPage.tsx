import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Loader2, Send, Sparkles, User } from 'lucide-react';
import { useChatHistory, useSendMessage } from '@/hooks/useChatApi';
import { useChatSession } from '@/hooks/useChatSession';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { generateBotReply } from '@/lib/demoBot';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { sessionId } = useChatSession();
  const { data: messages = [], isLoading, error, refetch } = useChatHistory(sessionId);
  const sendMessageMutation = useSendMessage();

  useEffect(() => {
    document.title = 'Chat - KairoNova';
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || !sessionId || sendMessageMutation.isPending || isTyping) return;

    const userMessage = input.trim();
    setInput('');

    try {
      // Send user message
      await sendMessageMutation.mutateAsync({
        sessionId,
        content: userMessage,
      });

      // Show typing indicator
      setIsTyping(true);

      // Generate bot reply with delay
      const botReply = generateBotReply(userMessage);
      await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

      // Send bot message
      await sendMessageMutation.mutateAsync({
        sessionId,
        content: botReply,
      });

      setIsTyping(false);
    } catch (error) {
      console.error('Failed to send message:', error);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (isLoading) {
    return (
      <div className="container max-w-4xl py-8">
        <Card className="h-[calc(100vh-12rem)] flex flex-col">
          <div className="flex-1 p-6 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-4xl py-8">
        <Alert variant="destructive">
          <AlertDescription>
            Failed to load chat history. Please try again.
            <Button variant="outline" size="sm" onClick={() => refetch()} className="ml-4">
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-8">
      <Card className="h-[calc(100vh-12rem)] flex flex-col">
        {/* Messages Area */}
        <ScrollArea className="flex-1 p-6" ref={scrollRef}>
          {messages.length === 0 && !isTyping && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Start a Conversation</h2>
              <p className="text-muted-foreground max-w-md">
                Ask me anything! I'm here to help with your questions and have meaningful
                conversations.
              </p>
            </div>
          )}

          <div className="space-y-6">
            {messages.map((message, index) => {
              const isUser = index % 2 === 0;
              return (
                <div key={message.id.toString()} className={`flex gap-3 ${isUser ? '' : ''}`}>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                      isUser ? 'bg-muted' : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {isUser ? <User className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{isUser ? 'You' : 'KairoNova'}</p>
                    <div
                      className={`rounded-lg p-4 ${
                        isUser ? 'bg-muted' : 'bg-primary/5 border border-primary/10'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">KairoNova</p>
                  <div className="rounded-lg p-4 bg-primary/5 border border-primary/10">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-primary/60 animate-pulse-glow" />
                      <div
                        className="h-2 w-2 rounded-full bg-primary/60 animate-pulse-glow"
                        style={{ animationDelay: '0.2s' }}
                      />
                      <div
                        className="h-2 w-2 rounded-full bg-primary/60 animate-pulse-glow"
                        style={{ animationDelay: '0.4s' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border/40 p-4">
          <div className="flex gap-2">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
              className="min-h-[60px] max-h-[200px] resize-none"
              disabled={sendMessageMutation.isPending || isTyping}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || sendMessageMutation.isPending || isTyping}
              size="icon"
              className="h-[60px] w-[60px] shrink-0"
            >
              {sendMessageMutation.isPending || isTyping ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
