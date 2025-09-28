
// Script sorpresa en JavaScript (para abrir en un navegador con devtools o incrustar en una página)
(function(){
  const TARGET_DATE = '2025-09-29'; // Editá esta fecha
  function daysUntil(s){
    const [y,m,d] = s.split('-').map(Number);
    const target = new Date(y, m-1, d);
    const today = new Date();
    const ms = target - new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return Math.ceil(ms / (1000*60*60*24));
  }
  const d = daysUntil(TARGET_DATE);
  const poema = `
María, mi amor,
hoy celebro tu vida
y todo lo que somos.
Gracias por cada risa,
cada abrazo,
cada plan que soñamos juntos.
Te amo.
`;
  alert(`🎉 Faltan ${d} día(s) para tu cumple, María.\n\n` + poema);
})();
