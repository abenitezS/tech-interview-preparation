let graph = {  a: ['c'], b: ['c'], c: ['s', 'r'], d: ['a'], s: ['a', 'c'], r: ['d'],
  z: ['z'] }
export default function SolveGraph (graph, start, end ) {
  let queue = [start]; //Juan Gerardo
    let visited = new Set();
    while (queue.length > 0) {
      let node = queue.shift();
      if (node === end) {
        return true;
      }
      if (!visited.has(node)) {
        visited.add(node);
        queue = queue.concat(graph[node]);
      }
    }
    return false;
  }

module.exports = SolveGraph;


console.log(SolveGraph(graph, 'a', 'r'))//true
console.log(SolveGraph(graph, 'a', 'd'))//true
console.log(SolveGraph(graph, 's', 'b'))//false

