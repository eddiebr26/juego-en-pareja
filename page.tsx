<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport"
      content="width=device-width, initial-scale=1.0,
      maximum-scale=1.0,user-scalable=no">

<title>Edili & Carolan 💕</title>

<style>

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

:root{
    --rosa:#d85b8b;
    --rosa-claro:#f9dce8;
    --rosa-suave:#fff1f6;
    --crema:#fffaf7;
    --vino:#633b4b;
    --blanco:#ffffff;
    --sombra:0 15px 45px rgba(99,59,75,.13);
}

body{
    min-height:100vh;
    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
    color:var(--vino);
    background:
        radial-gradient(circle at top left,#ffe8f0,transparent 40%),
        radial-gradient(circle at bottom right,#f6d9e7,transparent 40%),
        var(--crema);
}

.app{
    width:100%;
    max-width:650px;
    margin:auto;
    padding:18px 15px 45px;
}

.topbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:15px;
}

.logo{
    font-weight:800;
    font-size:18px;
}

.badge{
    background:white;
    padding:7px 12px;
    border-radius:50px;
    font-size:12px;
    border:1px solid #efd8e2;
}

.card{
    background:rgba(255,255,255,.96);
    border-radius:28px;
    padding:25px 20px;
    box-shadow:var(--sombra);
    border:1px solid #f3e0e8;
}

.center{
    text-align:center;
}

.hidden{
    display:none!important;
}

h1{
    font-size:30px;
    line-height:1.08;
    margin:10px 0 13px;
}

.subtitle{
    font-size:15px;
    line-height:1.55;
    opacity:.72;
}

.category{
    color:var(--rosa);
    font-size:12px;
    font-weight:900;
    text-transform:uppercase;
    letter-spacing:.08em;
}

.question{
    font-size:25px;
    line-height:1.25;
    margin:13px 0 20px;
}

.primary{
    width:100%;
    border:0;
    border-radius:17px;
    padding:16px;
    background:var(--rosa);
    color:white;
    font-weight:800;
    font-size:16px;
    cursor:pointer;
}

.secondary{
    border:1px solid #ead3de;
    background:white;
    color:var(--vino);
    border-radius:15px;
    padding:12px 16px;
    font-weight:700;
    cursor:pointer;
}

.note{
    font-size:12px;
    opacity:.58;
    margin-top:12px;
    line-height:1.4;
}

.progress-wrap{
    margin:5px 0 20px;
}

.progress-info{
    display:flex;
    justify-content:space-between;
    font-size:12px;
    opacity:.55;
    margin-bottom:7px;
}

.progress{
    width:100%;
    height:7px;
    background:#f2e3e9;
    border-radius:50px;
    overflow:hidden;
}

.progress-bar{
    height:100%;
    width:0%;
    background:var(--rosa);
    border-radius:50px;
    transition:.35s;
}

textarea{
    width:100%;
    min-height:145px;
    border:1px solid #e9d3dd;
    border-radius:18px;
    padding:15px;
    font:inherit;
    color:var(--vino);
    resize:vertical;
    outline:none;
    background:#fffdfd;
    margin-bottom:12px;
}

textarea:focus{
    border-color:var(--rosa);
    box-shadow:0 0 0 4px rgba(216,91,139,.10);
}

.choices{
    display:grid;
    gap:9px;
    margin-bottom:14px;
}

.choice{
    background:white;
    border:1px solid #ecd9e2;
    border-radius:15px;
    padding:13px;
    text-align:left;
    cursor:pointer;
    font-weight:650;
    color:var(--vino);
}

.choice.selected{
    border:2px solid var(--rosa);
    background:var(--rosa-suave);
}

.pause-card{
    text-align:center;
}

.pause-icon{
    font-size:45px;
    margin-bottom:10px;
}

.pause-title{
    color:var(--rosa);
    font-weight:900;
    font-size:12px;
    text-transform:uppercase;
    letter-spacing:.08em;
}

.pause-text{
    font-size:22px;
    line-height:1.4;
    font-weight:750;
    margin:18px 0 25px;
}

.secret{
    background:linear-gradient(145deg,#fff1f6,#fff);
    border:1px solid #f1d4e0;
    border-radius:20px;
    padding:17px;
    margin:15px 0;
    font-size:13px;
    line-height:1.5;
}

.characters{
    display:flex;
    justify-content:center;
    align-items:flex-end;
    gap:35px;
    margin:10px 0 25px;
}

.character{
    position:relative;
    width:105px;
    height:135px;
}

.head{
    position:absolute;
    top:5px;
    left:15px;
    width:75px;
    height:75px;
    background:#ffd7bf;
    border:3px solid var(--vino);
    border-radius:50%;
}

.hair{
    position:absolute;
    top:-7px;
    left:-3px;
    width:75px;
    height:52px;
    background:#5b392e;
    border-radius:50px 50px 20px 20px;
}

.hair.dark{
    background:#2c2025;
}

.eyes{
    position:absolute;
    top:42px;
    left:17px;
    font-size:12px;
    letter-spacing:18px;
}

.body{
    position:absolute;
    top:79px;
    left:23px;
    width:60px;
    height:53px;
    background:#e99cbd;
    border:3px solid var(--vino);
    border-radius:25px 25px 15px 15px;
}

.character:nth-child(2) .body{
    background:#b99be0;
}

.heart-float{
    position:absolute;
    right:-3px;
    top:0;
    font-size:22px;
    animation:float 2s ease-in-out infinite;
}

@keyframes float{
    50%{transform:translateY(-5px)}
}

.heart-bg{
    position:fixed;
    pointer-events:none;
    opacity:.15;
    font-size:20px;
}

.final{
    font-size:15px;
    line-height:1.65;
}

.response{
    background:#fffafa;
    border:1px solid #ecdce4;
    border-radius:18px;
    padding:16px;
    margin:12px 0;
}

.response-number{
    color:var(--rosa);
    font-size:12px;
    font-weight:900;
}

.response-question{
    font-weight:800;
    margin:5px 0 9px;
}

.response-answer{
    white-space:pre-wrap;
    line-height:1.5;
    opacity:.85;
}

.admin-title{
    margin-bottom:5px;
}

.lock{
    background:#fff1f6;
    padding:15px;
    border-radius:17px;
    font-size:13px;
    line-height:1.45;
    margin-bottom:15px;
}

.pin{
    width:100%;
    border:1px solid #ead3de;
    border-radius:15px;
    padding:14px;
    margin-bottom:10px;
    font-size:17px;
    text-align:center;
    letter-spacing:5px;
}

</style>
</head>


<body>

<div class="app">

<div class="topbar">
    <div class="logo">Edili & Carolan 💕</div>
    <div class="badge">Solo para ustedes</div>
</div>


<!-- INICIO -->

<section id="home" class="card center">

<div class="characters">

<div class="character">
    <div class="head">
        <div class="hair"></div>
        <div class="eyes">•　•</div>
    </div>
    <div class="body"></div>
    <div class="heart-float">♡</div>
</div>

<div class="character">
    <div class="head">
        <div class="hair dark"></div>
        <div class="eyes">•　•</div>
    </div>
    <div class="body"></div>
    <div class="heart-float">♡</div>
</div>

</div>

<div class="category">
    Una pequeña aventura entre ustedes
</div>

<h1>
    25 preguntas para Carolan 👀
</h1>

<p class="subtitle">
    Un juego para recordar, reír, coquetear,
    descubrir cosas nuevas y sentir un poquito más cerca a Edili,
    incluso cuando están lejos.
</p>

<br>

<button class="primary" onclick="startGame()">
    Comenzar 💗
</button>

<p class="note">
    Puedes jugar discretamente desde el trabajo.
    No necesitas hablar ni hacer nada físicamente.
</p>

</section>



<!-- JUEGO -->

<section id="game" class="card hidden">

<div class="progress-wrap">

<div class="progress-info">
    <span id="questionCounter">Pregunta 1 de 25</span>
    <span id="percent">4%</span>
</div>

<div class="progress">
    <div class="progress-bar" id="progressBar"></div>
</div>

</div>


<!-- PAUSA -->

<div id="pauseScreen" class="pause-card hidden">

<div class="pause-icon" id="pauseIcon">
    💕
</div>

<div class="pause-title" id="pauseTitle">
    PAUSA
</div>

<div class="pause-text" id="pauseText">
    ...
</div>

<button class="primary" onclick="continueFromPause()">
    Continuar →
</button>

</div>


<!-- PREGUNTA -->

<div id="questionScreen">

<div class="category" id="category">
    Conexión
</div>

<div class="question" id="question">
    ...
</div>

<div id="choices" class="choices"></div>

<textarea
id="answer"
placeholder="Escribe tu respuesta aquí…"
></textarea>

<button class="primary" onclick="saveAnswer()">
    Guardar y continuar 💌
</button>

</div>

</section>



<!-- FINAL -->

<section id="finished" class="card center hidden">

<div class="characters">

<div class="character">
    <div class="head">
        <div class="hair"></div>
        <div class="eyes">•　•</div>
    </div>
    <div class="body"></div>
</div>

<div class="character">
    <div class="head">
        <div class="hair dark"></div>
        <div class="eyes">•　•</div>
    </div>
    <div class="body"></div>
</div>

</div>

<div class="category">
    Fin de la aventura
</div>

<h1>
    Terminaste, Carolan ❤️
</h1>

<p class="final">
    Gracias por responder con sinceridad.
    Algunas respuestas quizá hicieron reír,
    otras pensar y alguna que otra probablemente
    te hizo pensar demasiado en Edili. 👀
</p>

<br>

<div class="secret">
    💌 Tus respuestas quedaron guardadas.
    Edili podrá descubrirlas cuando llegue el momento.
</div>

<button class="primary" onclick="openPrivatePanel()">
    Espacio de Edili 🔐
</button>

</section>



<!-- PANEL EDILI -->

<section id="admin" class="card hidden">

<div class="category">
    Espacio privado
</div>

<h1 class="admin-title">
    Respuestas de Carolan 💌
</h1>

<p class="subtitle">
    Aquí aparecen las respuestas guardadas en este dispositivo.
</p>

<br>

<div id="responses"></div>

<button class="secondary" onclick="goHome()">
    Volver
</button>

</section>

</div>



<script>

/* =========================================================
   CONFIGURACIÓN
   =========================================================

   Esta versión funciona inmediatamente utilizando
   almacenamiento del navegador.

   Para sincronizar las respuestas entre el teléfono de
   Carolan y el teléfono de Edili, coloca aquí la URL de
   tu servidor/API.

   Ejemplo:

   const API_URL =
   "https://tuservidor.com/api/respuestas";

   ========================================================= */

const API_URL = "";


/* =========================================================
   PREGUNTAS
   ========================================================= */

const questions = [

{
category:"Conexión",
question:
"¿Qué fue lo primero de Edili que te hizo pensar “cuidado, me puede gustar”?"
},

{
category:"Conexión",
question:
"¿Cuál fue el momento en que dijiste: “ya, esta mujer me tiene”?"
},

{
category:"Picante 🌶️",
question:
"¿Qué momento conmigo te dieron ganas de besarme y tuviste que disimular?"
},

{
category:"Picante 🌶️",
question:
"¿Qué hago yo que todavía consigue ponerte nerviosa?"
},

{
category:"Divertida",
question:
"¿Cuál es la cosa más absurda que hemos hecho juntas y que volverías a hacer?"
},

{
category:"Profunda",
question:
"¿Qué parte de nuestra conexión sientes que es difícil de explicar a otras personas?"
},

{
category:"Especial 👀",
question:
"¿Qué cosa sobre mí descubriste sin que yo te la dijera?"
},

{
category:"Recuerdo",
question:
"¿Cuál ha sido tu momento favorito de “nosotras” hasta ahora?"
},

{
category:"Picante 🌶️",
question:
"¿Qué cosa te gustaría hacer conmigo que todavía no hemos hecho?"
},

{
category:"Especial 👀",
question:
"Si pudieras leer un solo pensamiento mío durante una cita, ¿cuál escogerías?"
},

{
category:"Divertida",
question:
"Si nuestra relación fuera una película, ¿qué título tendría?"
},

{
category:"Especial 💗",
question:
"¿Qué cosa pequeña hago que probablemente nunca voy a saber cuánto significa para ti?"
},

{
category:"Picante 🌶️",
question:
"¿Cuál es mi mirada, gesto o actitud que más te cuesta ignorar?"
},

{
category:"Confesión",
question:
"¿Qué cosa haces conmigo que jamás admitirías delante de tus amigas?"
},

{
category:"Especial 💗",
question:
"¿Qué crees que tenemos nosotras que no tendrías con cualquier persona?"
},

{
category:"Convivencia",
question:
"Si mañana empezáramos a vivir juntas, ¿cuál sería nuestra primera discusión? 😂"
},

{
category:"Aventura",
question:
"Si pudiéramos desaparecer juntas durante 48 horas, ¿a dónde nos iríamos?"
},

{
category:"Recuerdo",
question:
"Si pudieras repetir un solo momento de nuestra historia exactamente igual, ¿cuál sería?"
},

{
category:"Especial 💌",
question:
"¿Qué te gustaría que nunca cambiara entre nosotras?"
},

{
category:"Especial 💌",
question:
"¿Hay algo que todavía quieras decirme pero nunca encuentras el momento?"
},

{
category:"Futuro",
question:
"Si llegamos viejitas juntas, ¿qué crees que recordaríamos como nuestra etapa más loca?"
},

{
category:"Atracción 🌶️",
question:
"Sin pensarlo: ¿qué es lo más atractivo de Edili?"
},

{
category:"Futuro",
question:
"¿Qué crees que podríamos estar haciendo juntas dentro de cinco años?"
},

{
category:"Especial ❤️‍🔥",
question:
"Si tuvieras que describir lo que sientes por mí sin decir “amor”, ¿qué dirías?"
},

{
category:"Final 💌",
question:
"Ahora mismo, si Edili estuviera frente a ti, ¿qué le dirías que quieres que nunca olvide de ustedes?"
}

];


/* =========================================================
   PAUSAS
   ========================================================= */

const pauses = {

2:{
icon:"👀",
title:"PAUSA DE CONFESIÓN",
text:
"Esta respuesta puede decir mucho más de lo que parece. Respira y sé sincera."
},

3:{
icon:"🌶️",
title:"PAUSA PICANTE",
text:
"Estás trabajando… así que vamos a comportarnos. Más o menos. 😏"
},

6:{
icon:"💭",
title:"PIENSA EN ELLA",
text:
"Por unos segundos, piensa en el recuerdo de Edili que aparece primero en tu mente."
},

8:{
icon:"💌",
title:"UNA PREGUNTA PARA TI",
text:
"Hay cosas que una dice en voz alta y otras que guarda para sí. Tú decides cuánto contar."
},

10:{
icon:"👀",
title:"PAUSA ESPECIAL",
text:
"Imagina que Edili está sentada frente a ti mientras respondes la siguiente pregunta."
},

12:{
icon:"🌶️",
title:"SUBIMOS EL NIVEL",
text:
"Hasta ahora hemos sido bastante buenas… pero la siguiente pregunta puede hacerte pensar demasiado. 🔥"
},

14:{
icon:"🫶",
title:"PAUSA DE CONEXIÓN",
text:
"Piensa en eso que hace que ustedes sean ustedes."
},

18:{
icon:"❤️",
title:"DEL CORAZÓN",
text:
"Esta merece una respuesta sincera. No busques la respuesta perfecta."
},

20:{
icon:"🌙",
title:"UN MOMENTO",
text:
"Están lejos ahora mismo. ¿Qué es lo que más extrañas de tener a Edili cerca?"
},

23:{
icon:"🔐",
title:"CASI AL FINAL",
text:
"Ya casi terminamos. Guarda un poquito de corazón para las últimas preguntas."
},

24:{
icon:"💌",
title:"LA ÚLTIMA",
text:
"Esta no es para ganar. Es para decir algo que quizá Edili necesite leer."
}

};


/* =========================================================
   ESTADO
   ========================================================= */

let currentQuestion = 0;

let answers =
JSON.parse(
localStorage.getItem("ediliCarolanAnswers") || "{}"
);

let selectedChoice = "";


/* =========================================================
   ELEMENTOS
   ========================================================= */

const home =
document.getElementById("home");

const game =
document.getElementById("game");

const finished =
document.getElementById("finished");

const admin =
document.getElementById("admin");

const questionScreen =
document.getElementById("questionScreen");

const pauseScreen =
document.getElementById("pauseScreen");

const answer =
document.getElementById("answer");

const question =
document.getElementById("question");

const category =
document.getElementById("category");

const choices =
document.getElementById("choices");

const progressBar =
document.getElementById("progressBar");

const questionCounter =
document.getElementById("questionCounter");

const percent =
document.getElementById("percent");


/* =========================================================
   INICIAR
   ========================================================= */

function startGame(){

home.classList.add("hidden");

finished.classList.add("hidden");

admin.classList.add("hidden");

game.classList.remove("hidden");

currentQuestion = 0;

renderQuestion();

}


/* =========================================================
   MOSTRAR PREGUNTA
   ========================================================= */

function renderQuestion(){

questionScreen.classList.remove("hidden");

pauseScreen.classList.add("hidden");

const q =
questions[currentQuestion];

category.textContent =
q.category;

question.textContent =
q.question;

const saved =
answers[currentQuestion];

answer.value =
saved ? saved.text : "";

selectedChoice =
saved ? saved.choice || "" : "";

renderChoices();

updateProgress();

}


/* =========================================================
   OPCIONES
   ========================================================= */

function renderChoices(){

choices.innerHTML = "";


/*
   Solo algunas preguntas tienen opciones
   para hacer el juego más dinámico.
*/

const specialQuestions = {

2:[
"💋 Un beso",
"👀 Una mirada",
"😏 Algo inesperado"
],

8:[
"💕 Algo romántico",
"😏 Algo atrevido",
"😂 Algo completamente loco"
],

12:[
"👀 Una mirada",
"💋 Un beso",
"🔥 Una situación peligrosa"
],

21:[
"💗 Su sonrisa",
"👀 Su mirada",
"🔥 Su forma de ser"
]

};


if(!specialQuestions[currentQuestion])
return;


specialQuestions[currentQuestion]
.forEach(option => {

const button =
document.createElement("button");

button.className =
"choice";

if(option === selectedChoice)
button.classList.add("selected");

button.textContent =
option;

button.onclick = function(){

selectedChoice = option;

renderChoices();

};

choices.appendChild(button);

});

}


/* =========================================================
   PROGRESO
   ========================================================= */

function updateProgress(){

const total =
questions.length;

const number =
currentQuestion + 1;

const value =
Math.round((number / total) * 100);

questionCounter.textContent =
`Pregunta ${number} de ${total}`;

percent.textContent =
`${value}%`;

progressBar.style.width =
`${value}%`;

}


/* =========================================================
   GUARDAR
   ========================================================= */

async function saveAnswer(){

const text =
answer.value.trim();

if(!text){

answer.focus();

return;

}


answers[currentQuestion] = {

text:text,

choice:selectedChoice,

question:
questions[currentQuestion].question,

category:
questions[currentQuestion].category,

number:
currentQuestion + 1,

date:
new Date().toISOString()

};


localStorage.setItem(
"ediliCarolanAnswers",
JSON.stringify(answers)
);


/*
   Si API_URL está configurada,
   también intenta guardar online.
*/

if(API_URL){

try{

await fetch(API_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

number:currentQuestion + 1,

question:
questions[currentQuestion].question,

category:
questions[currentQuestion].category,

answer:text,

choice:selectedChoice,

date:
new Date().toISOString()

})

});

}catch(error){

console.log(
"No se pudo sincronizar online.",
error
);

}

}


