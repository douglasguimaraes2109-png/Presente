const mensagemTexto = "Mensagem desejada para a carta";
let i = 0;

// Efeito digitando
function escreverTexto() {
  if (i < mensagemTexto.length) {
    document.getElementById("texto").innerHTML += mensagemTexto.charAt(i);
    i++;
    setTimeout(escreverTexto, 50);
  }
}

// Mostrar mensagem + música
function mostrarMensagem() {
  document.getElementById("mensagem").style.display = "block";
  document.getElementById("spotify").style.display = "block";
  document.getElementById("slider").style.display = "block";

  escreverTexto();

  for (let j = 0; j < 20; j++) {
    criarCoracao();
  }
}

const slider = document.getElementById("slider");

setTimeout(() => {
  slider.classList.add("ativo");
}, 200);

// Contador de dias
function atualizarContador() {
  /*const inicio = new Date("2022-03-21"); // ALTERA AQUI
  const agora = new Date();*/

  const diff = agora - inicio;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("contador").innerHTML =
    "Estamos juntos há " + dias + " dias ❤️";
}

setInterval(atualizarContador, 1000);

// Corações caindo
function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.innerHTML = "❤️";
  coracao.style.position = "fixed";
  coracao.style.top = "-10px";
  coracao.style.left = Math.random() * window.innerWidth + "px";
  coracao.style.fontSize = "24px";
  coracao.style.animation = "cair 5s linear";

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

const imagens = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg"
];

let index = 0;

function trocarSlide() {
  const img = document.getElementById("slide-img");

  // fade out
  img.style.opacity = 0;

  setTimeout(() => {
    index++;
    if (index >= imagens.length) {
      index = 0;
    }

    img.src = imagens[index];

    // fade in
    img.style.opacity = 1;
  }, 500);
}

setInterval(trocarSlide, 3000);

// Loop de corações
setInterval(criarCoracao, 300);