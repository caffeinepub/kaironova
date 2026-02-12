const responses = [
  "That's an interesting question! Let me think about that for a moment.",
  "I appreciate you sharing that with me. Here's what I think...",
  "Great point! From my perspective, I'd say...",
  "I understand what you're asking. Let me provide some insight on that.",
  "That's a thoughtful question. Based on what I know...",
  "I'm glad you brought that up! Here's my take on it...",
  "Interesting! I'd be happy to help you explore that topic.",
  "Thank you for asking! Let me share some thoughts on that.",
];

const topicResponses: Record<string, string[]> = {
  hello: [
    "Hello! It's great to meet you. How can I assist you today?",
    "Hi there! I'm KairoNova, your AI companion. What would you like to talk about?",
    "Hey! Welcome to KairoNova. I'm here to help with any questions you might have.",
  ],
  help: [
    "I'm here to help! You can ask me questions, have conversations, or just chat about anything on your mind.",
    "I can assist with a variety of topics. Feel free to ask me anything, and I'll do my best to provide helpful responses.",
    "Need assistance? I'm here for you! Ask me questions, explore ideas, or just have a friendly conversation.",
  ],
  thanks: [
    "You're very welcome! Is there anything else I can help you with?",
    "Happy to help! Feel free to ask if you have more questions.",
    "My pleasure! Let me know if there's anything else you'd like to discuss.",
  ],
  bye: [
    "Goodbye! It was great chatting with you. Come back anytime!",
    "See you later! Feel free to return whenever you'd like to chat.",
    "Take care! I'll be here whenever you need me.",
  ],
};

export function generateBotReply(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  // Check for greetings
  if (
    lowerMessage.includes('hello') ||
    lowerMessage.includes('hi') ||
    lowerMessage.includes('hey')
  ) {
    return topicResponses.hello[Math.floor(Math.random() * topicResponses.hello.length)];
  }

  // Check for help requests
  if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
    return topicResponses.help[Math.floor(Math.random() * topicResponses.help.length)];
  }

  // Check for thanks
  if (
    lowerMessage.includes('thank') ||
    lowerMessage.includes('thanks') ||
    lowerMessage.includes('appreciate')
  ) {
    return topicResponses.thanks[Math.floor(Math.random() * topicResponses.thanks.length)];
  }

  // Check for goodbye
  if (
    lowerMessage.includes('bye') ||
    lowerMessage.includes('goodbye') ||
    lowerMessage.includes('see you')
  ) {
    return topicResponses.bye[Math.floor(Math.random() * topicResponses.bye.length)];
  }

  // Default response with context
  const baseResponse = responses[Math.floor(Math.random() * responses.length)];
  const contextualAddition = `Regarding "${userMessage.slice(0, 50)}${
    userMessage.length > 50 ? '...' : ''
  }", I think it's a fascinating topic that deserves thoughtful consideration. While I'm a demo chatbot and my responses are limited, I'm here to engage in meaningful conversation with you.`;

  return `${baseResponse} ${contextualAddition}`;
}
