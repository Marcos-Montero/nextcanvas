import { Canvas } from './components/canvas';

export default function CanvasPage() {
  return (
    <div className="width-full flex flex-col justify-center items-center">
      <h1 className="text-[120px] font-extrabold text-shadow-[0_0_20px_rgba(0,0,0,0.2)]">
        Canvas
      </h1>
      <Canvas />
    </div>
  );
}
