import { useRef, useEffect, ReactNode } from "react";

interface OutsideAlerterProps {
  children: ReactNode;
  onOutsideClick: () => void;
}

function OutsideAlerter({
  children,
  onOutsideClick,
}: OutsideAlerterProps): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as HTMLElement)
      ) {
        onOutsideClick(); // 呼叫外部傳入的回調函數
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideAlerter;
