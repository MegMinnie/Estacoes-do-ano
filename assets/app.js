document.addEventListener("DOMContentLoaded", function () {
  const botao = document.querySelector("button");
  const input = document.querySelector("input");
  const paragrafo = document.querySelector(".resultado");
  const corpo = document.querySelector("body");
  const img = document.querySelector(".capa");

  // Pré-carregar imagens
  const imagens = [
    "assets/fotos/inverno.jpg",
    "assets/fotos/primavera.jpeg",
    "assets/fotos/verao.webp",
    "assets/fotos/outono.jpg",
  ];

  imagens.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  botao.addEventListener("click", function () {
    let msg;
    let des;

    const inputValue = input.value.trim().toLowerCase();

    switch (inputValue) {
      case `janeiro`:
      case `fevereiro`:
      case `março`:
      case `1`:
      case `2`:
      case `3`:
        msg = `INVERNO`;
        des = `A estação com as temperaturas mais baixas e com o menor período de luz do dia. As noites são mais longas do que os dias e alguns animais hibernam.`;
        corpo.style.backgroundColor = "#a8a9ad";
        img.src = "assets/fotos/inverno.jpg";
        break;

      case `abril`:
      case `maio`:
      case `junho`:
      case `4`:
      case `5`:
      case `6`:
        msg = `PRIMAVERA`;
        des = `Uma estação com temperaturas amenas, que tendem a ficar mais quentes. É uma época em que as árvores e flores costumam florescer.`;
        corpo.style.backgroundColor = "#d26490";
        img.src = "assets/fotos/primavera.jpeg";
        break;

      case `julho`:
      case `agosto`:
      case `setembro`:
      case `7`:
      case `8`:
      case `9`:
        msg = `VERÃO`;
        des = `A estação com as temperaturas mais altas e com o maior período de luz do dia.`;
        corpo.style.backgroundColor = "#3165bf";
        img.src = "assets/fotos/verao.webp";
        break;

      case `outubro`:
      case `novembro`:
      case `dezembro`:
      case `10`:
      case `11`:
      case `12`:
        msg = `OUTONO`;
        des = `Uma estação de transição, com a diminuição gradual da luz solar até o inverno. As características do outono incluem a queda das folhas, menos chuva, umidade do ar inferior e mais ventanias e nevoeiros.`;
        corpo.style.backgroundColor = "#ffa025";
        img.src = "assets/fotos/outono.jpg";
        break;

      default:
        msg = `Estação desconhecida`;
        des = `Por favor, digite um mês válido ou número correspondente.`;
        corpo.style.backgroundColor = "#ffffff";
        img.style.backgroundImage = "none";
        break;
    }

    paragrafo.innerHTML = `<p>Estamos na estação: <b>${msg}</b></p><br>
    <p>${des}</p>`;
  });
});
