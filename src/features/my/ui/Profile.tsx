import { useUserStore } from "@/shared/stores";
import { useState } from "react";
import Edit from "@/assets/icon/edit.svg";
import DefaultImg from "@/assets/icon/default-profile.svg";

//@TODO 백 연동 시 이름, 프로필사진, 이메일 수정
export const Profile = () => {
  const { nickname, profileImageUrl, email, setNickname } = useUserStore();
  const [isEditting, setIsEditting] = useState(false);

  const handleEditting = () => {
    setIsEditting(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setIsEditting(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditting(false);
    }
  };

  return (
    <div className="flex py-3 gap-3 items-center w-full">
      <img src={profileImageUrl || DefaultImg} alt="profileImg" className="w-16 h-16 rounded-full" />
      <div className="flex flex-col gap-1 w-full">
        {isEditting ? (
          <div className="flex w-full gap-2 items-end">
            <input
              type="text"
              className="rounded-none w-full border-b-gray-90 border-b outline-none text-lg font-semibold text-gray-90"
              value={nickname || ""}
              onChange={e => setNickname(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button
              className="w-[41px] h-6 px-2 py-[1px] flex justify-center whitespace-nowrap items-center rounded-lg sub-10 bg-sub-10 text-sub-sub text-sm font-semibold"
              onClick={() => setIsEditting(false)}>
              변경
            </button>
          </div>
        ) : (
          <div className="flex gap-1 items-center">
            <span className="text-lg font-semibold text-gray-90">{nickname}</span>
            <button onClick={handleEditting}>
              <img src={Edit} alt="edit" className="w-5 h-5" />
            </button>
          </div>
        )}
        <p className="text-sm font-medium text-gray-40">{email}</p>
      </div>
    </div>
  );
};
