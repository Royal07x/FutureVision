const scenes = document.querySelectorAll(".scene");

let currentScene = 0;
let timer;

function showScene(index) {
    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    scenes[index].classList.add("active");
}

function nextScene() {
    currentScene++;

    if (currentScene >= scenes.length) {
        currentScene = 0;
    }

    showScene(currentScene);

    timer = setTimeout(nextScene, 7000);
}

function startStory() {
    currentScene = 0;
    showScene(currentScene);

    clearTimeout(timer);
    timer = setTimeout(nextScene, 7000);
}

function restartStory() {
    startStory();
}

startStory();
