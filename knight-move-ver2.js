function knightMoves([si, sj], [ei, ej]) {
  validateCoordinate([si, sj]);
  validateCoordinate([ei, ej]);

  let queue = [[[si, sj], [[si, sj]]]];
  let visited = new Set();
  visited.add(`${si},${sj}`);

  while (queue.length > 0) {
    const [[i, j], path] = queue.shift();
    if (i === ei && j === ej) {
      return path;
    }
    const nextMoves = getNextMoves([i, j], visited);
    for (const [ni, nj] of nextMoves) {
      queue.push([
        [ni, nj],
        [...path, [ni, nj]],
      ]);
      visited.add(`${ni},${nj}`);
    }
  }
  return [];
}

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
    const ni = i + di;
    const nj = j + dj;
    if (
      ni >= 0 &&
      ni <= 7 &&
      nj >= 0 &&
      nj <= 7 &&
      !visited.has(`${ni},${nj}`)
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

export default knightMoves;
