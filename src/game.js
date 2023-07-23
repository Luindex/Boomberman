const canvas = document.querySelector("#game")
const game = canvas.getContext("2d")

let canvasSize
let elementsSize

window.addEventListener("load", setCanvasSize) //Escuchar apenas cargue el archivo HTML
window.addEventListener("resize", setCanvasSize) //escuchamos el reize, que lo que hace es que cada vez que se cambie el tama;o de la pantalla llama a la function Stargame

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.85
  } else {
    canvasSize = window.innerHeight * 0.85
  }
  canvas.setAttribute("width", canvasSize)
  canvas.setAttribute("height", canvasSize)

  elementsSize = canvasSize / 10 // cada elemento va tener la decima parte de medida del valor del canva

  startGame()
}

function startGame() {
  let canvasSize

  console.log({ canvasSize, elementsSize })

  game.font = elementsSize + "px Verdana"
  game.textAlign = "end"

  const map = maps[0]
  const mapRows = map.trim().split("\n")
  const mapRowCols = mapRows.map((row) => row.trim().split(""))
  console.log({ map, mapRows, mapRowCols })

  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      game.fillText(
        emojis[mapRowCols[row - 1][col - 1]],
        elementsSize * col,
        elementsSize * row
      )
    }
  }

  //   game.fillText(emojis["X"], 100, 100)
  //   game.fillText(emojis["X"], 100, 100)
  //   game.fillText(emojis["X"], 100, 100)
  //   game.fillText(emojis["X"], 100, 100)
  //   game.fillText(emojis["X"], 100, 100)
  //   game.fillText(emojis["X"], 100, 100)
  //   game.fillText(emojis["X"], 100, 100)
  //   game.fillText(emojis["X"], 100, 100)
  //   game.fillText(emojis["X"], 100, 100)
  //   game.fillText(emojis["X"], 100, 100)

  //window.innerHeight
  //window.innerWidth

  //game.fillRect(0, 50, 100, 100) //Definir donde va iniciar el trazo
  //game.clearRect(50, 50, 50, 50) //borramos el rectangulo de dichas medidas
  //   game.clearRect(0, 0, 50, 50) // (50(horizontal), 50,(vertical), 50(Ancho), 50(alto))
  //   game.font = "13px verdana" //Agregamos el tamano del texto y la fuente
  //   game.fillStyle = "black" //le asignamos el color que va tener el texto
  //   game.textAlign = "end"
  //   game.fillText("Luis", 25, 25) //agregamos un nombre como ejemplo, y le damos las cordenadas de ubicacion
}
