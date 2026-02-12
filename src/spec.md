# Specification

## Summary
**Goal:** Build a polished KairoNova AI chatbot website with consistent premium branding (non-blue/purple primary theme), a public landing experience, a demo ChatGPT-like chat UI, and basic informational pages, backed by simple Motoko persistence.

**Planned changes:**
- Create a cohesive KairoNova visual theme (colors, typography, spacing, component styling) optimized for mobile and desktop, avoiding blue/purple as primary colors.
- Implement pages and navigation: Landing (KairoNova name, tagline, brief description, “Developed by Kairav”, CTA to chat), Chat, About (with attribution), and Privacy/Disclaimer (demo + not professional advice).
- Build a ChatGPT-like chat UI (message timeline, input, send button, typing/loading indicator) with a demo rules-based/canned bot reply flow (no external AI/LLM APIs).
- Add Motoko backend persistence in a single actor (backend/main.mo) to store and retrieve chat messages for a simple current user/device session model, exposed via canister methods and consumed in the frontend using the existing actor hook pattern.
- Use React Query for loading history and sending messages (queries/mutations) with clear loading and error UI states.
- Add basic SEO and accessibility: per-page titles including “KairoNova”, semantic headings, and keyboard-accessible chat input/submit.

**User-visible outcome:** Users can visit a branded KairoNova landing page, navigate to a demo chat experience that remembers conversation history on refresh, and read About and Privacy/Disclaimer pages; the chat UI feels ChatGPT-like, shows loading/typing, and handles errors visibly.
