import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../service";

interface UserInfo {
  userId: number;
  nickname: string;
  email: string;
  profileImageUrl: string;
  personalInfoAgreement: boolean;
  marketingAgreement: boolean;
}

export const useUserInfo = () => {
  return useQuery<UserInfo>({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    retry: 2, // 실패 시 최대 두 번 재시도
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 캐시 유지
  });
};
