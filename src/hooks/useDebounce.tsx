import { useEffect, useRef } from "react";

function useDebounce(value: boolean, delay: number, callback: () => void) {
  const prevValueRef = useRef(value); // 追蹤前一個值
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // 清理舊的定時器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 如果值發生變化，設置新的定時器
    if (prevValueRef.current !== value) {
      timeoutRef.current = setTimeout(() => {
        callback(); // 執行回調
        prevValueRef.current = value; // 更新前一個值
      }, delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay, callback]);
}

export default useDebounce;
