const grades = [
  { id: "1", title: "1. Klasse", hint: "Zahlen bis 20, erste Wörter" },
  { id: "2", title: "2. Klasse", hint: "Zahlen bis 100, Lesen und Schreiben" },
  { id: "3", title: "3. Klasse", hint: "Malnehmen, Teilen und Texte" },
  { id: "4", title: "4. Klasse", hint: "Knobeln, Sachaufgaben und Grammatik" }
];

const subjects = [
  { id: "mathe", title: "Mathe", hint: "Rechnen, knobeln, Zahlen entdecken" },
  { id: "deutsch", title: "Deutsch", hint: "Lesen, Wörter, Sätze und Sprache" }
];

const packages = {
  "1": {
    mathe: [
      mathPackage("plus-bis-20", "Plus bis 20", "Addiere kleine Zahlen.", "input", 10, () => makeAddition(1, 12, 20)),
      mathPackage("minus-bis-20", "Minus bis 20", "Ziehe Zahlen ab.", "choice", 10, () => makeSubtraction(2, 20))
    ],
    deutsch: [
      staticPackage("reimwoerter", "Reimwörter", "Finde das Wort, das sich reimt.", "choice", [
        choice("Was reimt sich auf Haus?", "Maus", ["Baum", "Maus", "Tisch", "Lampe"]),
        choice("Was reimt sich auf Ball?", "Fall", ["Fall", "Buch", "Sonne", "Kind"]),
        choice("Was reimt sich auf Hase?", "Nase", ["Nase", "Wiese", "Hund", "Rot"]),
        choice("Was reimt sich auf See?", "Schnee", ["Schnee", "Stift", "Tor", "Mann"]),
        choice("Was reimt sich auf Licht?", "Gesicht", ["Gesicht", "Auto", "Blume", "Wald"])
      ]),
      staticPackage("anfangslaute", "Anfangslaute", "Höre und erkenne den ersten Buchstaben.", "choice", [
        choice("Mit welchem Buchstaben beginnt Apfel?", "A", ["A", "M", "S", "T"]),
        choice("Mit welchem Buchstaben beginnt Ball?", "B", ["D", "B", "L", "R"]),
        choice("Mit welchem Buchstaben beginnt Sonne?", "S", ["F", "M", "S", "N"]),
        choice("Mit welchem Buchstaben beginnt Maus?", "M", ["A", "M", "P", "U"]),
        choice("Mit welchem Buchstaben beginnt Tisch?", "T", ["K", "I", "T", "W"])
      ])
    ]
  },
  "2": {
    mathe: [
      mathPackage("plus-bis-100", "Plus", "Addiere Zahlen bis 100.", "input", 10, () => makeAddition(8, 75, 100)),
      mathPackage("minus-bis-100", "Minus", "Subtrahiere Zahlen bis 100.", "choice", 10, () => makeSubtraction(10, 100)),
      mathPackage("mal-klein", "Mal", "Übe einfache Malaufgaben.", "input", 10, () => makeMultiplication(2, 10, 2, 5)),
      mathPackage("geteilt-klein", "Geteilt", "Teile Zahlen ohne Rest.", "choice", 10, () => makeDivision(2, 10, 2, 5)),
      mathPackage("textaufgaben-klasse-2", "Textaufgaben", "Lies genau und rechne.", "input", 10, makeStoryProblemGrade2),
      mathPackage("uhrzeiten", "Uhrzeiten", "Lies einfache Zeiten.", "choice", 8, makeClockTask)
    ],
    deutsch: [
      staticPackage("nomen-erkennen", "Nomen erkennen", "Welche Wörter sind Namenwörter?", "choice", [
        choice("Welches Wort ist ein Nomen?", "Hund", ["laufen", "Hund", "schnell", "blau"]),
        choice("Welches Wort ist ein Nomen?", "Schule", ["klein", "Schule", "springen", "warm"]),
        choice("Welches Wort ist ein Nomen?", "Blume", ["Blume", "rot", "singen", "leise"]),
        choice("Welches Wort ist ein Nomen?", "Kind", ["malen", "gut", "Kind", "rund"])
      ]),
      staticPackage("satzzeichen", "Satzzeichen", "Punkt, Fragezeichen oder Ausrufezeichen?", "choice", [
        choice("Wie heißt du", "?", [".", "?", "!"]),
        choice("Ich lese ein Buch", ".", [".", "?", "!"]),
        choice("Pass auf", "!", [".", "?", "!"]),
        choice("Wo ist mein Stift", "?", [".", "?", "!"])
      ])
    ]
  },
  "3": {
    mathe: [
      mathPackage("einmaleins", "Einmaleins", "Trainiere Malaufgaben.", "input", 10, () => makeMultiplication(2, 10, 2, 10)),
      mathPackage("geteilt", "Geteilt", "Teile Zahlen gerecht auf.", "choice", 10, () => makeDivision(2, 10, 2, 10))
    ],
    deutsch: [
      staticPackage("wortarten", "Wortarten", "Nomen, Verb oder Adjektiv?", "choice", [
        choice("Welche Wortart ist schwimmen?", "Verb", ["Nomen", "Verb", "Adjektiv"]),
        choice("Welche Wortart ist freundlich?", "Adjektiv", ["Nomen", "Verb", "Adjektiv"]),
        choice("Welche Wortart ist Fahrrad?", "Nomen", ["Nomen", "Verb", "Adjektiv"]),
        choice("Welche Wortart ist lachen?", "Verb", ["Nomen", "Verb", "Adjektiv"])
      ]),
      staticPackage("lesecheck", "Lesecheck", "Verstehe kurze Sätze.", "choice", [
        choice("Mila stellt den Becher auf den Tisch. Wo ist der Becher?", "Auf dem Tisch", ["Unter dem Tisch", "Auf dem Tisch", "Im Ranzen"]),
        choice("Tom zieht die rote Jacke an. Welche Farbe hat die Jacke?", "Rot", ["Blau", "Grün", "Rot"]),
        choice("Im Garten wachsen drei Tulpen. Wie viele Tulpen wachsen dort?", "Drei", ["Zwei", "Drei", "Vier"])
      ])
    ]
  },
  "4": {
    mathe: [
      mathPackage("textaufgaben", "Textaufgaben", "Lies genau und rechne.", "input", 10, makeStoryProblemGrade4),
      mathPackage("zahlenraum-1000", "Zahlen bis 1000", "Addieren und subtrahieren mit größeren Zahlen.", "choice", 10, makeNumberRange1000)
    ],
    deutsch: [
      staticPackage("faelle", "Fälle entdecken", "Frage nach Satzgliedern.", "choice", [
        choice("Der Hund jagt den Ball. Wen oder was jagt der Hund?", "den Ball", ["der Hund", "den Ball", "jagt"]),
        choice("Mia gibt dem Freund ein Buch. Wem gibt Mia ein Buch?", "dem Freund", ["Mia", "dem Freund", "ein Buch"]),
        choice("Das Fahrrad gehört dem Kind. Wem gehört das Fahrrad?", "dem Kind", ["Das Fahrrad", "dem Kind", "gehört"])
      ]),
      staticPackage("rechtschreibung", "Rechtschreibung", "Wähle die richtige Schreibweise.", "choice", [
        choice("Welche Schreibweise ist richtig?", "Fahrrad", ["Fahrad", "Fahrrad", "Farad"]),
        choice("Welche Schreibweise ist richtig?", "Schlüssel", ["Schlüssel", "Schlusel", "Schlüsselr"]),
        choice("Welche Schreibweise ist richtig?", "nämlich", ["nemlich", "nämlich", "nämlig"])
      ])
    ]
  }
};

