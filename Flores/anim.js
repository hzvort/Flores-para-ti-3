// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  {text: "HERE WITH ME", time: 2 },
  { text: "Watch the sunrise along the coast", time: 28  },
  { text: "As we're both getting old", time: 28.7 },
  { text: "I can't describe what I'm feeling", time: 38 },
  { text: "And all I know is we're going home", time: 39 },
  { text: "So, please, don't let me go", time: 47 },
  { text: "Don't let me go, oh", time: 48 },
  { text: "And if it's right", time: 56 },
  { text: "I don't care how long it takes", time: 57 },
  { text: "As long as I'm with you, I've got a smile on my face", time: 66 },
  { text: "Save your tears, it'll be okay", time: 74 },
  { text: "All I know", time: 80 },
  { text: "Is you're here with me", time: 84 },
  { text: "Watch the sunrise as we're getting old, oh, oh", time: 105 },
  { text: "I can't describe, oh, oh", time: 115 },
  { text: "I wish I could live through every memory again", time: 119.5 },
  { text: "Just one more time before we float off in the wind", time: 128 },
  { text: "And all the time we spent waiting for the light to take us in", time: 131 },
  { text: "Have been the greatest moments of my life", time: 143 },
  { text: "I don't care how long it takes", time: 150 },
  { text: "As long as I'm with you, I've got a smile on my face", time: 154.5 },
  { text: "Save your tears, it'll be okay", time: 164 },
  { text: "You're here with me", time: 177.3 },
  { text: "I can't describe, oh, oh", time: 192 },
  {text: "TE ADORO CORAZON", time: 195}
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);