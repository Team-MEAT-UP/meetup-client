export const validateName = (value: string): string => {
  if (value.trim() === "") {
    return "이름을 입력해 주세요.";
  } else if (value.length > 5) {
    return "5글자 이내로 작성해주세요.";
  }
  return "";
};
