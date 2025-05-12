import { useState } from 'react';

export const useCounter = (state: number) => {
  // FIXME: delete count
  const [count, setCount] = useState(state);

  const handleMinus = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));
  const handlePlus = () => setCount((prev) => (prev < 99 ? prev + 1 : prev));

  return { count, handleMinus, handlePlus };
};
