function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var carta1 = {
  nome: "Squirtle",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  atributos: {
    ataque: getRandomIntInclusive(1, 10),
    defesa: getRandomIntInclusive(1, 10),
    ataqueEspecial: getRandomIntInclusive(10, 50)
  }
};

var carta2 = {
  nome: "Charmander",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  atributos: {
    ataque: getRandomIntInclusive(1, 10),
    defesa: getRandomIntInclusive(1, 10),
    ataqueEspecial: getRandomIntInclusive(10, 50)
  }
};

var carta3 = {
  nome: "Bulbasaur",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
    ataque: getRandomIntInclusive(1, 10),
    defesa: getRandomIntInclusive(1, 10),
    ataqueEspecial: getRandomIntInclusive(10, 50)
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJog;

function sortearCarta() {
  var numeroCarta = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCarta];

  var numeroCartaJog = parseInt(Math.random() * cartas.length);

  while (numeroCartaJog == numeroCarta) {
    numeroCartaJog = parseInt(Math.random() * cartas.length);
  }
  cartaJog = cartas[numeroCartaJog];
  console.log(cartaJog);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributo() {
  var atributos = document.getElementsByName("atributo");

  for (var i = 0; i < atributos.length; i++) {
    if (atributos[i].checked == true) {
      return atributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributo();
  atributoSelecionado = atributoSelecionado.trim();

  var valorCartaJogador = cartaJog.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var elementoResultado = document.getElementById("resultado");
  var htmlResultado;

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado =
      "<p class = 'resultado-final'>Venceu!</p>" +
      "Seu valor: " +
      valorCartaJogador +
      " - Valor da máquina: " +
      valorCartaMaquina;
  } else if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado =
      "<p class = 'resultado-final'>Perdeu!<br>" +
      +"Seu valor: " +
      valorCartaJogador +
      " - Valor da máquina: " +
      valorCartaMaquina;
  } else {
    htmlResultado =
      "<p class = 'resultado-final'> Empatou!" +
      +"Seu valor: " +
      valorCartaJogador +
      " - Valor da máquina: " +
      valorCartaMaquina +
      "<br>";
  }

  elementoResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJog.imagem})`;
  //divCartaJogador.style.backgroundImage = "url(" +cartaJog.imagem+")";

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div = 'opcoes' class= 'carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJog.atributos) {
    opcoesTexto +=
      "<input type ='radio'name = 'atributo' value =' " +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJog.atributos[atributo] +
      "<br>";
  }

  var nome = `<p class = "carta-subtitle"> ${cartaJog.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  //divCartaJogador.style.backgroundImage = "url("+cartaMaquina.imagem+")";

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div = 'opcoes' class= 'carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type ='text'name = 'atributo' value =' " +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  var nome = `<p class = "carta-subtitle"> ${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}