import { useEffect, useRef } from "react";

const SPHERE_CONFIG = [
  {
    className: "sphere-gold",
    xRatio: 0.095,
    yRatio: 0.095,
    vx: 1.2,
    vy: 1,
    rRatio: 0.143,
  },
  {
    className: "sphere-wine",
    xRatio: 0.619,
    yRatio: 0.619,
    vx: -1,
    vy: 1.1,
    rRatio: 0.131,
  },
  {
    className: "sphere-rose",
    xRatio: 0.619,
    yRatio: 0.19,
    vx: 1,
    vy: -1.2,
    rRatio: 0.095,
  },
];

function Spheres() {
  const containerRef = useRef(null);
  const spheresRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    // Empurra o container INTEIRO pra baixo do header (não mexe na área interna de movimento)
    function applyHeaderOffset() {
      const header = document.querySelector("header");
      if (header) {
        container.style.marginTop = `${header.offsetHeight}px`;
      }
    }
    applyHeaderOffset();
    window.addEventListener("resize", applyHeaderOffset);

    const spheres = SPHERE_CONFIG.map((cfg) => ({
      el: null,
      x: width * cfg.xRatio,
      y: height * cfg.yRatio,
      vx: cfg.vx,
      vy: cfg.vy,
      r: width * cfg.rRatio,
    }));

    spheresRef.current.forEach((el, i) => {
      spheres[i].el = el;
    });

    function applySizes() {
      spheres.forEach((s) => {
        if (s.el) {
          const size = s.r * 2;
          s.el.style.width = `${size}px`;
          s.el.style.height = `${size}px`;
        }
      });
    }

    applySizes();

    let rafId;

    function animate() {
      const w = container.offsetWidth;
      const h = container.offsetHeight;

      const margin = w * 0.095; // margem uniforme, igual em todos os lados

      spheres.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x <= margin) {
          s.x = margin;
          s.vx *= -1;
        }

        if (s.x >= w - s.r * 2 - margin) {
          s.x = w - s.r * 2 - margin;
          s.vx *= -1;
        }

        if (s.y <= margin) {
          s.y = margin;
          s.vy *= -1;
        }

        if (s.y >= h - s.r * 2 - margin) {
          s.y = h - s.r * 2 - margin;
          s.vy *= -1;
        }
      });

      for (let i = 0; i < spheres.length; i++) {
        for (let j = i + 1; j < spheres.length; j++) {
          const a = spheres[i];
          const b = spheres[j];

          const dx = a.x + a.r - (b.x + b.r);
          const dy = a.y + a.r - (b.y + b.r);

          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.r + b.r;

          if (dist < minDist) {
            const angle = Math.atan2(dy, dx);
            const overlap = minDist - dist;

            a.x += (Math.cos(angle) * overlap) / 2;
            a.y += (Math.sin(angle) * overlap) / 2;

            b.x -= (Math.cos(angle) * overlap) / 2;
            b.y -= (Math.sin(angle) * overlap) / 2;

            const force = 0.5;

            a.vx += (dx / dist) * force;
            a.vy += (dy / dist) * force;

            b.vx -= (dx / dist) * force;
            b.vy -= (dy / dist) * force;
          }
        }
      }

      spheres.forEach((s) => {
        if (s.el) {
          s.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
        }
      });

      rafId = requestAnimationFrame(animate);
    }

    const resizeObserver = new ResizeObserver(() => {
      const newWidth = container.offsetWidth;
      if (newWidth !== width) {
        width = newWidth;
        height = container.offsetHeight;
        spheres.forEach((s, i) => {
          s.r = width * SPHERE_CONFIG[i].rRatio;
        });
        applySizes();
      }
    });
    resizeObserver.observe(container);

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", applyHeaderOffset);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-[85vw] max-w-[320px] aspect-square
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
