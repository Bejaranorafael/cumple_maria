// script.js
(function () {
  // ======== Fondo con corazones (💖) que caen y laten ========
  const container = document.getElementById("hearts-container");
  const HEARTS = 600;

  function spawnHeart() {
    const el = document.createElement("div");
    el.className = "heart";
    el.textContent = "💖";

    // posición y tiempos aleatorios
    el.style.left = Math.random() * 100 + "vw";
    const fallDur = 6 + Math.random() * 6;      // 6s a 12s
    const delay = Math.random() * 4;            // 0s a 4s

    // combinación de animaciones: caída + pulso
    el.style.animation = `fall ${fallDur}s linear forwards ${delay}s, twinkle 1.6s ease-in-out infinite`;

    // brillo suave (opcional)
    el.style.textShadow = "0 0 8px rgba(255,77,136,.75), 0 0 18px rgba(255,77,136,.5)";

    container.appendChild(el);

    // limpiar tras la animación
    const ttl = (fallDur + delay + 2) * 1000; // margen extra
    setTimeout(() => el.remove(), ttl);
  }

  for (let i = 0; i < HEARTS; i++) spawnHeart();
  setInterval(spawnHeart, 800);

  // ======== Modal Sorpresa ========
  const btn = document.getElementById("btn-sorpresa");
  const modal = document.getElementById("modal");
  const close = document.getElementById("modal-close");
  const galeria = document.getElementById("galeria");
  const audio = document.getElementById("music");
  const btnMusica = document.getElementById("btn-musica");

  // Inyectar imágenes (reemplazá assets/photos/1.jpg ... 6.jpg con tus fotos)
  const fotos = [1, 2, 3, 4, 5, 6].map((n) => `assets/photos/${n}.jpg`);
  fotos.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Nuestros momentos";
    galeria.appendChild(img);
  });

  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    if (!audio.paused) audio.pause();
  });

  // Reproducir / Pausar música (un solo handler)
  btnMusica.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        btnMusica.textContent = "⏸️ Pausar música";
      } else {
        audio.pause();
        btnMusica.textContent = "▶️ Reproducir música";
      }
    } catch (e) {
      alert("Agregá tu canción en assets/musica.mp3 para escucharla.");
    }
  });
})();
