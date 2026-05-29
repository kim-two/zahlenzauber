const grades = [
  { id: "1", title: "1. Klasse", hint: "Zahlen bis 20, erste Woerter" },
  { id: "2", title: "2. Klasse", hint: "Zahlen bis 100, Lesen und Schreiben" },
  { id: "3", title: "3. Klasse", hint: "Malnehmen, Teilen und Texte" },
  { id: "4", title: "4. Klasse", hint: "Knobeln, Sachaufgaben und Grammatik" }
];

const subjects = [
  { id: "mathe", title: "Mathe", hint: "Rechnen, knobeln, Zahlen entdecken" },
  { id: "deutsch", title: "Deutsch", hint: "Lesen, Woerter, Saetze und Sprache" }
];

const packages = {
  "1": {
    mathe: [
      {
        id: "plus-bis-20",
        title: "Plus bis 20",
        description: "Addiere kleine Zahlen.",
        mode: "input",
        tasks: [
          task("3 + 4 = ?", "7"),
          task("8 + 2 = ?", "10"),
          task("6 + 5 = ?", "11"),
          task("9 + 1 = ?", "10"),
          task("7 + 6 = ?", "13"),
          task("5 + 5 = ?", "10"),
          task("12 + 3 = ?", "15"),
          task("4 + 9 = ?", "13"),
          task("11 + 2 = ?", "13"),
          task("10 + 7 = ?", "17")
        ]
      },
      {
        id: "minus-bis-20",
        title: "Minus bis 20",
        description: "Ziehe Zahlen ab.",
        mode: "choice",
        tasks: [
          choice("9 - 4 = ?", "5", ["4", "5", "6", "7"]),
          choice("12 - 2 = ?", "10", ["8", "9", "10", "11"]),
          choice("15 - 5 = ?", "10", ["9", "10", "11", "12"]),
          choice("8 - 3 = ?", "5", ["3", "4", "5", "6"]),
          choice("18 - 7 = ?", "11", ["9", "10", "11", "12"]),
          choice("14 - 6 = ?", "8", ["6", "7", "8", "9"]),
          choice("20 - 9 = ?", "11", ["10", "11", "12", "13"]),
          choice("7 - 1 = ?", "6", ["5", "6", "7", "8"]),
          choice("16 - 4 = ?", "12", ["11", "12", "13", "14"]),
          choice("13 - 8 = ?", "5", ["4", "5", "6", "7"])
        ]
      }
    ],
    deutsch: [
      {
        id: "reimwoerter",
        title: "Reimwoerter",
        description: "Finde das Wort, das sich reimt.",
        mode: "choice",
        tasks: [
          choice("Was reimt sich auf Haus?", "Maus", ["Baum", "Maus", "Tisch", "Lampe"]),
          choice("Was reimt sich auf Ball?", "Fall", ["Fall", "Buch", "Sonne", "Kind"]),
          choice("Was reimt sich auf Hase?", "Nase", ["Nase", "Wiese", "Hund", "Rot"]),
          choice("Was reimt sich auf See?", "Schnee", ["Schnee", "Stift", "Tor", "Mann"]),
          choice("Was reimt sich auf Licht?", "Gesicht", ["Gesicht", "Auto", "Blume", "Wald"])
        ]
      },
      {
        id: "anfangslaute",
        title: "Anfangslaute",
        description: "Hoere und erkenne den ersten Buchstaben.",
        mode: "choice",
        tasks: [
          choice("Mit welchem Buchstaben beginnt Apfel?", "A", ["A", "M", "S", "T"]),
          choice("Mit welchem Buchstaben beginnt Ball?", "B", ["D", "B", "L", "R"]),
          choice("Mit welchem Buchstaben beginnt Sonne?", "S", ["F", "M", "S", "N"]),
          choice("Mit welchem Buchstaben beginnt Maus?", "M", ["A", "M", "P", "U"]),
          choice("Mit welchem Buchstaben beginnt Tisch?", "T", ["K", "I", "T", "W"])
        ]
      }
    ]
  },
  "2": {
    mathe: [
      {
        id: "plus-bis-100",
        title: "Plus bis 100",
        description: "Rechne mit Zehnern und Einern.",
        mode: "input",
        tasks: [
          task("34 + 20 = ?", "54"),
          task("47 + 8 = ?", "55"),
          task("61 + 9 = ?", "70"),
          task("25 + 16 = ?", "41"),
          task("58 + 7 = ?", "65"),
          task("40 + 35 = ?", "75"),
          task("29 + 11 = ?", "40"),
          task("73 + 6 = ?", "79"),
          task("18 + 27 = ?", "45"),
          task("52 + 19 = ?", "71")
        ]
      },
      {
        id: "uhrzeiten",
        title: "Uhrzeiten",
        description: "Lies einfache Zeiten.",
        mode: "choice",
        tasks: [
          choice("Welche Uhrzeit ist 30 Minuten nach 8:00?", "8:30", ["8:15", "8:30", "9:00", "9:30"]),
          choice("Welche Uhrzeit ist eine Stunde nach 6:00?", "7:00", ["5:00", "6:30", "7:00", "8:00"]),
          choice("Welche Uhrzeit ist 15 Minuten nach 10:00?", "10:15", ["10:15", "10:30", "11:00", "9:45"]),
          choice("Welche Uhrzeit ist 30 Minuten vor 12:00?", "11:30", ["11:00", "11:30", "12:30", "10:30"])
        ]
      }
    ],
    deutsch: [
      {
        id: "nomen-erkennen",
        title: "Nomen erkennen",
        description: "Welche Woerter sind Namenwoerter?",
        mode: "choice",
        tasks: [
          choice("Welches Wort ist ein Nomen?", "Hund", ["laufen", "Hund", "schnell", "blau"]),
          choice("Welches Wort ist ein Nomen?", "Schule", ["klein", "Schule", "springen", "warm"]),
          choice("Welches Wort ist ein Nomen?", "Blume", ["Blume", "rot", "singen", "leise"]),
          choice("Welches Wort ist ein Nomen?", "Kind", ["malen", "gut", "Kind", "rund"])
        ]
      },
      {
        id: "satzzeichen",
        title: "Satzzeichen",
        description: "Punkt, Fragezeichen oder Ausrufezeichen?",
        mode: "choice",
        tasks: [
          choice("Wie heisst du", "?", [".", "?", "!"]),
          choice("Ich lese ein Buch", ".", [".", "?", "!"]),
          choice("Pass auf", "!", [".", "?", "!"]),
          choice("Wo ist mein Stift", "?", [".", "?", "!"])
        ]
      }
    ]
  },
  "3": {
    mathe: [
      {
        id: "einmaleins",
        title: "Einmaleins",
        description: "Trainiere Malaufgaben.",
        mode: "input",
        tasks: [
          task("3 x 4 = ?", "12"),
          task("6 x 7 = ?", "42"),
          task("8 x 5 = ?", "40"),
          task("9 x 3 = ?", "27"),
          task("4 x 4 = ?", "16"),
          task("7 x 8 = ?", "56"),
          task("6 x 6 = ?", "36"),
          task("9 x 9 = ?", "81"),
          task("2 x 8 = ?", "16"),
          task("5 x 7 = ?", "35")
        ]
      },
      {
        id: "geteilt",
        title: "Geteilt",
        description: "Teile Zahlen gerecht auf.",
        mode: "choice",
        tasks: [
          choice("24 : 6 = ?", "4", ["3", "4", "5", "6"]),
          choice("36 : 4 = ?", "9", ["6", "8", "9", "12"]),
          choice("45 : 5 = ?", "9", ["7", "8", "9", "10"]),
          choice("56 : 7 = ?", "8", ["6", "7", "8", "9"]),
          choice("81 : 9 = ?", "9", ["7", "8", "9", "10"])
        ]
      }
    ],
    deutsch: [
      {
        id: "wortarten",
        title: "Wortarten",
        description: "Nomen, Verb oder Adjektiv?",
        mode: "choice",
        tasks: [
          choice("Welche Wortart ist schwimmen?", "Verb", ["Nomen", "Verb", "Adjektiv"]),
          choice("Welche Wortart ist freundlich?", "Adjektiv", ["Nomen", "Verb", "Adjektiv"]),
          choice("Welche Wortart ist Fahrrad?", "Nomen", ["Nomen", "Verb", "Adjektiv"]),
          choice("Welche Wortart ist lachen?", "Verb", ["Nomen", "Verb", "Adjektiv"])
        ]
      },
      {
        id: "lesecheck",
        title: "Lesecheck",
        description: "Verstehe kurze Saetze.",
        mode: "choice",
        tasks: [
          choice("Mila stellt den Becher auf den Tisch. Wo ist der Becher?", "Auf dem Tisch", ["Unter dem Tisch", "Auf dem Tisch", "Im Ranzen"]),
          choice("Tom zieht die rote Jacke an. Welche Farbe hat die Jacke?", "Rot", ["Blau", "Gruen", "Rot"]),
          choice("Im Garten wachsen drei Tulpen. Wie viele Tulpen wachsen dort?", "Drei", ["Zwei", "Drei", "Vier"])
        ]
      }
    ]
  },
  "4": {
    mathe: [
      {
        id: "textaufgaben",
        title: "Textaufgaben",
        description: "Lies genau und rechne.",
        mode: "input",
        tasks: [
          task("Lina hat 24 Sticker. Sie bekommt 18 dazu. Wie viele Sticker hat sie?", "42"),
          task("Ein Bus hat 48 Plaetze. 35 Kinder sitzen darin. Wie viele Plaetze sind frei?", "13"),
          task("4 Kinder teilen 32 Murmeln gerecht. Wie viele bekommt jedes Kind?", "8"),
          task("Ein Heft kostet 3 Euro. Was kosten 7 Hefte?", "21"),
          task("Noah liest jeden Tag 9 Seiten. Wie viele Seiten liest er in 6 Tagen?", "54")
        ]
      },
      {
        id: "zahlenraum-1000",
        title: "Zahlen bis 1000",
        description: "Addieren und subtrahieren mit groesseren Zahlen.",
        mode: "choice",
        tasks: [
          choice("430 + 250 = ?", "680", ["580", "670", "680", "780"]),
          choice("900 - 120 = ?", "780", ["720", "780", "820", "880"]),
          choice("365 + 110 = ?", "475", ["465", "475", "485", "575"]),
          choice("700 - 455 = ?", "245", ["235", "245", "255", "345"])
        ]
      }
    ],
    deutsch: [
      {
        id: "faelle",
        title: "Faelle entdecken",
        description: "Frage nach Satzgliedern.",
        mode: "choice",
        tasks: [
          choice("Der Hund jagt den Ball. Wen oder was jagt der Hund?", "den Ball", ["der Hund", "den Ball", "jagt"]),
          choice("Mia gibt dem Freund ein Buch. Wem gibt Mia ein Buch?", "dem Freund", ["Mia", "dem Freund", "ein Buch"]),
          choice("Das Fahrrad gehoert dem Kind. Wem gehoert das Fahrrad?", "dem Kind", ["Das Fahrrad", "dem Kind", "gehoert"])
        ]
      },
      {
        id: "rechtschreibung",
        title: "Rechtschreibung",
        description: "Waehle die richtige Schreibweise.",
        mode: "choice",
        tasks: [
          choice("Welche Schreibweise ist richtig?", "Fahrrad", ["Fahrad", "Fahrrad", "Farad"]),
          choice("Welche Schreibweise ist richtig?", "Schluessel", ["Schluessel", "Schlusel", "Schluesselr"]),
          choice("Welche Schreibweise ist richtig?", "naemlich", ["nemlich", "naemlich", "naemlig"])
        ]
      }
    ]
  }
};

