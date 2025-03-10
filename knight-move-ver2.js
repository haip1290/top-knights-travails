function knightMoves() {}

function getNextMoves([i, j], visited) {
  let nextMoves = [];
  const moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  for (const [di, dj] of moves) {
    ni = i + di;
    nj = j + dj;
    if (
      ni >= 0 &&
      ni <= 7 &&
      nj >= 0 &&
      nj <= 7 &&
      !visited.has(`${i}, &{j}`)
    ) {
      nextMoves.push([ni, nj]);
    }
  }
  return nextMoves;
}

function validateCoordinate([i, j]) {
  if (!Number.isInteger(i) || !Number.isInteger(j)) {
    throw new Error("Vertex coordinate must be integer");
  }
  if (i > 7 || i < 0 || j > 7 || j < 0) {
    throw new Error("vertex must be inside chess board (0-7)");
  }
}
