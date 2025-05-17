import api from "@/shared/api/api";

export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    if (response.data.result === "SUCCESS") {
      return true;
    } else {
      console.error("서버 에러 발생", response.data.error.message);
      throw new Error(response.data.error.message);
    }
  } catch (error) {
    console.error("서버 에러 : ", error);
  }
};