const state = {
  grade: null,
  subject: null,
  packageId: null,
  currentIndex: 0,
  answers: []
};

const app = document.querySelector("#app");
const progressDots = document.querySelector("#progressDots");

document.querySelector("[data-action='home']").addEventListener("click", renderHome);

function task(question, answer) {
  return { question, answer };
}

function choice(question, answer, options) {
  return { question, answer, options };
}

function normalizeAnswer(value) {
  return String(value).trim().toLowerCase().replaceAll("ä", "ae").replaceAll("ö", "oe").replaceAll("ü", "ue").replaceAll("ß", "ss");
}

function currentPackage() {
  return packages[state.grade][state.subject].find((item) => item.id === state.packageId);
}

function resetPractice() {
  state.currentIndex = 0;
  state.answers = [];
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
        <h1 id="home-title">Lernen darf sich leicht anfuehlen.</h1>
        <p>Waehle deine Klasse und starte ein kleines Aufgabenpaket. Jede Runde ist kurz, freundlich und sofort spielbar.</p>
        <div class="choice-grid" aria-label="Klassenstufe auswaehlen">
          ${grades.map((grade) => cardButton(grade.title, grade.hint, `select-grade`, grade.id, "choice-card")).join("")}
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
    ${stageHeader("Fach auswaehlen", "Was moechtest du heute ueben?", true)}
    <div class="choice-grid">
      ${subjects.map((subject) => cardButton(subject.title, subject.hint, "select-subject", subject.id, "choice-card")).join("")}
    </div>
  `);
}

function renderPackageSelection() {
  const items = packages[state.grade][state.subject];
  updateDots();
  setScreen(`
    ${stageHeader("Aufgabenpaket waehlen", "Such dir eine Runde aus. Die meisten Pakete haben etwa 10 Aufgaben.", true)}
    <div class="package-grid">
      ${items.map((item) => cardButton(item.title, `${item.description} ${item.tasks.length} Aufgaben.`, "select-package", item.id, "package-card")).join("")}
    </div>
  `);
}

function renderPractice() {
  const pack = currentPackage();
  const currentTask = pack.tasks[state.currentIndex];
  updateDots(pack.tasks.length, state.answers.length);

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
        <button class="primary-action" type="submit">Pruefen</button>
      </form>`;

  setScreen(`
    ${stageHeader(pack.title, "Lies die Aufgabe und antworte in Ruhe.", true)}
    <section class="practice-layout">
      <div class="task-panel">
        <p class="question-count">Aufgabe ${state.currentIndex + 1} von ${pack.tasks.length}</p>
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
  const percent = Math.round((correctCount / pack.tasks.length) * 100);
  updateDots(pack.tasks.length, pack.tasks.length);

  const message = percent >= 90
    ? "Super Runde!"
    : percent >= 70
      ? "Gut gemacht!"
      : "Weiter ueben lohnt sich!";

  setScreen(`
    ${stageHeader("Fertig!", "Hier siehst du, wie die Runde gelaufen ist.", false)}
    <section class="summary-grid">
      <div class="result-panel">
        <p class="result-number">${percent}%</p>
        <h2>${message}</h2>
        <p>${correctCount} von ${pack.tasks.length} Aufgaben waren richtig.</p>
        <div class="actions-row">
          <button class="primary-action" type="button" data-action="retry-package">Nochmal ueben</button>
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
      ${showBack ? `<button class="ghost-action" type="button" data-action="go-back">Zurueck</button>` : ""}
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
  const pack = currentPackage();
  const currentTask = pack.tasks[state.currentIndex];
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
    if (state.currentIndex >= pack.tasks.length) {
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
    resetPractice();
    renderPractice();
  }

  if (action === "answer-choice") {
    answerQuestion(value);
  }

  if (action === "go-back") {
    goBack();
  }

  if (action === "retry-package") {
    resetPractice();
    renderPractice();
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
