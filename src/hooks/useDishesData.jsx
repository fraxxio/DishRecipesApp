import { useQuery } from "@tanstack/react-query";

export const useDishesData = (fetchFunction) => {
  return useQuery({ queryKey: ["dishes"], queryFn: fetchFunction });
};
