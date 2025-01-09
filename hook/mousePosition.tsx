import { useRef, useEffect } from "react";

export const useMousePositionRef = (
  containerRef?: React.RefObject<HTMLElement | SVGElement>
) => {
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePositionRef.current = {
          x: x - rect.left,
          y: y - rect.top,
        };
      } else {
        mousePositionRef.current = { x, y };
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      updatePosition(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return mousePositionRef;
};
