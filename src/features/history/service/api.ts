import api from "@/shared/api/api";

export const getUserInfo = async () => {
  try {
    const response = await api.get("/users");
    if (response.data.result === "SUCCESS") {
      return response.data.data;
    } else {
      console.error("유저 정보 조회 실패 : ", response.data.error.message);
      throw new Error(response.data.error.message);
    }
  } catch (error) {
    console.error("서버 에러 : ", error);
  }
};

export const storeUserAgreement = async ({
  isPersonalInfoAgreement,
  isMarketingAgreement,
}: {
  isPersonalInfoAgreement: boolean;
  isMarketingAgreement: boolean;
}) => {
  try {
    const response = await api.post("/users/agreement", {
      isPersonalInfoAgreement,
      isMarketingAgreement,
    });

    if (response.data.result === "SUCCESS") {
      return true;
    } else {
      console.error("약관 정보 동의 실패 : ", response.data.error.message);
      throw new Error(response.data.error.message);
    }
  } catch (error) {
    console.error("서버 에러 : ", error);
  }
};
