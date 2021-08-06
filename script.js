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
  "S       W W W W W WWW",
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

let boxTop = null;
let boxLeft = null;

let jogador = procurar();

const hit = new Audio();
hit.src = "hit.wav";
hit.volume = 0.15;

const end = new Audio();
end.src = "end.wav";
end.volume = 0.15;

const step = new Audio();
step.src = "step.wav";
step.volume = 0.15;

let but = document.querySelector(".but");
let cont = document.querySelector(".win");

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "ArrowRight") {
    if (map[jogador[0]][jogador[1] + 1] === " ") {
      jogador[1] += 1;
      boxLeft += 50;
      box.style.left = boxLeft + "px";
      box.style.backgroundImage = "url(ghost.png)";
      step.play();
    } else if (map[jogador[0]][jogador[1] + 1] === "F") {
      jogador[1] += 1;
      boxLeft += 50;
      end.play();
      box.style.left = boxLeft + "px";
      cont.style.display = "flex";
      box.style.backgroundImage = "url(ghost.png)";
    } else if (map[jogador[0]][jogador[1] + 1] === "W") {
      box.style.backgroundImage = "url(zombie.png)";
      hit.play();
    }
  } else if (keyName === "ArrowLeft") {
    if (map[jogador[0]][jogador[1] - 1] === " ") {
      jogador[1] -= 1;
      boxLeft -= 50;
      box.style.left = boxLeft + "px";
      box.style.backgroundImage = "url(ghost.png)";
      step.play();
    } else if (map[jogador[0]][jogador[1] - 1] === "W") {
      box.style.backgroundImage = "url(zombie.png)";
      hit.play();
    }
  } else if (keyName === "ArrowUp") {
    if (map[jogador[0] - 1][jogador[1]] === " ") {
      jogador[0] -= 1;
      boxTop -= 50;
      box.style.top = boxTop + "px";
      box.style.backgroundImage = "url(ghost.png)";
      step.play();
    } else if (map[jogador[0] + 1][jogador[1]] === "W") {
      box.style.backgroundImage = "url(zombie.png)";
      hit.play();
    }
  } else if (keyName === "ArrowDown") {
    if (map[jogador[0] + 1][jogador[1]] === " ") {
      jogador[0] += 1;
      boxTop += 50;
      box.style.top = boxTop + "px";
      step.play();
      box.style.backgroundImage = "url(ghost.png)";
    } else if (map[jogador[0] + 1][jogador[1]] === "W") {
      box.style.backgroundImage = "url(zombie.png)";
      hit.play();
    }
  }
});

but.addEventListener("click", function () {
  if (cont.style.display === "flex") {
    cont.style.display = "none";
  }
});

const resetar = document.querySelector(".reset");

resetar.addEventListener("click", function () {
  cont.style.display = "none";
  jogador = procurar();
  boxLeft = 0;
  box.style.left = boxLeft + "px";
  boxTop = 0;
  box.style.top = boxTop + "px";
});
