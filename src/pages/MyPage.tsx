import { Logout, Menu, Profile } from "@/features/my/ui";
import { useUserStore } from "@/shared/stores";
import { PlainHeader } from "@/widgets/headers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const email = useUserStore(state => state.email);

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);

  return (
    <div className="flex flex-col h-screen-dvh">
      <div className="flex flex-col px-5">
        <PlainHeader title="내 정보" url="/history" />
        <div className="flex flex-col gap-2 mb-8">
          <Profile />
          <Logout />
        </div>
      </div>
      <div className="w-full h-2 bg-gray-5" />
      <Menu />
    </div>
  );
};

export default MyPage;
