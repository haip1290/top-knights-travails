import knightMoves from "./knight-move-ver2.js";

let start = [1, 3];
let end = [7, 7];

console.log("path", knightMoves(start, end));

console.log("path", knightMoves([0, 0], [2, 1]));
console.log("path", knightMoves([0, 0], [3, 3]));
