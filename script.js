const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

const container = document.querySelector(".container");

const criacao = () => {
  for (let i = 0; i < map.length; i++) {
    let boxPai = document.createElement("div");
    boxPai.classList.add("boxPai");
    container.appendChild(boxPai);
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "W") {
        let bloco = document.createElement("div");
        bloco.classList.add("bloco");
        boxPai.appendChild(bloco);
      } else if (map[i][j] === "S") {
        let blocoS = document.createElement("div");
        blocoS.classList.add("blocoS");
        boxPai.appendChild(blocoS);
      } else if (map[i][j] === "F") {
        let blocoF = document.createElement("div");
        blocoF.classList.add("blocoF");
        boxPai.appendChild(blocoF);
      } else {
        let bloco = document.createElement("div");
        bloco.classList.add("blocoTransparente");
        boxPai.appendChild(bloco);
      }
    }
  }
};

criacao();

const start = document.querySelector(".blocoS");
const box = document.createElement("div");
box.classList.add("box");
start.appendChild(box);
document.querySelector(".box");

function procurar() {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "S") {
        return [i, j];
      }
    }
  }
}

let boxTop = 0;
let boxLeft = 0;

let jogador = procurar();
let jogadaAtual = jogador[0];
let jogadaDestino = jogador[1];

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "ArrowRight") {
    if (map[jogadaAtual][jogadaDestino + 1] === " ") {
      jogadaDestino += 1;
      boxLeft += 50;
      box.style.left = boxLeft + "px";
      box.style.backgroundImage = "url(ghost.png)";
    } else if (map[jogadaAtual][jogadaDestino + 1] === "F") {
      jogadaDestino += 1;
      boxLeft += 50;
      box.style.left = boxLeft + "px";
      alert("Parabéns!!! Você escapou dos monstros!");
      // let win = document.createElement("div");
      // win.classList = "win";
      // container.appendChild(win);
      // box.style.backgroundImage = "url(ghost.png)";
    } else if (map[jogadaAtual][jogadaDestino + 1] === "W") {
      box.style.backgroundImage = "url(zombie.png)";
    }
  } else if (keyName === "ArrowLeft") {
    if (map[jogadaAtual][jogadaDestino - 1] === " ") {
      jogadaDestino -= 1;
      boxLeft -= 50;
      box.style.left = boxLeft + "px";
      box.style.backgroundImage = "url(ghost.png)";
    } else if (map[jogadaAtual][jogadaDestino - 1] === "W") {
      box.style.backgroundImage = "url(zombie.png)";
    }
  } else if (keyName === "ArrowUp") {
    if (map[jogadaAtual - 1][jogadaDestino] === " ") {
      jogadaAtual -= 1;
      boxTop -= 50;
      box.style.top = boxTop + "px";
      box.style.backgroundImage = "url(ghost.png)";
    } else if (map[jogadaAtual + 1][jogadaDestino] === "W") {
      box.style.backgroundImage = "url(zombie.png)";
    }
  } else if (keyName === "ArrowDown") {
    if (map[jogadaAtual + 1][jogadaDestino] === " ") {
      jogadaAtual += 1;
      boxTop += 50;
      box.style.top = boxTop + "px";
      box.style.backgroundImage = "url(ghost.png)";
    } else if (map[jogadaAtual + 1][jogadaDestino] === "W") {
      box.style.backgroundImage = "url(zombie.png)";
    }
  }
});
