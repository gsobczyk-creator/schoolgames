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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Moonlight Wizard Quest</title>
  <style>
    :root {
      --bg-1: #120428;
      --bg-2: #24104d;
      --panel: rgba(25, 16, 52, 0.88);
      --gold: #ffd873;
      --mint: #8fffd6;
      --text: #f9f7ff;
      --danger: #ff8b9b;
      --ok: #a8ffbf;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: "Trebuchet MS", "Segoe UI", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.2) 0 3px, transparent 4px),
        radial-gradient(circle at 75% 12%, rgba(255, 255, 255, 0.15) 0 2px, transparent 3px),
        radial-gradient(circle at 60% 75%, rgba(255, 255, 255, 0.12) 0 3px, transparent 4px),
        linear-gradient(180deg, var(--bg-2), var(--bg-1));
      background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%;
      display: flex;
      justify-content: center;
      padding: 20px;
    }

    .app {
      width: min(980px, 100%);
      background: var(--panel);
      border: 2px solid rgba(255, 216, 115, 0.6);
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      overflow: hidden;
    }

    .screen { display: none; padding: 24px; }
    .screen.active { display: block; }

    h1, h2, h3 { margin-top: 0; }

    .subtitle {
      color: #d3ccff;
      line-height: 1.45;
      margin-bottom: 20px;
    }

    .avatar-grid {
      display: grid;
      gap: 14px;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      margin: 20px 0;
    }

    .avatar-card {
      border: 2px solid rgba(255, 255, 255, 0.25);
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.06);
      padding: 16px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .avatar-card:hover,
    .avatar-card.selected {
      transform: translateY(-2px);
      border-color: var(--gold);
    }

    .avatar-art {
      font-size: 70px;
      margin: 8px 0;
    }

    button {
      border: none;
      border-radius: 12px;
      padding: 12px 18px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      color: #130022;
      background: var(--gold);
    }

    button:disabled { opacity: 0.55; cursor: not-allowed; }

    .hud {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 8px;
      align-items: center;
      background: rgba(255, 255, 255, 0.08);
      padding: 12px;
      border-radius: 12px;
      margin-bottom: 16px;
    }

    .bar {
      height: 10px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 999px;
      overflow: hidden;
    }

    .bar > div {
      height: 100%;
      width: 0;
      background: linear-gradient(90deg, #7ef7db, #ffe89f);
      transition: width 0.3s ease;
    }

    .forest-line {
      margin: 8px 0 14px;
      font-family: monospace;
      color: #b8ffdf;
      white-space: pre-wrap;
    }

    .card {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      padding: 16px;
      margin-bottom: 12px;
    }

    .summary { border-left: 4px solid var(--mint); }

    .options {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    }

    .option-btn {
      text-align: left;
      background: rgba(255, 255, 255, 0.1);
      color: var(--text);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-weight: 600;
    }

    .option-btn:hover { background: rgba(255, 255, 255, 0.2); }

    .feedback {
      min-height: 30px;
      font-weight: 700;
      margin: 10px 0;
    }

    .ok { color: var(--ok); }
    .bad { color: var(--danger); }

    .tag {
      display: inline-block;
      font-size: 0.85rem;
      background: rgba(255, 216, 115, 0.2);
      border: 1px solid rgba(255, 216, 115, 0.6);
      padding: 4px 8px;
      border-radius: 999px;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div class="app">
    <section id="startScreen" class="screen active">
      <h1>🌙 Moonlight Wizard Quest</h1>
      <p class="subtitle">
        Explore enchanted forests, meet magical mentors, and unlock crystal gates by answering 100 questions.
        Every question includes a short summary so fourth graders can learn first, then answer.
      </p>
      <div class="avatar-grid" id="avatarGrid"></div>
      <button id="startBtn" disabled>Start Enchanted Journey</button>
    </section>

    <section id="gameScreen" class="screen">
      <div class="hud">
        <strong id="playerName"></strong>
        <span id="levelText"></span>
        <span id="topicText"></span>
      </div>
      <div class="bar"><div id="progressFill"></div></div>
      <div class="forest-line" id="forestLine"></div>

      <div class="card summary">
        <div class="tag">Wizard Scroll Summary</div>
        <p id="summaryText"></p>
      </div>

      <div class="card">
        <h3 id="questionText"></h3>
        <div class="options" id="options"></div>
        <div class="feedback" id="feedback"></div>
        <button id="nextBtn" disabled>Continue Through Forest</button>
      </div>
    </section>

    <section id="endScreen" class="screen">
      <h2>✨ You Restored the Moonlight Path! ✨</h2>
      <p class="subtitle" id="endText"></p>
      <button onclick="location.reload()">Play Again</button>
    </section>
  </div>

  <script>
    const avatars = [
      { id: "boy", name: "Wizard Boy", art: "🧙‍♂️", blurb: "A brave spell-caster who listens to every forest clue." },
      { id: "girl", name: "Wizard Girl", art: "🧙‍♀️", blurb: "A thoughtful mage who solves mysteries with kindness." }
    ];

    const blackHistoryPeople = [
      { name: "Harriet Tubman", summary: "Harriet Tubman escaped slavery and then bravely guided many others to freedom on the Underground Railroad.", clue: "guided people to freedom" },
      { name: "Martin Luther King Jr.", summary: "Dr. King was a civil rights leader who gave speeches about fairness and led peaceful marches.", clue: "led peaceful marches" },
      { name: "Rosa Parks", summary: "Rosa Parks refused to give up her bus seat, helping start a movement against unfair laws.", clue: "refused to give up her bus seat" },
      { name: "Frederick Douglass", summary: "Frederick Douglass escaped slavery, learned to read, and wrote powerful speeches and books.", clue: "wrote speeches and books" },
      { name: "Sojourner Truth", summary: "Sojourner Truth was a speaker who fought for equal rights for women and Black Americans.", clue: "spoke for equal rights" },
      { name: "Thurgood Marshall", summary: "Thurgood Marshall was a lawyer who fought school segregation and became the first Black U.S. Supreme Court Justice.", clue: "first Black Supreme Court Justice" },
      { name: "Katherine Johnson", summary: "Katherine Johnson was a mathematician whose calculations helped NASA send astronauts into space.", clue: "math helped NASA" },
      { name: "Mae Jemison", summary: "Mae Jemison was the first Black woman to travel into space.", clue: "first Black woman in space" },
      { name: "George Washington Carver", summary: "George Washington Carver was a scientist who studied plants and helped farmers grow healthier crops.", clue: "scientist who helped farmers" },
      { name: "Jackie Robinson", summary: "Jackie Robinson broke baseball's color barrier by joining Major League Baseball.", clue: "broke baseball's color barrier" },
      { name: "Ruby Bridges", summary: "Ruby Bridges was a child who bravely integrated an all-white elementary school.", clue: "integrated a school as a child" },
      { name: "Bessie Coleman", summary: "Bessie Coleman became the first Black and Native American woman pilot.", clue: "trailblazing pilot" },
      { name: "Shirley Chisholm", summary: "Shirley Chisholm was the first Black woman elected to the U.S. Congress.", clue: "first Black woman in Congress" },
      { name: "Carter G. Woodson", summary: "Carter G. Woodson was a historian known as the Father of Black History for promoting study of Black achievements.", clue: "Father of Black History" },
      { name: "Barack Obama", summary: "Barack Obama became the first Black president of the United States.", clue: "first Black U.S. president" },
      { name: "Michelle Obama", summary: "Michelle Obama, a former First Lady, encouraged healthy living and education for kids.", clue: "encouraged healthy living" },
      { name: "Ida B. Wells", summary: "Ida B. Wells was a journalist who bravely reported on injustice and supported civil rights.", clue: "journalist against injustice" },
      { name: "Madam C.J. Walker", summary: "Madam C.J. Walker built a successful hair-care business and supported Black communities.", clue: "successful business leader" },
      { name: "Bayard Rustin", summary: "Bayard Rustin helped organize the 1963 March on Washington.", clue: "organized the March on Washington" },
      { name: "John Lewis", summary: "John Lewis was a civil rights leader and congressman known for peaceful protest and courage.", clue: "civil rights leader and congressman" }
    ];

    const animalAdaptations = [
      { concept: "Camouflage", summary: "Camouflage helps animals blend into their surroundings so they can hide from predators or sneak up on prey.", clue: "blend into surroundings" },
      { concept: "Hibernation", summary: "Some animals hibernate in winter by slowing down their bodies to save energy when food is hard to find.", clue: "slow body in winter" },
      { concept: "Migration", summary: "Migration is when animals travel to new places during different seasons for food, warmth, or nesting.", clue: "seasonal travel" },
      { concept: "Thick Fur", summary: "Animals in cold places often have thick fur to trap warmth near their bodies.", clue: "trap warmth" },
      { concept: "Webbed Feet", summary: "Webbed feet help animals like ducks push against water and swim better.", clue: "help with swimming" },
      { concept: "Sharp Claws", summary: "Sharp claws can help animals climb, dig, or catch food.", clue: "climb dig catch" },
      { concept: "Long Beaks", summary: "Some birds have long beaks that help them reach nectar or food in hard-to-reach places.", clue: "reach deep food" },
      { concept: "Blubber", summary: "Blubber is a thick layer of fat that keeps ocean animals warm in icy water.", clue: "fat for warmth" },
      { concept: "Nocturnal Behavior", summary: "Nocturnal animals are active at night, which can help them avoid heat or predators.", clue: "active at night" },
      { concept: "Mimicry", summary: "Mimicry is when an animal looks like another animal or object to stay safe.", clue: "look like something else" },
      { concept: "Shell Protection", summary: "A hard shell protects animals like turtles and snails from injury and predators.", clue: "hard outer protection" },
      { concept: "Echolocation", summary: "Bats and some sea animals use echolocation, sending sounds and listening to echoes to find objects.", clue: "use echoes to find" },
      { concept: "Gills", summary: "Fish use gills to take oxygen from water instead of air.", clue: "take oxygen from water" },
      { concept: "Insulating Feathers", summary: "Bird feathers can keep birds warm and dry in cool weather.", clue: "warm and dry" },
      { concept: "Warning Colors", summary: "Bright warning colors can tell predators an animal may taste bad or be dangerous.", clue: "bright colors warn predators" }
    ];

    const moonPhases = [
      { phase: "New Moon", summary: "During a new moon, the side of the moon facing Earth is mostly dark, so it is hard to see.", clue: "moon looks mostly dark" },
      { phase: "Waxing Crescent", summary: "A waxing crescent happens when a small curved slice of light grows bigger each night.", clue: "small lit curve growing" },
      { phase: "First Quarter", summary: "At first quarter, we can see about half of the moon lit on the right side (in many places).", clue: "half lit, growing" },
      { phase: "Waxing Gibbous", summary: "A waxing gibbous moon is more than half lit and still growing toward full moon.", clue: "more than half and growing" },
      { phase: "Full Moon", summary: "At full moon, the moon appears as a bright full circle because the side facing Earth is lit up.", clue: "full bright circle" },
      { phase: "Waning Gibbous", summary: "A waning gibbous moon is more than half lit but shrinking after a full moon.", clue: "more than half and shrinking" },
      { phase: "Third Quarter", summary: "At third quarter, half the moon is lit again, but now it is in the shrinking part of the cycle.", clue: "half lit, shrinking" },
      { phase: "Waning Crescent", summary: "A waning crescent is a thin curved slice of light that gets smaller each night.", clue: "thin lit curve shrinking" },
      { phase: "Moon Cycle", summary: "The moon cycle takes about 29.5 days to go from one new moon to the next new moon.", clue: "about 29.5 days" },
      { phase: "Moonlight", summary: "The moon does not make its own light; it reflects sunlight.", clue: "reflects sunlight" },
      { phase: "Orbit", summary: "Moon phases happen because the moon orbits Earth and we see different lit portions.", clue: "different views while orbiting" },
      { phase: "Eclipse Difference", summary: "Moon phases are regular monthly changes, while eclipses are special events when Earth, moon, and sun line up.", clue: "phases are regular, eclipses are special" },
      { phase: "Order Before Full", summary: "Before full moon, the moon goes from waxing crescent to first quarter to waxing gibbous.", clue: "crescent -> first quarter -> gibbous" },
      { phase: "Order After Full", summary: "After full moon, the moon goes from waning gibbous to third quarter to waning crescent.", clue: "gibbous -> third quarter -> crescent" },
      { phase: "Best Visibility", summary: "A full moon is often easiest to see because the whole face is bright.", clue: "easiest phase to see" }
    ];

    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    function generateQuestions() {
      const q = [];

      const personNames = blackHistoryPeople.map((p) => p.name);
      blackHistoryPeople.forEach((p, i) => {
        const wrongNames = shuffle(personNames.filter((n) => n !== p.name)).slice(0, 3);
        q.push({
          topic: "Black History",
          summary: p.summary,
          question: "Who is this wizard scroll describing?",
          answer: p.name,
          options: shuffle([p.name, ...wrongNames])
        });

        const otherClues = shuffle(blackHistoryPeople.filter((x) => x.name !== p.name).map((x) => x.clue)).slice(0, 3);
        q.push({
          topic: "Black History",
          summary: p.summary,
          question: i < 10
            ? `Which achievement matches ${p.name}?`
            : `Based on the summary, which clue best proves why ${p.name} is important in history?`,
          answer: p.clue,
          options: shuffle([p.clue, ...otherClues])
        });
      });

      const concepts = animalAdaptations.map((a) => a.concept);
      animalAdaptations.forEach((a, i) => {
        const wrongConcepts = shuffle(concepts.filter((c) => c !== a.concept)).slice(0, 3);
        q.push({
          topic: "Animal Adaptations",
          summary: a.summary,
          question: "Which adaptation is this summary about?",
          answer: a.concept,
          options: shuffle([a.concept, ...wrongConcepts])
        });

        const otherClues = shuffle(animalAdaptations.filter((x) => x.concept !== a.concept).map((x) => x.clue)).slice(0, 3);
        q.push({
          topic: "Animal Adaptations",
          summary: a.summary,
          question: i < 7
            ? `What is the main job of ${a.concept.toLowerCase()}?`
            : `Which evidence from the summary best explains how ${a.concept.toLowerCase()} helps an animal survive?`,
          answer: a.clue,
          options: shuffle([a.clue, ...otherClues])
        });
      });

      const phases = moonPhases.map((m) => m.phase);
      moonPhases.forEach((m, i) => {
        const wrongPhases = shuffle(phases.filter((p) => p !== m.phase)).slice(0, 3);
        q.push({
          topic: "Moon Phases",
          summary: m.summary,
          question: "What moon idea is described in this summary?",
          answer: m.phase,
          options: shuffle([m.phase, ...wrongPhases])
        });

        const otherClues = shuffle(moonPhases.filter((x) => x.phase !== m.phase).map((x) => x.clue)).slice(0, 3);
        q.push({
          topic: "Moon Phases",
          summary: m.summary,
          question: i < 7
            ? `Which clue correctly matches ${m.phase}?`
            : `Use the summary: which statement is the strongest proof for ${m.phase}?`,
          answer: m.clue,
          options: shuffle([m.clue, ...otherClues])
        });
      });

      return q.map((item, index) => ({ ...item, level: Math.ceil((index + 1) / 10), number: index + 1 }));
    }

    const gameState = {
      avatar: null,
      questions: generateQuestions(),
      index: 0,
      answeredCorrect: false,
      correctCount: 0
    };

    const avatarGrid = document.getElementById("avatarGrid");
    const startBtn = document.getElementById("startBtn");
    const screens = {
      start: document.getElementById("startScreen"),
      game: document.getElementById("gameScreen"),
      end: document.getElementById("endScreen")
    };

    avatars.forEach((a) => {
      const card = document.createElement("div");
      card.className = "avatar-card";
      card.innerHTML = `<div class="avatar-art">${a.art}</div><h3>${a.name}</h3><p>${a.blurb}</p>`;
      card.onclick = () => {
        gameState.avatar = a;
        [...avatarGrid.children].forEach((c) => c.classList.remove("selected"));
        card.classList.add("selected");
        startBtn.disabled = false;
      };
      avatarGrid.appendChild(card);
    });

    startBtn.onclick = () => {
      showScreen("game");
      renderQuestion();
    };

    function showScreen(name) {
      Object.values(screens).forEach((s) => s.classList.remove("active"));
      screens[name].classList.add("active");
    }

    function forestTrail(position) {
      const marks = Array.from({ length: 10 }, (_, i) => (i < position ? "🟢" : "⚪"));
      return `Enchanted Forest Path: ${marks.join(" ")}`;
    }

    function renderQuestion() {
      const question = gameState.questions[gameState.index];
      const progress = Math.round((gameState.index / gameState.questions.length) * 100);

      document.getElementById("playerName").textContent = `${gameState.avatar.art} ${gameState.avatar.name}`;
      document.getElementById("levelText").textContent = `Level ${question.level} of 10`;
      document.getElementById("topicText").textContent = `${question.topic} • Q${question.number}/100`;
      document.getElementById("progressFill").style.width = `${progress}%`;
      document.getElementById("forestLine").textContent = forestTrail(question.level);
      document.getElementById("summaryText").textContent = question.summary;
      document.getElementById("questionText").textContent = question.question;

      const optionsNode = document.getElementById("options");
      optionsNode.innerHTML = "";
      document.getElementById("feedback").textContent = "";
      document.getElementById("nextBtn").disabled = true;
      gameState.answeredCorrect = false;

      question.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt, question.answer);
        optionsNode.appendChild(btn);
      });
    }

    function checkAnswer(selected, correct) {
      const feedback = document.getElementById("feedback");
      if (selected === correct) {
        if (!gameState.answeredCorrect) gameState.correctCount += 1;
        gameState.answeredCorrect = true;
        feedback.textContent = "✅ Correct! The crystal gate opens.";
        feedback.className = "feedback ok";
        document.getElementById("nextBtn").disabled = false;
      } else {
        feedback.textContent = "❌ Not yet. Re-read the summary scroll and try again.";
        feedback.className = "feedback bad";
      }
    }

    document.getElementById("nextBtn").onclick = () => {
      gameState.index += 1;
      if (gameState.index >= gameState.questions.length) {
        showScreen("end");
        document.getElementById("endText").textContent =
          `${gameState.avatar.name}, you completed all 100 questions with ${gameState.correctCount} correct answers and brought light back to the enchanted forest!`;
        return;
      }
      renderQuestion();
    };
  </script>
