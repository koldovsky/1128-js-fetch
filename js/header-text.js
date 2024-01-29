const headerTitle = document.querySelector('.header__title');

const greetings = [
    'Hello!',
    'Привіт!',
    'Вітаю!',
    'Hey',
    'Buenos dias'
];

headerTitle.innerText = getRandomEl(greetings);
// headerTitle.style.color = 'red';
// function blinkText() {
//     headerTitle.classList.toggle('highlight');
// }
// setInterval(blinkText, 300);

function getRandomEl(arr) {
    return arr[ Math.floor(Math.random() * arr.length) ];
}

