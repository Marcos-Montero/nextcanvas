import React, { ChangeEvent } from "react";

import { FaCircle, FaPencilAlt } from "react-icons/fa";

import { useCanvasContext } from "@/app/context";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toggle } from "@/components/ui/toggle";

export const Toolbar = () => {
  const { fillColor, setFillColor, togglePencil, lineWidth, setLineWidth } =
    useCanvasContext();
  return (
    <div className="fixed left-0 mt-auto  bg-slate-700 flex flex-col gap-4 p-4 rounded-r-xl shadow-[2px_2px_20px_rgba(0,0,0,.5)]">
      <Toggle
        className="text-white h-6 w-6 overflow-visible p-1"
        onClick={togglePencil}
      >
        <FaPencilAlt className="h-4 w-4 p-0 m-0" />
      </Toggle>
      <Popover>
        <PopoverTrigger>
          <FaCircle className="h-6 w-6 overflow-visible p-1" />
        </PopoverTrigger>
        <PopoverContent className="flex gap-2 w-auto ml-12 border-none mt-[-40px] bg-slate-700 text-white">
          <input
            type="range"
            defaultValue="10"
            min="1"
            max="1000"
            step="1"
            value={lineWidth}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLineWidth(e.target.valueAsNumber)
            }
          />
          <h3>{lineWidth}</h3>
        </PopoverContent>
      </Popover>
      <input
        type="color"
        className="h-6 w-6 border-none outline-none"
        value={fillColor}
        onChange={(e) => setFillColor(e.target.value)}
      />
      {/*       <button className="bg-white h-4 w-4"></button>
      <button className="border-2 border-white h-4 w-4"></button> */}
    </div>
  );
};
