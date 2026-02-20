// Game Engine for School Games

// Character Selection
const characters = [
    { name: 'Wizard', power: 100 },
    { name: 'Warrior', power: 80 },
    { name: 'Rogue', power: 90 }
];

let selectedCharacter = null;
function selectCharacter(name) {
    selectedCharacter = characters.find(char => char.name === name);
    console.log(`Character selected: ${selectedCharacter.name}`);
}

// Game State Management
let gameState = 'initial';
function setGameState(state) {
    gameState = state;
    console.log(`Current game state: ${gameState}`);
}

// Enchanted Location Scenes
const scenes = [
    { name: 'Forbidden Forest', description: 'A dark and mysterious forest.', completed: false },
    { name: 'Crystal Cave', description: 'A cave filled with sparkling crystals.', completed: false },
    { name: 'Ancient Ruins', description: 'Ruins of a long-lost civilization.', completed: false },
    { name: 'Lava Mountain', description: 'A mountain of bubbling lava.', completed: false },
    { name: 'Sky Castle', description: 'A castle high above the clouds.', completed: false },
    { name: 'Haunted Graveyard', description: 'A spooky graveyard with many secrets.', completed: false },
    { name: 'Mermaid Lagoon', description: 'A beautiful lagoon filled with mermaids.', completed: false },
    { name: 'Dragon's Lair', description: 'Home of the fearsome dragon.', completed: false },
    { name: 'Fairy Glade', description: 'A magical glade where fairies live.', completed: false },
    { name: 'Ice Fortress', description: 'A fortress built of ice and snow.', completed: false }
];

function completeScene(sceneName) {
    const scene = scenes.find(s => s.name === sceneName);
    if (scene) {
        scene.completed = true;
        console.log(`Scene completed: ${scene.name}`);
    }
}

// Level Progression System
let currentLevel = 1;
const maxLevel = 10;
function levelUp() {
    if (currentLevel < maxLevel) {
        currentLevel++;
        console.log(`Level Up! New Level: ${currentLevel}`);
    } else {
        console.log('Maximum level reached!');
    }
}

// Answer Checking and Scoring
let score = 0;
function checkAnswer(correctAnswer, userAnswer) {
    if (correctAnswer === userAnswer) {
        score += 10;
        console.log('Correct answer! Score:', score);
        levelUp();
    } else {
        console.log('Incorrect answer. Try again!');
    }
}

// Wizard Rank Progression
const ranks = ['Novice', 'Adept', 'Expert', 'Master'];
let currentRankIndex = 0;
function rankUp() {
    if (currentRankIndex < ranks.length - 1) {
        currentRankIndex++;
        console.log(`Rank Up! New Rank: ${ranks[currentRankIndex]}`);
    }
}

// Game Flow with Modals
function gameOver() {
    console.log('Game Over! Final Score:', score);
}

function levelComplete() {
    console.log('Level Complete! Moving to next level...');
}

// Example Function Calls
selectCharacter('Wizard');
setGameState('playing');
completeScene('Crystal Cave');
checkAnswer('42', '42');
