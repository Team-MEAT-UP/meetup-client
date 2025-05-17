import api from "@/shared/api/api";
import { GetEventRouteResponse } from "@/shared/model";

export const getEventInfo = async (eventId: string, startPointId?: string) => {
  try {
    const response = await api.get<{
      result: string;
      data: GetEventRouteResponse;
      error?: {
        code: string;
        message: string;
      };
    }>(`/events/${eventId}`, {
      params: startPointId ? { startPointId } : {},
    });

    return response.data.data;
  } catch (error) {
    console.error("모임 경로 조회 실패:", error);
    throw error;
  }
};

export const patchEvent = async (eventId: string, startPointId: string, isTransit: boolean) => {
  try {
    const response = await api.patch(`/events/${eventId}`, null, {
      params: {
        startPointId,
        isTransit,
      },
    });

    if (response.data.result === "SUCCESS") {
      return true;
    } else {
      console.error(":", response.data.error.message);
      throw new Error(response.data.error.message);
    }
  } catch (error) {
    console.error("대중교통 변경 실패:", error);
    throw error;
  }
};
