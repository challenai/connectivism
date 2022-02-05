import React, { useRef, useEffect } from "react";

const Canvas = ({ curves }) => {
  const canvasRef = useRef(null);

  const drawCurve = (ctx, curve) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(curve.startX, curve.startY);
    ctx.lineTo(curve.endX, curve.endY);
    ctx.strokeStyle = "#FFB020";
    ctx.lineWidth = 1;
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    for (const c of curves) {
      drawCurve(context, c);
    }
  }, [curves]);

  return <canvas width="2560" height="1600" ref={canvasRef} />;
};

export default Canvas;
