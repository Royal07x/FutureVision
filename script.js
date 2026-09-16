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

        transitionTimer = setTimeout(() => {
            scenes.forEach(scene => scene.classList.remove("active"));
            scenes[index].classList.add("active");
        }, 430);

        setTimeout(() => story.classList.remove("transitioning"), 1200);
        return;
    }

    scenes.forEach(scene => scene.classList.remove("active"));
    scenes[index].classList.add("active");
}

function nextScene() {
    currentScene++;

    if (currentScene >= scenes.length) {
        currentScene = 0;
    }

    showScene(currentScene, true);
    timer = setTimeout(nextScene, 7000);
}

function startStory() {
    currentScene = 0;
    clearTimeout(timer);
    clearTimeout(transitionTimer);
    story.classList.remove("transitioning");
    showScene(currentScene);
    timer = setTimeout(nextScene, 7000);
}

function restartStory() {
    startStory();
}

startStory();
