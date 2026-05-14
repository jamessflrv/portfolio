(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-bg';
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');

  const CONFIG = {
    particleCount: 80,
    particleColor: '0, 255, 255',  
    lineColor: '0, 255, 255',
    particleOpacity: 0.55,
    lineOpacity: 0.12,
    maxDistance: 140,
    minSpeed: 0.15,
    maxSpeed: 0.45,
    minRadius: 1.5,
    maxRadius: 3,
  };

  let particles = [];
  let W, H, animId;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticle() {
    return {
      x:  rand(0, W),
      y:  rand(0, H),
      vx: rand(-1, 1) * rand(CONFIG.minSpeed, CONFIG.maxSpeed),
      vy: rand(-1, 1) * rand(CONFIG.minSpeed, CONFIG.maxSpeed),
      r:  rand(CONFIG.minRadius, CONFIG.maxRadius),
    };
  }

  function init() {
    particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(createParticle());
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.maxDistance) {
          const alpha = CONFIG.lineOpacity * (1 - dist / CONFIG.maxDistance);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${CONFIG.lineColor}, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

   
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CONFIG.particleColor}, ${CONFIG.particleOpacity})`;
      ctx.fill();
    }
  }

  function update() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
  }

  function loop() {
    update();
    draw();
    animId = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', function () {
    resize();
    init();
  });

  resize();
  init();
  loop();
})();