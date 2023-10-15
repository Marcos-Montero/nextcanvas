export default function Canvas() {
  return (
    <div className="width-full flex flex-col justify-center items-center">
      <h1 className="text-[120px] font-extrabold">Canvas</h1>
      <canvas
        id="canvas"
        width="800"
        height="800"
        className="border-2 border-black"
      ></canvas>
    </div>
  );
}
