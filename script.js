const card = document.querySelector('.card');
const diceButton = card.querySelector('button');
const diceImg = diceButton.querySelector('img');
const adviceNumber = card.querySelector('#advice-number');
const adviceText = card.querySelector('#advice-text');

async function getRandomAdvice() {
  return await fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => data);
}

async function showNewAdvice() {
  diceImg.classList.add('animation');
  const advice = await getRandomAdvice();
  diceImg.classList.remove('animation');
  card.classList.add('animation');
  setTimeout(() => card.classList.remove('animation'), 900);
  setTimeout(() => {
    adviceNumber.innerHTML = advice.slip.id;
    adviceText.innerHTML = advice.slip.advice;
  }, 400);
}

diceButton.addEventListener('click', showNewAdvice);

window.onload = showNewAdvice;