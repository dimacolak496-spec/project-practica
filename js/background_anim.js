  const container = document.querySelector('.petal-container');

  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size = Math.random() * 10 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;

    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${Math.random() * 5 + 7}s`;
    petal.style.animationDelay = `${Math.random()}s`;

    container.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 10000);
  }

  setInterval(createPetal, 500);


