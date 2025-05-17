import { useMutation } from "@tanstack/react-query";
import { logout } from "../service";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/");
      localStorage.removeItem("user-storage");
    },
    onError: error => {
      console.error("로그아웃 실패: ", error);
    },
  });
};
