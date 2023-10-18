"use client";
import { useEffect, useState } from "react";

import { useCanvasContext } from "@/app/context";

import { squareMultiColorPattern } from "../utils";
import { ModeSelector } from "./mode-selector";
import { Toolbar } from "./toolbar";

export const Modes = ["blank", "squareMultiColorPattern"] as const;
export type TModes = (typeof Modes)[number];

export const Canvas = ({ mode }: { mode?: TModes }) => {
  const [canvasMode, setCanvasMode] = useState<TModes | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [mDown, setMDown] = useState(false);

  const { cRef, ctx, c, fillColor, pencil } = useCanvasContext();

  const toggleActive = () => {
    setIsActive((v) => !v);
  };
  useEffect(() => {
    if (!ctx) return;
    let inter: any;
    ctx.resetTransform();
    if (canvasMode === "blank") {
      clearInterval(inter);
      setIsActive(false);
      ctx?.clearRect(0, 0, 800, 800);
    }
    if (isActive && canvasMode === "squareMultiColorPattern") {
      inter = setInterval(() => {
        squareMultiColorPattern(ctx);
      }, 30);
    }
    return () => clearInterval(inter);
  }, [canvasMode, ctx, isActive]);

  const draw = (x: number, y: number) => {
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(initialX, initialY);
    ctx.strokeStyle = fillColor;
    ctx.lineTo(x, y);
    ctx.stroke();
    setInitialX(x);
    setInitialY(y);
  };
  const mouseDown = (e: any) => {
    if (!c) return;
    setInitialX(e.clientX - c?.offsetLeft);
    setInitialY(e.clientY - c?.offsetTop);
    setMDown(true);
  };
  const mouseUp = () => {
    if (!ctx) return;
    setMDown(false);
    ctx.closePath();
  };

  const mouseMoving = (e: any) => {
    if (!c || !pencil || !mDown) return;
    draw(e.clientX - c.offsetLeft, e.clientY - c.offsetTop);
  };
  useEffect(() => {
    if (!ctx) return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, [ctx]);

  return (
    <>
      <Toolbar />
      <canvas
        ref={cRef}
        id="canvas"
        width="800"
        height="800"
        onMouseDown={mouseDown}
        onMouseMove={mouseMoving}
        onMouseUp={mouseUp}
        className="rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.2)]"
      ></canvas>
      <ModeSelector
        currentMode={canvasMode}
        onModeChange={(mode) => {
          setCanvasMode(mode);
        }}
        onActiveChange={toggleActive}
      />
      <h1>
        {isActive ? "active" : "stopped"} - {canvasMode}
      </h1>
    </>
  );
};
