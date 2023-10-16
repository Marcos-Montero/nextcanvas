import { useEffect, useRef, useState } from "react";

export const useCanvas = () => {
  const [c, setC] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const cRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    setC(cRef.current);
    if (!c) return;
    setCtx(c.getContext("2d"));
    if (!ctx) return;
  });

  return { cRef, c, ctx };
};
