const emojis = {
  "-": " ",
  O: "🚪",
  X: "💣",
  I: "🎁",
  PLAYER: "💀",
  BOMB_COLLISION: "🔥",
  GAME_OVER: "👎",
  WIN: "🏆",
  HEART: "💖",
}

const maps = []
maps.push(`
      IXXXXXXXXX
      -XXXXXXXXX
      -XXXXXXXXX
      -XXXXXXXXX
      -XXXXXXXXX
      -XXXXXXXXX
      -XXXXXXXXX
      -XXXXXXXXX
      -XXXXXXXXX
      OXXXXXXXXX
    `)
maps.push(`
      O--XXXXXXX
      X--XXXXXXX
      XX----XXXX
      X--XX-XXXX
      X-XXX--XXX
      X-XXXX-XXX
      XX--XX--XX
      XX--XXX-XX
      XXXX---IXX
      XXXXXXXXXX
      `)
maps.push(`
      I-----XXXX
      XXXXX-XXXX
      XX----XXXX
      XX-XXXXXXX
      XX-----XXX
      XXXXXX-XXX
      XX-----XXX
      XX-XXXXXXX
      XX-----OXX
      XXXXXXXXXX
    `)
// maps.push(`
//       XXXXX--XXX
//       XXXXXX-XXX
//       XX-XXX---X
//       XX-------X
//       XX-XXXXXXX
//       XX-X---XXX
//       XX-XOX-XXX
//       XX-XXX-XXX
//       XX-----XXX
//     `)
