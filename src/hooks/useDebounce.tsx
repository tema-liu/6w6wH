import { useEffect, useRef } from "react";

function useDebounce(value: boolean, delay: number, callback: () => void) {
  const initialValue = useRef(value); // 儲存初始值
  const timeoutRef = useRef<number | null>(null); // 定時器引用

  useEffect(() => {
    // 清理舊的定時器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 設置新的定時器
    timeoutRef.current = setTimeout(() => {
      // 比較初始值與當前值
      if (initialValue.current !== value) {
        callback(); // 如果不同，執行回調
      }
    }, delay);

    return () => {
      // 清理定時器
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay, callback]); // 監聽 value 的變化
}

export default useDebounce;
