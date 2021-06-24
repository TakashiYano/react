import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((array) => {
      if (array.some((item) => item === text)) {
        alert("同じ要素が既に存在します。");
        return array;
      }
      return [...array, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
