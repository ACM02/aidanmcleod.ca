import { useEffect, useRef, useState } from "react";

function GravitySandbox({ isDark }) {
  const canvasRef = useRef(null);
  const bodiesRef = useRef([]);
  const [isRunning, setIsRunning] = useState(false);


  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    bodyToAdd: null
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const G = 0.5;

    const handleMouseDown = (e) => {
      e.preventDefault();
      if (dragRef.current.isDragging) {
        handleMouseUp(e);
      } else {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log("Mousedown at", x, y);
        dragRef.current.isDragging = true;
        dragRef.current.startX = x;
        dragRef.current.startY = y;

        dragRef.current.bodyToAdd = {
          x, y,
          vx: 0, vy: 0,
          mass: Math.random() * 20 + 10,
          radius: Math.random() * 8 + 4,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
          trail: []
        };
      }
    };

    const handleMouseMove = (e) => {
      if (!dragRef.current.isDragging) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      dragRef.current.offsetX = x - dragRef.current.startX;
      dragRef.current.offsetY = y - dragRef.current.startY;
    }

    const handleMouseUp = (e) => {

      if (!dragRef.current.isDragging) {
        return;
      }

      if (dragRef.current.bodyToAdd) {
        // Set initial velocity based on drag distance
        dragRef.current.bodyToAdd.vx = dragRef.current.offsetX * -0.005;
        dragRef.current.bodyToAdd.vy = dragRef.current.offsetY * -0.005;
        bodiesRef.current.push(dragRef.current.bodyToAdd);
        dragRef.current.bodyToAdd = null;
      }
      dragRef.current.isDragging = false;
      dragRef.current.offsetX = 0;
      dragRef.current.offsetY = 0;
    }

    canvas.addEventListener('pointerdown', handleMouseDown);
    canvas.addEventListener('pointermove', handleMouseMove);
    canvas.addEventListener('pointerup', handleMouseUp);

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (dragRef.current.bodyToAdd) {
        // Draw line for velocity indication
        ctx.strokeStyle = '#cbd5e19d';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(dragRef.current.bodyToAdd.x, dragRef.current.bodyToAdd.y);
        ctx.lineTo(dragRef.current.bodyToAdd.x + dragRef.current.offsetX, dragRef.current.bodyToAdd.y + dragRef.current.offsetY);
        ctx.stroke();


        ctx.beginPath();
        ctx.arc(dragRef.current.bodyToAdd.x, dragRef.current.bodyToAdd.y, dragRef.current.bodyToAdd.radius, 0, Math.PI * 2);
        ctx.fillStyle = dragRef.current.bodyToAdd.color;
        ctx.fill();
      }

      if (isRunning && bodiesRef.current.length > 0) {
        // Calculate forces and update positions
        for (let i = 0; i < bodiesRef.current.length; i++) {
          const body1 = bodiesRef.current[i];

          for (let j = i + 1; j < bodiesRef.current.length; j++) {
            const body2 = bodiesRef.current[j];

            const dx = body2.x - body1.x;
            const dy = body2.y - body1.y;
            const distSq = dx * dx + dy * dy;
            const dist = Math.sqrt(distSq);

            if (dist > 5) {
              const force = (G * body1.mass * body2.mass) / distSq;
              const fx = (force * dx) / dist;
              const fy = (force * dy) / dist;

              body1.vx += fx / body1.mass;
              body1.vy += fy / body1.mass;
              body2.vx -= fx / body2.mass;
              body2.vy -= fy / body2.mass;
            }
          }
        }

        // Update positions and draw
        bodiesRef.current.forEach(body => {
          body.x += body.vx;
          body.y += body.vy;

          // Bounce off walls
          if (body.x < body.radius || body.x > canvas.width - body.radius) {
            body.vx *= -0.8;
            body.x = Math.max(body.radius, Math.min(canvas.width - body.radius, body.x));
          }
          if (body.y < body.radius || body.y > canvas.height - body.radius) {
            body.vy *= -0.8;
            body.y = Math.max(body.radius, Math.min(canvas.height - body.radius, body.y));
          }

          // Trail
          body.trail.push({ x: body.x, y: body.y });
          if (body.trail.length > 50) body.trail.shift();

          ctx.strokeStyle = body.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          body.trail.forEach((point, i) => {
            if (i === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          });
          ctx.stroke();
          ctx.globalAlpha = 1;

          // Draw body
          ctx.beginPath();
          ctx.arc(body.x, body.y, body.radius, 0, Math.PI * 2);
          ctx.fillStyle = body.color;
          ctx.fill();
          ctx.strokeStyle = isDark ? '#1e293b' : '#cbd5e1';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      } else {
        // Just draw static bodies
        bodiesRef.current.forEach(body => {
          ctx.beginPath();
          ctx.arc(body.x, body.y, body.radius, 0, Math.PI * 2);
          ctx.fillStyle = body.color;
          ctx.fill();
          ctx.strokeStyle = isDark ? '#1e293b' : '#cbd5e1';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      canvas.removeEventListener('pointerdown', handleMouseDown);
      canvas.removeEventListener('pointermove', handleMouseMove);
      canvas.removeEventListener('pointerup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, [isRunning, isDark]);

  const handleClear = () => {
    bodiesRef.current = [];
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${isDark
            ? 'bg-purple-600 hover:bg-purple-700 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={handleClear}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${isDark
            ? 'bg-slate-700 hover:bg-slate-600 text-white'
            : 'bg-slate-300 hover:bg-slate-400 text-slate-800'
            }`}
        >
          Clear
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className={`w-full rounded-xl border-2 cursor-crosshair ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-300'
          }`}
        style={{ height: '400px' }}
      />

    </div>
  );
}

export default GravitySandbox;