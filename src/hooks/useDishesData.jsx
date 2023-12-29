import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useDishesData = (fetchFunction, page) => {
  return useQuery({
    queryKey: ["dishes", page],
    queryFn: () => fetchFunction(page),
    casheTime: 11 * (60 * 1000),
    staleTime: 10 * (60 * 1000),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
