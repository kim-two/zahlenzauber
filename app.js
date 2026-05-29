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
      mathPackage("uhr-ablesen", "Uhr ablesen", "Erkenne die Uhrzeit auf einer Uhr mit Zeigern.", "choice", 10, makeAnalogClockTask),
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
      mathPackage("zahlenraum-1000-klasse-3", "Zahlen bis 1000", "Stellenwert, Nachbarzahlen und Zahlenvergleich.", "choice", 10, makeNumberSenseGrade3),
      mathPackage("addieren-subtrahieren-klasse-3", "Addieren und Subtrahieren", "Rechne mit zwei- und dreistelligen Zahlen.", "input", 10, makeAddSubtractGrade3),
      mathPackage("mal-geteilt-rest-klasse-3", "Mal und Geteilt", "Übe Einmaleins, Teilen und Restaufgaben.", "choice", 10, makeMultiplyDivideGrade3),
      mathPackage("geld-zeit-klasse-3", "Geld und Zeit", "Rechne mit Euro, Cent und Zeitspannen.", "choice", 10, makeMoneyTimeGrade3),
      mathPackage("masse-klasse-3", "Maßeinheiten", "Wandle Längen und Gewichte um.", "input", 10, makeUnitsGrade3),
      mathPackage("geometrie-logik-klasse-3", "Geometrie und Logik", "Körper, Muster und Kombinationen.", "choice", 10, makeGeometryLogicGrade3)
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
      mathPackage("zahlenraum-million-klasse-4", "Zahlen bis 1.000.000", "Lies, runde und vergleiche große Zahlen.", "choice", 10, makeNumberSenseGrade4),
      mathPackage("schriftlich-rechnen-klasse-4", "Schriftlich rechnen", "Addition, Subtraktion, Multiplikation und Division.", "input", 10, makeWrittenArithmeticGrade4),
      mathPackage("groessen-klasse-4", "Größen und Maße", "Rechne mit Längen, Gewichten, Zeiten und Geld.", "choice", 10, makeUnitsGrade4),
      mathPackage("geometrie-klasse-4", "Geometrie", "Umfang, Flächeninhalt, Winkel und Körper.", "choice", 10, makeGeometryGrade4),
      mathPackage("sachaufgaben-klasse-4", "Sachaufgaben", "Löse mehrschrittige Alltagsprobleme.", "input", 10, makeStoryProblemGrade4)
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
  tasks: [],
  stars: 0,
  awardedThisRun: false,
  garden: []
};

const gardenItems = [
  { id: "sunflower", title: "Sonnenblume", icon: "☀", cost: 1, className: "sunflower", kind: "flower" },
  { id: "tulip", title: "Tulpe", icon: "♥", cost: 1, className: "tulip", kind: "flower" },
  { id: "berry", title: "Beerenbusch", icon: "●", cost: 2, className: "berry", kind: "bush" },
  { id: "tree", title: "Apfelbaum", icon: "◆", cost: 3, className: "tree", kind: "tree" }
];

const growthStages = [
  { id: "seed", title: "Samen", minAge: 0 },
  { id: "sprout", title: "Spross", minAge: 10 },
  { id: "bud", title: "Knospe", minAge: 25 },
  { id: "grown", title: "Gewachsen", minAge: 45 }
];

const app = document.querySelector("#app");
const progressDots = document.querySelector("#progressDots");
const starCount = document.querySelector("#starCount");

document.querySelector("[data-action='home']").addEventListener("click", renderHome);
document.querySelector("[data-action='open-garden']").addEventListener("click", renderGarden);

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
    const key = `${nextTask.question}|${nextTask.answer}`;
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

