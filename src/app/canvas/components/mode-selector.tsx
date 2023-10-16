"use client";
import React from 'react';

import { Button } from '@/components/ui/button';

import {
  Modes,
  TModes,
} from './canvas';

export const ModeSelector = ({
  onModeChange,
  onActiveChange,
  isActive,
}: {
  onModeChange: (mode: TModes | null) => void;
  onActiveChange: () => void;
  isActive: boolean;
}) => {
  return (
    <div className="  m-4 rounded-xl shadow-[0_0_8px_rgb(0,0,0,.2)] flex flex-col items-center p-4 gap-4">
      <button onClick={onActiveChange} className="text-[30px]">
        {isActive ? "⏸️" : "▶️"}
      </button>
      <div className="p-4 gap-4 flex">
        <Button onClick={() => onModeChange(Modes[0])}>Blank</Button>
        <Button onClick={() => onModeChange(Modes[1])}>SquaresFlow</Button>
      </div>
    </div>
  );
};
