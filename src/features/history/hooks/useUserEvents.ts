import { useInfiniteQuery } from "@tanstack/react-query";
import { UserEvents } from "../model";
import { getUserEvents } from "../service";

export const useUserEvents = (enabled = true) => {
  return useInfiniteQuery<UserEvents>({
    queryKey: ["userEvents"],
    queryFn: ({ pageParam }) => getUserEvents({ pageParam: pageParam as string | undefined }),
    getNextPageParam: lastPage => (lastPage.hasNextPage ? lastPage.lastEventId : undefined),
    initialPageParam: undefined,
    enabled,
  });
};
