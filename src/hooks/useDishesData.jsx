import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useDishesData = (fetchFunction, page, searchParams, qkey) => {
  return useQuery({
    queryKey: [qkey, page, searchParams],
    queryFn: () => fetchFunction(page, searchParams),
    casheTime: 11 * (60 * 1000),
    staleTime: 10 * (60 * 1000),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