currentQuestion++;


if(currentQuestion >= questions.length){

finishGame();

return;

}


/*
   Mostrar pausa cuando corresponda.
*/

if(pauses[currentQuestion]){

showPause();

}else{

renderQuestion();

}

}


/* =========================================================
   PAUSA
   ========================================================= */

function showPause(){

questionScreen.classList.add("hidden");

pauseScreen.classList.remove("hidden");

const p =
pauses[currentQuestion];

document.getElementById("pauseIcon")
.textContent = p.icon;

document.getElementById("pauseTitle")
.textContent = p.title;

document.getElementById("pauseText")
.textContent = p.text;

questionCounter.textContent =
`Pausa · ${currentQuestion + 1} de ${questions.length}`;

}


/* =========================================================
   CONTINUAR PAUSA
   ========================================================= */

function continueFromPause(){

renderQuestion();

}


/* =========================================================
   FINAL
   ========================================================= */

function finishGame(){

game.classList.add("hidden");

finished.classList.remove("hidden");

}


/* =========================================================
   PANEL PRIVADO
   ========================================================= */

function openPrivatePanel(){

const pin =
prompt(
"Introduce la clave privada de Edili:"
);


/*
   CAMBIA ESTA CLAVE.
*/

if(pin !== "EDILI2026"){

alert("Clave incorrecta.");

return;

}


finished.classList.add("hidden");

admin.classList.remove("hidden");

renderResponses();

}


