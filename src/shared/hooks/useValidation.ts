import { useState } from "react";

export const useValidation = (initialValue: string, validate: (value: string) => string) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string>(""); // 초기에는 빈 문자열
  const [isValid, setIsValid] = useState(true); // 기본값 true

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // 유효성 검사 즉시 실행
    const errorMessage = validate(inputValue);
    setError(errorMessage);
    setIsValid(!errorMessage);
  };

  const validateValue = () => {
    const errorMessage = validate(value);
    setError(errorMessage);
    const valid = !errorMessage;
    setIsValid(valid);
    return valid;
  };

  return {
    value,
    error,
    isValid,
    handleChange,
    validateValue,
  };
};
