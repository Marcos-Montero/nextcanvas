export const getRandomColor = () => {
  const colors = [
    "#f94144",
    "#f3722c",
    "#f8961e",
    "#f9844a",
    "#f9c74f",
    "#90be6d",
    "#43aa8b",
    "#4d908e",
    "#577590",
    "#277da1",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
export const getRandomSize = () => Math.floor(Math.random() * 1000);

export const squareMultiColorPattern = (ctx: CanvasRenderingContext2D) => {
  ctx.lineWidth = 5;
  ctx.strokeStyle = getRandomColor();
  const size = getRandomSize();
  Array.from({ length: 50 }).forEach((_, i) => {
    ctx?.strokeRect(size * i, size * i, size, size);
  });
};