/* =========================================================
   RESPUESTAS
   ========================================================= */

function renderResponses(){

const box =
document.getElementById("responses");

box.innerHTML = "";


const list =
Object.values(answers)
.sort(
(a,b) => a.number - b.number
);


if(!list.length){

box.innerHTML = `
<div class="secret">
Todavía no hay respuestas guardadas.
</div>
`;

return;

}


list.forEach(item => {

const div =
document.createElement("div");

div.className =
"response";

div.innerHTML = `

<div class="response-number">
PREGUNTA ${item.number}
</div>

<div class="response-question">
${escapeHTML(item.question)}
</div>

${
item.choice
?
`<div class="note">
Elección: ${escapeHTML(item.choice)}
</div>`
:
""
}

<div class="response-answer">
${escapeHTML(item.text)}
</div>

`;

box.appendChild(div);

});

}


/* =========================================================
   SEGURIDAD HTML
   ========================================================= */

function escapeHTML(text){

return String(text)
.replaceAll("&","&amp;")
.replaceAll("<","&lt;")
.replaceAll(">","&gt;")
.replaceAll('"',"&quot;")
.replaceAll("'","&#039;");

}


/* =========================================================
   VOLVER
   ========================================================= */

function goHome(){

admin.classList.add("hidden");

home.classList.remove("hidden");

}

</script>

</body>
</html>