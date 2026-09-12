const card = document.getElementById('card');

document.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 7;
  const y = (event.clientY / window.innerHeight - 0.5) * -7;
  card.style.transform =
    `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
});

document.addEventListener('mouseleave', () => {
  card.style.transform =
    'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});
