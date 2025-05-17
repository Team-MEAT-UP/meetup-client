import api from "@/shared/api/api";
import { StartPointResponse } from "../model";

interface SearchStartPointParams {
  textQuery: string;
}

export const searchStartPoints = async (params: SearchStartPointParams): Promise<StartPointResponse> => {
  const response = await api.get<StartPointResponse>("/start-points/search", {
    params: { textQuery: params.textQuery },
  });
  return response.data;
};
