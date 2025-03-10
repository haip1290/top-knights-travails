function knightMoves([si, sj], [ei, ej]) {
  validateVetex([si, sj]);
  validateVetex([ei, ej]);
  const coordinate = [si, sj];
  const path = [[si, sj]];
  let queue = [[coordinate, path]];
  let visited = [[si, sj]];

  while (queue.length > 0) {
    const [[i, j], frontPath] = queue.shift();
    if (i === ei && j === ej) {
      return frontPath;
    }
    const nextMoves = getNextMoves([i, j], visited);
    for (const move of nextMoves) {
      visited.push(move);
      queue.push([move, [...frontPath, move]]);
    }
  }
  return [];
}

function getNextMoves([i, j], prevMoves = []) {
  validateVetex([i, j]);
  let nextMoves = [];

  const possibleMoves = [
    [i + 1, j + 2],
    [i + 2, j + 1],
    [i - 1, j + 2],
    [i - 2, j + 1],
    [i + 1, j - 2],
    [i + 2, j - 1],
    [i - 1, j - 2],
    [i - 2, j - 1],
  ];

  for (const [x, y] of possibleMoves) {
    if (x < 0 || x > 7 || y < 0 || y > 7) continue;
    if (!prevMoves.some((prevMove) => compareVertex(prevMove, [x, y]))) {
      nextMoves.push([x, y]);
    }
  }

  return nextMoves;
}

function compareVertex(vertex1, vertex2) {
  if (vertex1.length !== vertex2.length) return false;
  return vertex1.every((val, index) => val === vertex2[index]);
}

function validateVetex([i, j]) {
  if (!Number.isInteger(i) || !Number.isInteger(j)) {
    throw new Error("Vertex coordinate must be integer");
  }
  if (i > 7 || i < 0 || j > 7 || j < 0) {
    throw new Error("vertex must be inside chess board (0-7)");
  }
}

export { getNextMoves, compareVertex, knightMoves };
