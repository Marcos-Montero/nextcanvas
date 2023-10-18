"use client";
import React from "react";

import { Button } from "@/components/ui/button";

import { Modes, TModes } from "./canvas";

export const ModeSelector = ({
  currentMode,
  onModeChange,
  onActiveChange,
}: {
  currentMode: TModes | null;
  onModeChange: (mode: TModes | null) => void;
  onActiveChange: () => void;
}) => {
  return (
    <div className="  m-4 rounded-xl shadow-[0_0_8px_rgb(0,0,0,.2)] flex flex-col items-center p-4 gap-4">
      <div className="p-4 gap-4 flex">
        <Button
          onClick={() => {
            onActiveChange();
            currentMode !== Modes[0] && onModeChange(Modes[0]);
          }}
        >
          Blank
        </Button>
        <Button
          onClick={() => {
            onActiveChange();
            currentMode !== Modes[1] && onModeChange(Modes[1]);
          }}
        >
          SquaresFlow
        </Button>
      </div>
    </div>
  );
};
