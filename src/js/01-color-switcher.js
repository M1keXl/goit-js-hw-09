function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const bodyCol = document.querySelector('body');
let timerId = null;

const cahngeBackgroundColor = () => bodyCol.setAttribute('Style', `background-color: ${getRandomHexColor()}`);

function hendleCahngeBackgroundColor({ target }) {
    
        if (target.dataset.start === '') {
            timerId = setInterval(cahngeBackgroundColor, 1000);
            target.disabled = true;
        };
        if (target.dataset.stop === '') {
            const startButtonEl = target.previousElementSibling
            clearInterval(timerId);
            startButtonEl.disabled = false;
        }

}
bodyCol.addEventListener('click', hendleCahngeBackgroundColor);
