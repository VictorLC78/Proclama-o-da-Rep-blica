// timeline data — pode ser carregado por JSON externo
const timelineData = [
  {year: "1870", title: "Organização republicana", text: "Movimentos e clubes republicanos começam a ganhar força nas cidades e entre militares."},
  {year: "1871", title: "Crise política do Império", text: "Tensões entre a monarquia e setores liberais, além de desgaste da corte, aprofundam a crise."},
  {year: "1888", title: "Abolição da Escravatura", text: "A Lei Áurea (13 de maio) enfria a aliança entre fazendeiros e o trono e acelera transformações sociais."},
  {year: "1889-11-15", title: "Proclamação da República", text: "Marechal Deodoro da Fonseca lidera o movimento que depõe Dom Pedro II no Rio de Janeiro."},
  {year: "1891", title: "Constituição da República", text: "Promulgação da primeira Constituição republicana em 1891; consolidação de novas instituições, com forte presença militar."},
  {year: "1894", title: "Consequências políticas", text: "A República inicia um processo de reorganização política e social — expansão das oligarquias regionais e mudanças na participação popular."}
];

function renderTimeline(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  timelineData.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `<time datetime="${item.year}">${item.year}</time><h4>${item.title}</h4><p>${item.text}</p>`;
    // stagger animation using inline style (delay based on index)
    el.style.animationDelay = `${i * 120}ms`;
    container.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', ()=> renderTimeline('timeline'));

// If you want progressive reveal on scroll, an IntersectionObserver could be added later.
