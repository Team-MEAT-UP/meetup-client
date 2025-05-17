import { useMutation } from "@tanstack/react-query";
import { storeUserAgreement } from "../service";

export const useStoreAgreement = () => {
  return useMutation({
    mutationFn: storeUserAgreement,
    onError: error => {
      console.error("약관 동의 저장 실패: ", error);
    },
  });
};
