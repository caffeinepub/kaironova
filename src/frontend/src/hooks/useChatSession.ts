import { useEffect, useState } from 'react';
import { useActor } from './useActor';

const SESSION_STORAGE_KEY = 'kaironova_session_id';

export function useChatSession() {
  const [sessionId, setSessionId] = useState<bigint | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const { actor, isFetching } = useActor();

  useEffect(() => {
    async function initializeSession() {
      if (!actor || isFetching) return;

      try {
        const storedSessionId = localStorage.getItem(SESSION_STORAGE_KEY);

        if (storedSessionId) {
          setSessionId(BigInt(storedSessionId));
        } else {
          const newSessionId = await actor.startSession();
          localStorage.setItem(SESSION_STORAGE_KEY, newSessionId.toString());
          setSessionId(newSessionId);
        }
      } catch (error) {
        console.error('Failed to initialize session:', error);
      } finally {
        setIsInitializing(false);
      }
    }

    initializeSession();
  }, [actor, isFetching]);

  return { sessionId, isInitializing };
}
