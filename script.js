
(function(){
  // ======== Fondo con corazones que caen ========
  const container = document.getElementById('hearts-container');
  const HEARTS = 100;
  function spawnHeart(){
    const el = document.createElement('div');
    el.className = 'heart';
    el.textContent = '❤';
    el.style.left = Math.random()*100 + 'vw';
    el.style.animationDuration = (6 + Math.random()*6) + 's';
    el.style.animationDelay = (Math.random()*4) + 's';
    container.appendChild(el);
    // limpiar tras la animación
    setTimeout(()=> el.remove(), 12000);
  }
  for(let i=0;i<HEARTS;i++){ spawnHeart(); }
  // seguir generando lentamente
  setInterval(spawnHeart, 800);

  // ======== Modal Sorpresa ========
  const btn = document.getElementById('btn-sorpresa');
  const modal = document.getElementById('modal');
  const close = document.getElementById('modal-close');
  const galeria = document.getElementById('galeria');
  const audio = document.getElementById('music');
  const btnMusica = document.getElementById('btn-musica');

  // Inyectar imágenes (reemplazá assets/photos/1.jpg ... 6.jpg con tus fotos)
  const fotos = [1,2,3,4,5,6].map(n => `assets/photos/${n}.jpg`);
  fotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Nuestros momentos";
    galeria.appendChild(img);
  });

  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  });
  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    if(!audio.paused){ audio.pause(); }
  });

  // Reproducir música (requiere interacción del usuario por políticas del navegador)
  btnMusica.addEventListener('click', async () => {
    try { await audio.play(); btnMusica.textContent = '⏸️ Pausar música'; }
    catch(e){ alert('Agregá tu canción en assets/musica.mp3 para escucharla.'); }
  });
  btnMusica.addEventListener('click', () => {
    if(!audio.src) return;
    if(audio.paused){ audio.play(); btnMusica.textContent = '⏸️ Pausar música'; }
    else { audio.pause(); btnMusica.textContent = '▶️ Reproducir música'; }
  });
})();
