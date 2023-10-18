import React, { createContext, useContext, useEffect, useState } from "react";

import { useCanvas } from "./canvas/hooks";

type CanvasContextType = {
  fillColor: string;
  setFillColor: (color: string) => void;
  pencil: boolean;
  togglePencil: () => void;
  ctx?: CanvasRenderingContext2D | null;
  cRef?: React.RefObject<HTMLCanvasElement>;
  c?: HTMLCanvasElement | null;
  lineWidth: number;
  setLineWidth: (width: number) => void;
};

const CanvasContext = createContext<CanvasContextType>({
  fillColor: "#000",
  setFillColor: () => {},
  pencil: false,
  togglePencil: () => {},
  lineWidth: 10,
  setLineWidth: () => {},
});

export const useCanvasContext = () => useContext(CanvasContext);

type CanvasProviderProps = {
  children: React.ReactNode;
};

export const CanvasProvider = ({ children }: CanvasProviderProps) => {
  const [fillColor, setFillColor] = useState("#ffffff");
  const [pencil, setPencil] = useState(false);
  const [lineWidth, setLineWidth] = useState(10);

  const { ctx, cRef, c } = useCanvas();
  const togglePencil = () => {
    console.log(!pencil);
    setPencil((v) => !v);
  };
  useEffect(() => {
    if (!ctx) return;
    ctx.lineWidth = lineWidth;
  }, [lineWidth]);
  return (
    <CanvasContext.Provider
      value={{
        fillColor,
        setFillColor,
        pencil,
        togglePencil,
        ctx,
        cRef,
        c,
        lineWidth,
        setLineWidth,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};
