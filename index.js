const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    let intervalId;

    return (seconds) => {
        clearInterval(intervalId);

        const startTime = Date.now();
        const endTime = startTime + seconds * 1000;

        intervalId = setInterval(() => {
            const remainingTime = Math.max(0, endTime - Date.now());
            const hours = Math.floor(remainingTime / (1000 * 60 * 60)).toString().padStart(2, '0');
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000).toString().padStart(2, '0');

            timerEl.textContent = `${hours}:${minutes}:${seconds}`;

            if (remainingTime === 0) {
                clearInterval(intervalId);
                alert('Timer finished!');
                timerEl.textContent = '';
            }
        }, 100);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    inputEl.value = inputEl.value.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});