</body>
</html>
/**
 * Questions for 4th Grade Wizard RPG Game
 * Focused on Black History, Animal Adaptations, and Moon Phases
 * Questions are categorized by topic and difficulty level.
 */

const questions = {
    blackHistory: [
        {
            question: 'Who was Harriet Tubman?',
            options: ['A scientist', 'A conductor on the Underground Railroad', 'A president', 'An astronaut'],
            answer: 'A conductor on the Underground Railroad',
            difficulty: 'easy'
        },
        {
            question: 'What was the significance of the Emancipation Proclamation?',
            options: ['It ended slavery', 'It gave women the right to vote', 'It was a peace treaty', 'None of the above'],
            answer: 'It ended slavery',
            difficulty: 'medium'
        },
        // Add more black history questions here
    ],
    animalAdaptations: [
        {
            question: 'What is camouflage?',
            options: ['A type of clothing', 'A method of hiding from predators', 'A kind of food', 'A sound'],
            answer: 'A method of hiding from predators',
            difficulty: 'easy'
        },
        {
            question: 'Why do some animals hibernate?',
            options: ['To find food', 'To escape the cold', 'To lay eggs', 'To migrate'],
            answer: 'To escape the cold',
            difficulty: 'medium'
        },
        // Add more animal adaptation questions here
    ],
    moonPhases: [
        {
            question: 'What is a full moon?',
            options: ['When the moon disappears', 'When the moon is fully illuminated', 'When the moon is half illuminated', 'When the moon is new'],
            answer: 'When the moon is fully illuminated',
            difficulty: 'easy'
        },
        {
            question: 'How long does it take for the moon to orbit the Earth?',
            options: ['24 hours', '7 days', '29.5 days', '1 year'],
            answer: '29.5 days',
            difficulty: 'medium'
        },
        // Add more moon phases questions here
    ]
};

module.exports = questions;
