import { create } from "zustand";

interface UserState {
  nickname: string | null;
  profileImageUrl: string | null;
  email: string | null;
  setNickname: (nickname: string) => void;
  setProfileImgUrl: (url: string) => void;
  setEmail: (email: string) => void;
}

export const useUserStore = create<UserState>(set => ({
  nickname: null,
  profileImageUrl: null,
  email: null,
  setNickname: nickname => set({ nickname }),
  setProfileImgUrl: url => set({ profileImageUrl: url }),
  setEmail: email => set({ email }),
}));
