export const getRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
};
export const getRandomSize = () => Math.floor(Math.random() * 250);
const repeat = (n: number) => (fn: (x: any, i: number) => void) => {
  Array.from({ length: n }).forEach(fn);
};
export const squareMultiColorPattern = (ctx: CanvasRenderingContext2D) => {
  ctx.lineWidth = 5;
  const size = getRandomSize();

  repeat(50)((_, i) => {
    ctx.strokeStyle = getRandomColor();
    ctx.fillStyle = getRandomColor();
    ctx.rotate(Math.floor(Math.random() * 360));
    ctx?.strokeRect(getRandomSize() * i, getRandomSize() * i, size, size);
  });
};
