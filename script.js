const scenes = document.querySelectorAll(".scene");
const story = document.querySelector(".story");

let currentScene = 0;
let timer;
let transitionTimer;

function showScene(index, withTransition = false) {
    if (withTransition) {
        clearTimeout(transitionTimer);
        story.classList.remove("transitioning");
        void story.offsetWidth;
        story.classList.add("transitioning");

        // Change the scene while the glass is covering the screen.
        transitionTimer = setTimeout(() => {
            scenes.forEach(scene => scene.classList.remove("active"));
            scenes[index].classList.add("active");
        }, 430);

        transitionTimer = setTimeout(() => {
            story.classList.remove("transitioning");
        }, 1200);
        return;
    }

    scenes.forEach(scene => scene.classList.remove("active"));
    scenes[index].classList.add("active");
}

function nextScene() {
    currentScene = (currentScene + 1) % scenes.length;
    showScene(currentScene, true);
    timer = setTimeout(nextScene, 7000);
}

function startStory() {
    clearTimeout(timer);
    clearTimeout(transitionTimer);
    currentScene = 0;
    story.classList.remove("transitioning");
    showScene(currentScene, false);
    timer = setTimeout(nextScene, 7000);
}

function restartStory() {
    startStory();
}

startStory();
