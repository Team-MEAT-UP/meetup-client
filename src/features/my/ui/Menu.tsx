import Arrow from "@/assets/icon/rightArrow.svg";

const menuItems = [
  {
    label: "이용약관 및 개인정보처리방침",
    hasArrow: true,
    onClick: () => {
      console.log("이용약관 클릭");
    },
  },
  {
    label: "의견 남기기",
    hasArrow: true,
    onClick: () => {
      console.log("의견 남기기 클릭");
    },
  },
  {
    label: "탈퇴하기",
    hasArrow: false,
    onClick: () => {
      console.log("탈퇴하기 클릭");
    },
  },
];

export const Menu = () => {
  return (
    <div className="flex flex-col py-3 px-5">
      {menuItems.map((item, idx) => (
        <button
          key={idx}
          onClick={item.onClick}
          className={`flex py-3 justify-between text-md font-medium text-left w-full ${
            item.hasArrow ? "text-gray-60" : "text-gray-30"
          }`}>
          {item.label}
          {item.hasArrow && <img src={Arrow} alt="arrow" className="w-4 h-4" />}
        </button>
      ))}
    </div>
  );
};
