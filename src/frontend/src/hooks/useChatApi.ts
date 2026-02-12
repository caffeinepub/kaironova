import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Message } from '../backend';

export function useChatHistory(sessionId: bigint | null) {
  const { actor, isFetching } = useActor();

  return useQuery<Message[]>({
    queryKey: ['chat-history', sessionId?.toString()],
    queryFn: async () => {
      if (!actor || sessionId === null) return [];
      return actor.getMessages(sessionId);
    },
    enabled: !!actor && !isFetching && sessionId !== null,
  });
}

export function useSendMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ sessionId, content }: { sessionId: bigint; content: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.sendMessage(sessionId, content);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['chat-history', variables.sessionId.toString()],
      });
    },
  });
}
