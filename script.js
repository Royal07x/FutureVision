const scenes = document.querySelectorAll(".scene");
const story = document.querySelector(".story");

let currentScene = 0;
let timer;
let sceneChangeTimer;
let transitionEndTimer;

function showScene(index, withTransition = false) {
    if (withTransition) {
        clearTimeout(sceneChangeTimer);
        clearTimeout(transitionEndTimer);
        story.classList.remove("transitioning");
        void story.offsetWidth;
        story.classList.add("transitioning");

        // Change the scene while the glass is covering the screen.
        sceneChangeTimer = setTimeout(() => {
            scenes.forEach(scene => scene.classList.remove("active"));
            if (scenes[index]) scenes[index].classList.add("active");
        }, 430);

        transitionEndTimer = setTimeout(() => {
            story.classList.remove("transitioning");
        }, 1200);
        return;
    }

    scenes.forEach(scene => scene.classList.remove("active"));
    if (scenes[index]) scenes[index].classList.add("active");
}

function nextScene() {
    if (!scenes.length) return;
    currentScene = (currentScene + 1) % scenes.length;
    showScene(currentScene, true);
    timer = setTimeout(nextScene, 7000);
}

function startStory() {
    clearTimeout(timer);
    clearTimeout(sceneChangeTimer);
    clearTimeout(transitionEndTimer);
    currentScene = 0;
    story.classList.remove("transitioning");
    showScene(currentScene, false);
    if (scenes.length > 1) timer = setTimeout(nextScene, 7000);
}

function restartStory() {
    startStory();
}

startStory();
