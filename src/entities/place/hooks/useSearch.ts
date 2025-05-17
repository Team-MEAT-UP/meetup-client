import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/shared/hooks";
import { StartPointResponse, StartPoint } from "@/entities/place/model";
import { searchStartPoints } from "@/entities/place/api";

interface UseSearchResult {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  searchResults: StartPoint[];
  isError: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isTyping: boolean;
}

export const useSearch = (): UseSearchResult => {
  const [value, setValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedValue = useDebounce(value, 500);

  const { data: searchResults = [], isError } = useQuery<StartPointResponse, Error, StartPoint[]>({
    queryKey: ["searchStartPoints", debouncedValue],
    queryFn: () => searchStartPoints({ textQuery: debouncedValue.trim() }),
    select: response =>
      response.data.documents.map(doc => ({
        id: doc.id,
        name: doc.place_name,
        address: doc.address_name,
        roadAddress: doc.road_address_name,
        latitude: parseFloat(doc.y),
        longitude: parseFloat(doc.x),
      })),
    enabled: isSearching && debouncedValue.trim().length > 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsSearching(true);
  };

  const isTyping = isSearching && debouncedValue.trim().length > 0;

  return {
    value,
    setValue,
    isSearching,
    setIsSearching,
    searchResults,
    isError,
    handleChange,
    isTyping,
  };
};