const state = {
  grade: null,
  subject: null,
  packageId: null,
  currentIndex: 0,
  answers: [],
  tasks: []
};

const app = document.querySelector("#app");
const progressDots = document.querySelector("#progressDots");

document.querySelector("[data-action='home']").addEventListener("click", renderHome);

function task(question, answer) {
  return { question, answer: String(answer) };
}

function choice(question, answer, options) {
  return { question, answer: String(answer), options: options.map(String) };
}

function staticPackage(id, title, description, mode, tasks) {
  return { id, title, description, mode, taskCount: tasks.length, tasks };
}

function mathPackage(id, title, description, mode, taskCount, generator) {
  return { id, title, description, mode, taskCount, generator };
}

function createTasks(pack) {
  if (!pack.generator) return pack.tasks;

  const seen = new Set();
  const tasks = [];
  let tries = 0;

  while (tasks.length < pack.taskCount && tries < pack.taskCount * 20) {
    tries += 1;
    const nextTask = pack.generator();
    const key = nextTask.question;
    if (seen.has(key)) continue;
    seen.add(key);
    tasks.push(pack.mode === "choice" && !nextTask.options ? withOptions(nextTask) : nextTask);
  }

  return tasks;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(0, index);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function withOptions(baseTask) {
  const correct = Number(baseTask.answer);
  const options = new Set([String(correct)]);
  const spread = Math.max(4, Math.ceil(Math.abs(correct) / 5));

  while (options.size < 4) {
    const offset = randomInt(-spread, spread);
    const candidate = Math.max(0, correct + offset);
    options.add(String(candidate));
  }

  return choice(baseTask.question, baseTask.answer, shuffle([...options]));
}

function makeAddition(min, maxPart, maxResult) {
  const left = randomInt(min, maxPart);
  const right = randomInt(min, Math.max(min, maxResult - left));
  return task(`${left} + ${right} = ?`, left + right);
}

function makeSubtraction(minResult, maxStart) {
  const answer = randomInt(minResult, Math.max(minResult, maxStart - 5));
  const subtract = randomInt(1, maxStart - answer);
  const start = answer + subtract;
  return task(`${start} - ${subtract} = ?`, answer);
}

function makeMultiplication(minLeft, maxLeft, minRight, maxRight) {
  const left = randomInt(minLeft, maxLeft);
  const right = randomInt(minRight, maxRight);
  return task(`${left} x ${right} = ?`, left * right);
}

function makeDivision(minAnswer, maxAnswer, minDivisor, maxDivisor) {
  const answer = randomInt(minAnswer, maxAnswer);
  const divisor = randomInt(minDivisor, maxDivisor);
  return task(`${answer * divisor} : ${divisor} = ?`, answer);
}

function makeClockTask() {
  const hour = randomInt(6, 18);
  const minutes = [0, 15, 30, 45][randomInt(0, 3)];
  const addMinutes = [15, 30, 60][randomInt(0, 2)];
  const total = hour * 60 + minutes + addMinutes;
  const answerHour = Math.floor(total / 60);
  const answerMinutes = total % 60;
  const answer = `${answerHour}:${String(answerMinutes).padStart(2, "0")}`;
  const question = `Welche Uhrzeit ist ${addMinutes} Minuten nach ${hour}:${String(minutes).padStart(2, "0")}?`;
  const options = new Set([answer]);

  while (options.size < 4) {
    const offset = [15, 30, 45, 60][randomInt(0, 3)] * (Math.random() > 0.5 ? 1 : -1);
    const candidateTotal = Math.max(0, total + offset);
    const candidate = `${Math.floor(candidateTotal / 60)}:${String(candidateTotal % 60).padStart(2, "0")}`;
    options.add(candidate);
  }

  return choice(question, answer, shuffle([...options]));
}

function makeStoryProblemGrade2() {
  const templates = [
    () => {
      const start = randomInt(12, 48);
      const added = randomInt(5, 35);
      return task(`Mila hat ${start} Sticker. Sie bekommt ${added} dazu. Wie viele Sticker hat sie jetzt?`, start + added);
    },
    () => {
      const total = randomInt(30, 90);
      const used = randomInt(5, total - 10);
      return task(`In einer Kiste liegen ${total} Bälle. ${used} Bälle werden herausgenommen. Wie viele bleiben übrig?`, total - used);
    },
    () => {
      const children = randomInt(2, 5);
      const each = randomInt(2, 10);
      return task(`${children} Kinder bekommen je ${each} Bonbons. Wie viele Bonbons sind das zusammen?`, children * each);
    }
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeStoryProblemGrade4() {
  const templates = [
    () => {
      const each = randomInt(6, 14);
      const days = randomInt(4, 9);
      return task(`Noah liest jeden Tag ${each} Seiten. Wie viele Seiten liest er in ${days} Tagen?`, each * days);
    },
    () => {
      const seats = randomInt(45, 80);
      const taken = randomInt(20, seats - 8);
      return task(`Ein Bus hat ${seats} Plätze. ${taken} Kinder sitzen darin. Wie viele Plätze sind frei?`, seats - taken);
    },
    () => {
      const children = randomInt(4, 8);
      const each = randomInt(5, 14);
      return task(`${children} Kinder teilen ${children * each} Murmeln gerecht. Wie viele bekommt jedes Kind?`, each);
    }
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeNumberRange1000() {
  if (Math.random() > 0.5) {
    const left = randomInt(120, 780);
    const right = randomInt(20, 1000 - left);
    return task(`${left} + ${right} = ?`, left + right);
  }

  const answer = randomInt(80, 850);
  const subtract = randomInt(20, 1000 - answer);
  return task(`${answer + subtract} - ${subtract} = ?`, answer);
}

function normalizeAnswer(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss");
}

function currentPackage() {
  return packages[state.grade][state.subject].find((item) => item.id === state.packageId);
}

function resetPractice() {
  state.currentIndex = 0;
  state.answers = [];
  state.tasks = [];
}

function startPractice() {
  resetPractice();
  state.tasks = createTasks(currentPackage());
  renderPractice();
}

function setScreen(html) {
  app.innerHTML = html;
  app.focus({ preventScroll: true });
}

function updateDots(total = 0, done = 0) {
  if (!total) {
    progressDots.innerHTML = "";
    return;
  }

  progressDots.innerHTML = Array.from({ length: total }, (_, index) => {
    const className = index < done ? "dot is-done" : "dot";
    return `<span class="${className}" aria-hidden="true"></span>`;
  }).join("");
}

function renderHome() {
  state.grade = null;
  state.subject = null;
  state.packageId = null;
  resetPractice();
  updateDots();

  setScreen(`
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <h1 id="home-title">Lernen darf sich leicht anfühlen.</h1>
        <p>Wähle deine Klasse und starte ein kleines Aufgabenpaket. Jede Runde ist kurz, freundlich und sofort spielbar.</p>
        <div class="choice-grid" aria-label="Klassenstufe auswählen">
          ${grades.map((grade) => cardButton(grade.title, grade.hint, "select-grade", grade.id, "choice-card")).join("")}
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="mascot">
          <div class="sun"></div>
          <div class="pencil"></div>
          <div class="book"></div>
          <div class="spark one">+</div>
          <div class="spark two">?</div>
        </div>
      </div>
    </section>
  `);
}

function renderSubjectSelection() {
  updateDots();
  setScreen(`
    ${stageHeader("Fach auswählen", "Was möchtest du heute üben?", true)}
    <div class="choice-grid">
      ${subjects.map((subject) => cardButton(subject.title, subject.hint, "select-subject", subject.id, "choice-card")).join("")}
    </div>
  `);
}

function renderPackageSelection() {
  const items = packages[state.grade][state.subject];
  updateDots();
  setScreen(`
    ${stageHeader("Aufgabenpaket wählen", "Such dir eine Runde aus. Die meisten Pakete haben etwa 10 Aufgaben.", true)}
    <div class="package-grid">
      ${items.map((item) => cardButton(item.title, `${item.description} ${item.taskCount} Aufgaben.`, "select-package", item.id, "package-card")).join("")}
    </div>
  `);
}

function renderPractice() {
  const pack = currentPackage();
  const currentTask = state.tasks[state.currentIndex];
  updateDots(state.tasks.length, state.answers.length);

  const answerArea = currentTask.options
    ? `<div class="answer-grid">
        ${currentTask.options.map((option) => `
          <button class="answer-card" type="button" data-action="answer-choice" data-value="${escapeHtml(option)}">
            <strong>${escapeHtml(option)}</strong>
          </button>
        `).join("")}
      </div>`
    : `<form class="input-row" data-answer-form>
        <input class="answer-input" name="answer" autocomplete="off" inputmode="text" aria-label="Deine Antwort" placeholder="Deine Antwort">
        <button class="primary-action" type="submit">Prüfen</button>
      </form>`;

  setScreen(`
    ${stageHeader(pack.title, "Lies die Aufgabe und antworte in Ruhe.", true)}
    <section class="practice-layout">
      <div class="task-panel">
        <p class="question-count">Aufgabe ${state.currentIndex + 1} von ${state.tasks.length}</p>
        <h2 class="question-text">${escapeHtml(currentTask.question)}</h2>
        ${answerArea}
        <div class="feedback" aria-live="polite"></div>
      </div>
      <aside class="side-panel" aria-label="Zwischenstand">
        <h3>Zwischenstand</h3>
        <div class="score-box">
          <div class="score-item">
            <strong>${state.answers.filter((answer) => answer.correct).length}</strong>
            richtig
          </div>
          <div class="score-item">
            <strong>${state.answers.length}</strong>
            geschafft
          </div>
        </div>
      </aside>
    </section>
  `);

  const input = app.querySelector(".answer-input");
  if (input) input.focus();
}

function renderSummary() {
  const pack = currentPackage();
  const correctCount = state.answers.filter((answer) => answer.correct).length;
  const percent = Math.round((correctCount / state.tasks.length) * 100);
  updateDots(state.tasks.length, state.tasks.length);

  const message = percent >= 90
    ? "Super Runde!"
    : percent >= 70
      ? "Gut gemacht!"
      : "Weiter üben lohnt sich!";

  setScreen(`
    ${stageHeader("Fertig!", "Hier siehst du, wie die Runde gelaufen ist.", false)}
    <section class="summary-grid">
      <div class="result-panel">
        <p class="result-number">${percent}%</p>
        <h2>${message}</h2>
        <p>${correctCount} von ${state.tasks.length} Aufgaben waren richtig.</p>
        <div class="actions-row">
          <button class="primary-action" type="button" data-action="retry-package">Nochmal üben</button>
          <button class="ghost-action" type="button" data-action="back-packages">Anderes Paket</button>
        </div>
      </div>
      <div class="result-panel">
        <h2>Deine Antworten</h2>
        <ul class="review-list">
          ${state.answers.map((answer) => `
            <li class="review-item">
              <span class="review-mark ${answer.correct ? "good" : "bad"}">${answer.correct ? "✓" : "!"}</span>
              <span>
                <strong>${escapeHtml(answer.question)}</strong><br>
                Deine Antwort: ${escapeHtml(answer.given || "-")}<br>
                Richtige Antwort: ${escapeHtml(answer.expected)}
              </span>
            </li>
          `).join("")}
        </ul>
      </div>
    </section>
  `);
}

function stageHeader(title, lead, showBack) {
  const gradeTitle = grades.find((grade) => grade.id === state.grade)?.title;
  const subjectTitle = subjects.find((subject) => subject.id === state.subject)?.title;
  const crumbs = [gradeTitle, subjectTitle].filter(Boolean).map((item) => `<span class="pill">${item}</span>`).join("");

  return `
    <section class="stage-header">
      <div>
        <div class="breadcrumb">${crumbs}</div>
        <h1 class="section-title">${title}</h1>
        <p class="section-lead">${lead}</p>
      </div>
      ${showBack ? `<button class="ghost-action" type="button" data-action="go-back">Zurück</button>` : ""}
    </section>
  `;
}

function cardButton(title, hint, action, value, className) {
  return `
    <button class="${className}" type="button" data-action="${action}" data-value="${value}">
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(hint)}</span>
    </button>
  `;
}

function answerQuestion(given) {
  const currentTask = state.tasks[state.currentIndex];
  const correct = normalizeAnswer(given) === normalizeAnswer(currentTask.answer);
  const feedback = app.querySelector(".feedback");

  state.answers.push({
    question: currentTask.question,
    expected: currentTask.answer,
    given,
    correct
  });

  if (feedback) {
    feedback.textContent = correct ? "Richtig! Weiter geht's." : `Fast. Richtig ist: ${currentTask.answer}`;
    feedback.className = `feedback ${correct ? "is-good" : "is-bad"}`;
  }

  window.setTimeout(() => {
    state.currentIndex += 1;
    if (state.currentIndex >= state.tasks.length) {
      renderSummary();
    } else {
      renderPractice();
    }
  }, 850);
}

function goBack() {
  if (state.packageId) {
    state.packageId = null;
    resetPractice();
    renderPackageSelection();
    return;
  }

  if (state.subject) {
    state.subject = null;
    renderSubjectSelection();
    return;
  }

  if (state.grade) {
    renderHome();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

app.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const { action, value } = button.dataset;

  if (action === "select-grade") {
    state.grade = value;
    renderSubjectSelection();
  }

  if (action === "select-subject") {
    state.subject = value;
    renderPackageSelection();
  }

  if (action === "select-package") {
    state.packageId = value;
    startPractice();
  }

  if (action === "answer-choice") {
    answerQuestion(value);
  }

  if (action === "go-back") {
    goBack();
  }

  if (action === "retry-package") {
    startPractice();
  }

  if (action === "back-packages") {
    state.packageId = null;
    resetPractice();
    renderPackageSelection();
  }
});

app.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-answer-form]");
  if (!form) return;
  event.preventDefault();

  const data = new FormData(form);
  const given = data.get("answer");
  if (!String(given).trim()) {
    const feedback = app.querySelector(".feedback");
    feedback.textContent = "Schreib erst eine Antwort hinein.";
    feedback.className = "feedback is-bad";
    return;
  }

  answerQuestion(given);
});

renderHome();
