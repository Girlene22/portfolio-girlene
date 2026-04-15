import { useEffect, useRef } from "react";

function Spheres() {
  const containerRef = useRef(null);
  const spheresRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    const spheres = [
      { el: null, x: 40, y: 40, vx: 1.2, vy: 1, r: 60 },   // gold
      { el: null, x: 260, y: 260, vx: -1, vy: 1.1, r: 55 }, // wine
      { el: null, x: 260, y: 80, vx: 1, vy: -1.2, r: 40 },  // rose
    ];

    spheresRef.current.forEach((el, i) => {
      spheres[i].el = el;
    });

    function animate() {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      const margin = 40; // reduz área de movimento

      // movimento + borda
      spheres.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        // eixo X
        if (s.x <= margin) {
          s.x = margin;
          s.vx *= -1;
        }

        if (s.x >= width - s.r * 2 - margin) {
          s.x = width - s.r * 2 - margin;
          s.vx *= -1;
        }

        // eixo Y
        if (s.y <= margin) {
          s.y = margin;
          s.vy *= -1;
        }

        if (s.y >= height - s.r * 2 - margin) {
          s.y = height - s.r * 2 - margin;
          s.vy *= -1;
        }
      });

      // colisão entre esferas
      for (let i = 0; i < spheres.length; i++) {
        for (let j = i + 1; j < spheres.length; j++) {
          const a = spheres[i];
          const b = spheres[j];

          const dx = (a.x + a.r) - (b.x + b.r);
          const dy = (a.y + a.r) - (b.y + b.r);

          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.r + b.r;

          if (dist < minDist) {
            const angle = Math.atan2(dy, dx);

            // separação
            const overlap = minDist - dist;

            a.x += Math.cos(angle) * overlap / 2;
            a.y += Math.sin(angle) * overlap / 2;

            b.x -= Math.cos(angle) * overlap / 2;
            b.y -= Math.sin(angle) * overlap / 2;

            // impulso (colisão mais natural)
            const force = 0.5;

            a.vx += (dx / dist) * force;
            a.vy += (dy / dist) * force;

            b.vx -= (dx / dist) * force;
            b.vy -= (dy / dist) * force;
          }
        }
      }

      // render
      spheres.forEach((s) => {
        if (s.el) {
          s.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-[420px] h-[420px]
        md:w-[500px] md:h-[500px]
        perspective
        overflow-hidden
      "
    >
      <div
        ref={(el) => (spheresRef.current[0] = el)}
        className="sphere sphere-gold"
      />

      <div
        ref={(el) => (spheresRef.current[1] = el)}
        className="sphere sphere-wine"
      />

      <div
        ref={(el) => (spheresRef.current[2] = el)}
        className="sphere sphere-rose"
      />
    </div>
  );
}

export default Spheres;