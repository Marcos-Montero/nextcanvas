"use client";
import {
  useEffect,
  useState,
} from 'react';

import { useCanvas } from '../hooks';
import { squareMultiColorPattern } from '../utils';
import { ModeSelector } from './mode-selector';

export const Modes = ["blank", "squareMultiColorPattern"] as const;
export type TModes = (typeof Modes)[number];

export const Canvas = ({ mode }: { mode?: TModes }) => {
  const [canvasMode, setCanvasMode] = useState<TModes | null>(null);
  const [isActive, setIsActive] = useState(false);

  const { cRef, c, ctx } = useCanvas();

  const toggleActive = () => {
    setIsActive((v) => !v);
  };
  useEffect(() => {
    let inter: any;
    if (canvasMode === "blank") {
      clearInterval(inter);
      setIsActive(false);
      ctx?.clearRect(0, 0, 800, 800);
    }
    if (isActive && ctx) {
      if (canvasMode === "squareMultiColorPattern") {
        inter = setInterval(() => {
          squareMultiColorPattern(ctx);
        }, 200);
      }
    }
    return () => clearInterval(inter);
  }, [isActive, canvasMode, ctx]);

  return (
    <>
      <h1>{canvasMode}</h1>
      <canvas
        ref={cRef}
        id="canvas"
        width="800"
        height="800"
        className="rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.2)]"
      ></canvas>
      <ModeSelector
        onModeChange={(mode) => {
          setCanvasMode(mode);
        }}
        onActiveChange={toggleActive}
        isActive={isActive}
      />
    </>
  );
};