function makeAnalogClockTask() {
  const hour = randomInt(1, 12);
  const minutes = [0, 15, 30, 45][randomInt(0, 3)];
  const answer = `${hour}:${String(minutes).padStart(2, "0")}`;
  const options = new Set([answer]);

  while (options.size < 4) {
    const candidateHour = randomInt(1, 12);
    const candidateMinutes = [0, 15, 30, 45][randomInt(0, 3)];
    options.add(`${candidateHour}:${String(candidateMinutes).padStart(2, "0")}`);
  }

  return {
    ...choice("Wie spät ist es auf der Uhr?", answer, shuffle([...options])),
    clock: {
      hour,
      minutes,
      hourDegrees: (hour % 12) * 30 + minutes * 0.5,
      minuteDegrees: minutes * 6
    }
  };
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

function formatNumber(value) {
  return new Intl.NumberFormat("de-DE").format(value);
}

function makeNumberSenseGrade3() {
  const templates = [
    () => {
      const number = randomInt(120, 980);
      const options = shuffle([number - 1, number + 1, number + 10, number - 10].filter((item) => item > 0));
      return choice(`Welche Zahl ist der Nachfolger von ${number}?`, number + 1, options);
    },
    () => {
      const hundreds = randomInt(2, 9);
      const tens = randomInt(0, 9);
      const ones = randomInt(0, 9);
      return choice(`Welche Zahl hat ${hundreds} Hunderter, ${tens} Zehner und ${ones} Einer?`, hundreds * 100 + tens * 10 + ones, shuffle([
        hundreds * 100 + tens * 10 + ones,
        tens * 100 + hundreds * 10 + ones,
        hundreds * 100 + ones * 10 + tens,
        hundreds * 100 + tens + ones
      ]));
    },
    () => {
      const a = randomInt(120, 980);
      const b = randomInt(120, 980);
      return choice(`Welche Zahl ist größer?`, Math.max(a, b), shuffle([a, b]));
    },
    () => {
      const number = randomInt(101, 999);
      const rounded = Math.round(number / 10) * 10;
      return choice(`Runde ${number} auf den nächsten Zehner.`, rounded, shuffle([rounded, rounded - 10, rounded + 10, rounded + 20].filter((item) => item > 0)));
    }
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeAddSubtractGrade3() {
  if (Math.random() > 0.5) {
    const left = randomInt(120, 780);
    const right = randomInt(35, 1000 - left);
    return task(`${left} + ${right} = ?`, left + right);
  }

  const answer = randomInt(80, 850);
  const subtract = randomInt(25, 1000 - answer);
  return task(`${answer + subtract} - ${subtract} = ?`, answer);
}

function makeMultiplyDivideGrade3() {
  const templates = [
    () => makeMultiplication(3, 10, 3, 10),
    () => makeDivision(2, 12, 2, 10),
    () => {
      const divisor = randomInt(3, 9);
      const answer = randomInt(3, 12);
      const rest = randomInt(1, divisor - 1);
      const number = answer * divisor + rest;
      return choice(`${number} : ${divisor} = ?`, `${answer} Rest ${rest}`, shuffle([
        `${answer} Rest ${rest}`,
        `${answer + 1} Rest ${rest}`,
        `${answer} Rest ${Math.max(0, rest - 1)}`,
        `${answer - 1} Rest ${rest + 1}`
      ]));
    }
  ];

  const generated = templates[randomInt(0, templates.length - 1)]();
  return generated.options ? generated : withOptions(generated);
}

function makeMoneyTimeGrade3() {
  const templates = [
    () => {
      const euro = randomInt(2, 12);
      const cent = [10, 20, 30, 40, 50, 60, 70, 80, 90][randomInt(0, 8)];
      const total = euro * 100 + cent;
      return choice(`${euro} Euro und ${cent} Cent sind wie viele Cent?`, `${total} Cent`, shuffle([
        `${total} Cent`,
        `${total - 10} Cent`,
        `${total + 10} Cent`,
        `${euro + cent} Cent`
      ]));
    },
    () => {
      const startHour = randomInt(7, 16);
      const minutes = [15, 30, 45, 60, 75, 90][randomInt(0, 5)];
      const endTotal = startHour * 60 + minutes;
      const end = `${Math.floor(endTotal / 60)}:${String(endTotal % 60).padStart(2, "0")}`;
      return choice(`Ein Training beginnt um ${startHour}:00 Uhr und dauert ${minutes} Minuten. Wann endet es?`, end, shuffle([
        end,
        `${startHour}:${String(minutes).padStart(2, "0")}`,
        `${startHour + 1}:00`,
        `${Math.floor((endTotal + 15) / 60)}:${String((endTotal + 15) % 60).padStart(2, "0")}`
      ]));
    }
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeUnitsGrade3() {
  const templates = [
    () => {
      const meters = randomInt(2, 9);
      const centimeters = randomInt(10, 90);
      return task(`${meters} m ${centimeters} cm = ? cm`, meters * 100 + centimeters);
    },
    () => {
      const kilograms = randomInt(1, 8);
      const grams = randomInt(100, 900);
      return task(`${kilograms} kg ${grams} g = ? g`, kilograms * 1000 + grams);
    },
    () => {
      const centimeters = randomInt(3, 30);
      return task(`${centimeters} cm = ? mm`, centimeters * 10);
    }
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeGeometryLogicGrade3() {
  const templates = [
    () => choice("Welcher Körper hat 6 gleich große quadratische Flächen?", "Würfel", shuffle(["Würfel", "Quader", "Kugel", "Zylinder"])),
    () => choice("Welcher Körper kann rollen und hat keine Ecken?", "Kugel", shuffle(["Würfel", "Kugel", "Quader", "Pyramide"])),
    () => {
      const shirts = randomInt(2, 4);
      const pants = randomInt(2, 4);
      return choice(`${shirts} T-Shirts und ${pants} Hosen: Wie viele verschiedene Outfits sind möglich?`, shirts * pants, shuffle([shirts * pants, shirts + pants, shirts * pants + 1, shirts * pants - 1]));
    },
    () => choice("Welche Figur hat genau 4 gleich lange Seiten?", "Quadrat", shuffle(["Rechteck", "Dreieck", "Quadrat", "Kreis"]))
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeStoryProblemGrade4() {
  const templates = [
    () => {
      const classes = randomInt(3, 6);
      const children = randomInt(18, 28);
      const price = randomInt(4, 9);
      return task(`${classes} Klassen mit je ${children} Kindern fahren ins Museum. Der Eintritt kostet ${price} Euro pro Kind. Wie viele Euro kostet der Eintritt zusammen?`, classes * children * price);
    },
    () => {
      const boxes = randomInt(8, 16);
      const perBox = randomInt(12, 24);
      const sold = randomInt(35, 95);
      return task(`Eine Bäckerei backt ${boxes} Kisten mit je ${perBox} Brötchen. ${sold} Brötchen werden verkauft. Wie viele bleiben übrig?`, boxes * perBox - sold);
    },
    () => {
      const meters = randomInt(24, 60);
      const price = randomInt(6, 14);
      const discount = randomInt(20, 80);
      return task(`Ein Verein kauft ${meters} m Stoff. Ein Meter kostet ${price} Euro. Es gibt ${discount} Euro Rabatt. Wie viel Euro muss der Verein bezahlen?`, meters * price - discount);
    }
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeNumberSenseGrade4() {
  const templates = [
    () => {
      const number = randomInt(100000, 999999);
      const rounded = Math.round(number / 1000) * 1000;
      return choice(`Runde ${formatNumber(number)} auf Tausender.`, formatNumber(rounded), shuffle([
        formatNumber(rounded),
        formatNumber(rounded + 1000),
        formatNumber(Math.max(0, rounded - 1000)),
        formatNumber(Math.round(number / 100) * 100)
      ]));
    },
    () => {
      const a = randomInt(100000, 999999);
      const b = randomInt(100000, 999999);
      return choice(`Welche Zahl ist kleiner?`, formatNumber(Math.min(a, b)), shuffle([formatNumber(a), formatNumber(b)]));
    },
    () => {
      const number = randomInt(100000, 999999);
      const hundredThousands = Math.floor(number / 100000);
      return choice(`Wie viele Hunderttausender hat ${formatNumber(number)}?`, hundredThousands, shuffle([hundredThousands, hundredThousands + 1, Math.max(0, hundredThousands - 1), Math.floor(number / 10000)]));
    }
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeWrittenArithmeticGrade4() {
  const templates = [
    () => {
      const left = randomInt(12000, 85000);
      const right = randomInt(4000, 99000);
      return task(`${formatNumber(left)} + ${formatNumber(right)} = ?`, left + right);
    },
    () => {
      const answer = randomInt(8000, 90000);
      const subtract = randomInt(3000, 70000);
      return task(`${formatNumber(answer + subtract)} - ${formatNumber(subtract)} = ?`, answer);
    },
    () => {
      const left = randomInt(120, 980);
      const right = randomInt(12, 49);
      return task(`${left} x ${right} = ?`, left * right);
    },
    () => {
      const divisor = randomInt(12, 25);
      const answer = randomInt(20, 80);
      return task(`${divisor * answer} : ${divisor} = ?`, answer);
    }
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeUnitsGrade4() {
  const templates = [
    () => {
      const kilometers = randomInt(2, 12);
      const meters = randomInt(100, 900);
      return choice(`${kilometers} km ${meters} m = ? m`, formatNumber(kilometers * 1000 + meters), shuffle([
        formatNumber(kilometers * 1000 + meters),
        formatNumber(kilometers * 100 + meters),
        formatNumber(kilometers * 1000 - meters),
        formatNumber(kilometers + meters)
      ]));
    },
    () => {
      const hours = randomInt(1, 5);
      const minutes = randomInt(10, 50);
      return choice(`${hours} h ${minutes} min = ? min`, hours * 60 + minutes, shuffle([hours * 60 + minutes, hours * 100 + minutes, hours * 60 - minutes, hours + minutes]));
    },
    () => {
      const price = randomInt(125, 975);
      const count = randomInt(3, 9);
      const total = price * count;
      return choice(`${count} Hefte kosten je ${(price / 100).toFixed(2).replace(".", ",")} Euro. Wie viel Cent sind das zusammen?`, `${total} Cent`, shuffle([
        `${total} Cent`,
        `${price + count} Cent`,
        `${total - 100} Cent`,
        `${total + 100} Cent`
      ]));
    },
    () => {
      const kilograms = randomInt(2, 12);
      const grams = randomInt(100, 900);
      return choice(`${kilograms} kg ${grams} g = ? g`, formatNumber(kilograms * 1000 + grams), shuffle([
        formatNumber(kilograms * 1000 + grams),
        formatNumber(kilograms * 100 + grams),
        formatNumber(kilograms * 1000 - grams),
        formatNumber(kilograms + grams)
      ]));
    }
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function makeGeometryGrade4() {
  const templates = [
    () => {
      const length = randomInt(5, 18);
      const width = randomInt(3, 12);
      return choice(`Ein Rechteck ist ${length} cm lang und ${width} cm breit. Wie groß ist der Umfang?`, `${2 * (length + width)} cm`, shuffle([
        `${2 * (length + width)} cm`,
        `${length * width} cm`,
        `${length + width} cm`,
        `${2 * length + width} cm`
      ]));
    },
    () => {
      const length = randomInt(5, 18);
      const width = randomInt(3, 12);
      return choice(`Ein Rechteck ist ${length} cm lang und ${width} cm breit. Wie groß ist der Flächeninhalt?`, `${length * width} cm²`, shuffle([
        `${length * width} cm²`,
        `${2 * (length + width)} cm²`,
        `${length + width} cm²`,
        `${length * width + length} cm²`
      ]));
    },
    () => choice("Welche Aussage passt zu parallelen Linien?", "Sie haben überall den gleichen Abstand.", shuffle([
      "Sie haben überall den gleichen Abstand.",
      "Sie schneiden sich immer im rechten Winkel.",
      "Sie sind immer gleich lang.",
      "Sie bilden immer einen Kreis."
    ])),
    () => choice("Welcher Körper hat 8 Ecken, 12 Kanten und 6 Flächen?", "Quader", shuffle(["Kugel", "Quader", "Zylinder", "Kegel"]))
  ];

  return templates[randomInt(0, templates.length - 1)]();
}

function normalizeAnswer(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replaceAll(".", "")
    .replaceAll(" ", "")
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
  state.awardedThisRun = false;
}

function startPractice() {
  resetPractice();
  state.tasks = createTasks(currentPackage());
  renderPractice();
}

function setScreen(html) {
  app.innerHTML = html;
  updateStars();
  app.focus({ preventScroll: true });
}

function updateStars() {
  starCount.textContent = String(state.stars);
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
  const clockVisual = currentTask.clock ? renderClock(currentTask.clock) : "";

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
        ${clockVisual}
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

function renderClock(clock) {
  return `
    <div class="clock-face" aria-label="Uhr mit Zeigern">
      ${Array.from({ length: 12 }, (_, index) => {
        const number = index + 1;
        const angle = number * 30;
        return `<span class="clock-number" style="--angle: ${angle}deg">${number}</span>`;
      }).join("")}
      <span class="clock-hand hour-hand" style="--hand-angle: ${clock.hourDegrees}deg"></span>
      <span class="clock-hand minute-hand" style="--hand-angle: ${clock.minuteDegrees}deg"></span>
      <span class="clock-center"></span>
    </div>
  `;
}

function renderSummary() {
  const pack = currentPackage();
  const correctCount = state.answers.filter((answer) => answer.correct).length;
  const percent = Math.round((correctCount / state.tasks.length) * 100);
  const earnedStar = percent === 100 && !state.awardedThisRun;
  if (earnedStar) {
    state.stars += 1;
    state.awardedThisRun = true;
  }
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
        ${percent === 100 ? `
          <div class="reward-box">
            <span class="reward-star" aria-hidden="true">★</span>
            <p><strong>Stern verdient!</strong><br>Du hast jetzt ${state.stars} ${state.stars === 1 ? "Stern" : "Sterne"} in dieser Session.</p>
          </div>
        ` : ""}
        <div class="actions-row">
          <button class="primary-action" type="button" data-action="retry-package">Nochmal üben</button>
          <button class="ghost-action" type="button" data-action="back-packages">Anderes Paket</button>
          <button class="ghost-action" type="button" data-action="open-garden">Zum Sternen-Garten</button>
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

function renderGarden(message = "") {
  updateDots();
  scheduleGardenGrowth();
  const plantedCount = state.garden.length;
  const plots = Array.from({ length: 8 }, (_, index) => state.garden[index] || null);

  setScreen(`
    <section class="stage-header">
      <div>
        <div class="breadcrumb"><span class="pill">${state.stars} ${state.stars === 1 ? "Stern" : "Sterne"}</span></div>
        <h1 class="section-title">Sternen-Garten</h1>
        <p class="section-lead">Tausche Sterne gegen Pflanzen ein und fülle deinen Garten in dieser Session.</p>
      </div>
      <button class="ghost-action" type="button" data-action="home">Zur Startseite</button>
    </section>

    <section class="garden-layout">
      <div class="garden-panel">
        <div class="garden-sky" aria-hidden="true">
          <span></span>
        </div>
        <div class="garden-beds" aria-label="Deine Gartenbeete">
          ${plots.map((item, index) => renderGardenPlot(item, index)).join("")}
        </div>
      </div>

      <aside class="garden-shop">
        <h2>Pflanzen kaufen</h2>
        <p>${plantedCount} von 8 Beeten sind bepflanzt.</p>
        ${message ? `<div class="garden-message" role="status">${message}</div>` : ""}
        <div class="garden-shop-list">
          ${gardenItems.map(renderGardenShopItem).join("")}
        </div>
      </aside>
    </section>
  `);
}

function renderGardenPlot(item, index) {
  if (!item) {
    return `
      <div class="garden-plot empty">
        <span class="plot-number">${index + 1}</span>
      </div>
    `;
  }

  const stage = getGrowthStage(item);

  return `
    <div class="garden-plot planted ${item.className} growth-${stage.id}">
      <span class="plant-stem" aria-hidden="true"></span>
      <span class="plant-leaf leaf-left" aria-hidden="true"></span>
      <span class="plant-leaf leaf-right" aria-hidden="true"></span>
      <span class="plant-icon" aria-hidden="true">${item.icon}</span>
      <strong>${item.title}<small>${stage.title}</small></strong>
    </div>
  `;
}

function renderGardenShopItem(item) {
  const canBuy = state.stars >= item.cost && state.garden.length < 8;
  return `
    <button class="garden-shop-item" type="button" data-action="buy-garden-item" data-value="${item.id}" ${canBuy ? "" : "disabled"}>
      <span class="shop-plant ${item.className}" aria-hidden="true">${item.icon}</span>
      <span>
        <strong>${item.title}</strong>
        <small>${item.cost} ${item.cost === 1 ? "Stern" : "Sterne"}</small>
      </span>
    </button>
  `;
}

function buyGardenItem(itemId) {
  const item = gardenItems.find((gardenItem) => gardenItem.id === itemId);
  if (!item) return;

  if (state.garden.length >= 8) {
    renderGarden("Dein Garten ist schon voll.");
    return;
  }

  if (state.stars < item.cost) {
    renderGarden("Dafür brauchst du noch mehr Sterne.");
    return;
  }

  state.stars -= item.cost;
  state.garden.push({ ...item, plantedAt: Date.now() });
  updateStars();
  renderGarden(`${item.title} wurde gepflanzt.`);
}

function getGrowthStage(item) {
  const ageSeconds = Math.floor((Date.now() - item.plantedAt) / 1000);
  return growthStages.reduce((currentStage, stage) => {
    return ageSeconds >= stage.minAge ? stage : currentStage;
  }, growthStages[0]);
}

function scheduleGardenGrowth() {
  window.clearTimeout(state.gardenTimer);
  if (!state.garden.length) return;

  state.gardenTimer = window.setTimeout(() => {
    if (app.querySelector(".garden-layout")) {
      renderGarden();
    }
  }, 5000);
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

  if (action === "open-garden") {
    renderGarden();
  }

  if (action === "home") {
    renderHome();
  }

  if (action === "buy-garden-item") {
    buyGardenItem(value);
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
