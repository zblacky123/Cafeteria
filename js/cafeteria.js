let tp = "#cafes";

document.getElementsByClassName("btn-mobile")[0].onclick = () => {
  document.getElementsByTagName("nav")[0].style.marginLeft = "0px";
};

function closeMenu() {
  document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor =
    "black";
  document.querySelector(".cat-cardapio a").style.color = "white";

  document.getElementById("bolos").style.display = "none";
  document.getElementById("doces").style.display = "none";
  document.getElementById("salgados").style.display = "none";
  document.getElementById("bebidas").style.display = "none";
}
function mudaItem(cat) {
  switch (cat) {
    case "cafes":
      document.getElementById(cat).style.display = "inline-flex";
      document.getElementById("bolos").style.display = "none";
      document.getElementById("doces").style.display = "none";
      document.getElementById("salgados").style.display = "none";
      document.getElementById("bebidas").style.display = "none";
      trocaSelecao(cat);
      break;
    case "bolos":
      document.getElementById(cat).style.display = "inline-flex";
      document.getElementById("cafes").style.display = "none";
      document.getElementById("doces").style.display = "none";
      document.getElementById("salgados").style.display = "none";
      document.getElementById("bebidas").style.display = "none";
      trocaSelecao(cat);
      break;
    case "doces":
      document.getElementById(cat).style.display = "inline-flex";
      document.getElementById("bolos").style.display = "none";
      document.getElementById("cafes").style.display = "none";
      document.getElementById("salgados").style.display = "none";
      document.getElementById("bebidas").style.display = "none";
      trocaSelecao(cat);
      break;
    case "salgados":
      document.getElementById(cat).style.display = "inline-flex";
      document.getElementById("bolos").style.display = "none";
      document.getElementById("doces").style.display = "none";
      document.getElementById("cafes").style.display = "none";
      document.getElementById("bebidas").style.display = "none";
      trocaSelecao(cat);
      break;
    case "bebidas":
      document.getElementById(cat).style.display = "inline-flex";
      document.getElementById("bolos").style.display = "none";
      document.getElementById("doces").style.display = "none";
      document.getElementById("cafes").style.display = "none";
      document.getElementById("salgados").style.display = "none";
      trocaSelecao(cat);
      break;
  }
}

function trocaSelecao(cat) {
  if (cat == "cafes") {
    document.getElementsByClassName("cat-cardapio")[0].style.backgroundColor =
      "black";
    document.querySelectorAll(".cat-cardapio a")[0].style.color = "white";

    document.querySelectorAll(".cat-cardapio")[1].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[1].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[2].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[2].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[3].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[3].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[4].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[4].style.color = "#333";
  } 
  else if (cat == "bolos") {
    document.getElementsByClassName("cat-cardapio")[1].style.backgroundColor =
      "black";
    document.querySelectorAll(".cat-cardapio a")[1].style.color = "white";

    document.querySelectorAll(".cat-cardapio")[0].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[0].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[2].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[2].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[3].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[3].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[4].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[4].style.color = "#333";
  } 
  else if (cat == "doces") {
    document.getElementsByClassName("cat-cardapio")[2].style.backgroundColor =
      "black";
    document.querySelectorAll(".cat-cardapio a")[2].style.color = "white";

    document.querySelectorAll(".cat-cardapio")[1].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[1].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[0].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[0].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[3].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[3].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[4].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[4].style.color = "#333";
  } 
  else if (cat == "salgados") {
    document.getElementsByClassName("cat-cardapio")[3].style.backgroundColor =
      "black";
    document.querySelectorAll(".cat-cardapio a")[3].style.color = "white";

    document.querySelectorAll(".cat-cardapio")[4].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[4].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[1].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[1].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[2].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[2].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[0].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[0].style.color = "#333";
    
  } 
  else {
    document.getElementsByClassName("cat-cardapio")[4].style.backgroundColor =
      "black";
    document.querySelectorAll(".cat-cardapio a")[4].style.color = "white";

    document.querySelectorAll(".cat-cardapio")[1].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[1].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[2].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[2].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[3].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[3].style.color = "#333";

    document.querySelectorAll(".cat-cardapio")[0].style.backgroundColor =
      "white";
    document.querySelectorAll(".cat-cardapio a")[0].style.color = "#333";
  }

}
// Obter o tamanho da tela e usar apenas a metade
let metadeTela = window.screen.width / 2;
let pos = 0;

//Vamos obter a posição do mouse
document.body.onmousemove = ()=>{
  let px = window.event.clientX; //pega a posição horizontal do mouse

  if(px > metadeTela){
    if (document.querySelector("#cafes").style.marginLeft == "-280px") {
      document.querySelector("#cafes").style.marginLeft = "-280px";
    }
    else {
      document.querySelector("#cafes").style.marginLeft = pos + "px";
      pos -= 5;
    } 
  }
    else {
      if (document.querySelector ("#cafes").style.marginLeft == "80px") {
        document.querySelector ("#cafes").style.marginLeft = "80px";
      }
      else {
        document.querySelector("#cafes").style.marginLeft = pos + "px";
        pos +=5;
      }
    }
  };

