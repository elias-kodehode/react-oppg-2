import { useEffect, useRef } from "react";
export default function CookieCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef  = useRef<CanvasRenderingContext2D>(null);


    useEffect( () => {
        let animationFrameId: number;
        const canvas = canvasRef.current!;

        const ctx = canvas!.getContext("2d");
        const image = new Image(100, 100);
        image.src = "cookie-1.png";
        
        contextRef.current = ctx;


        const render = () => {
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
            ctx?.save();

            ctx?.drawImage(image, 200, 200);

            ctx?.restore();
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, 
    []);


  return (
    <canvas id="canvas" ref={canvasRef}></canvas>
  );
}