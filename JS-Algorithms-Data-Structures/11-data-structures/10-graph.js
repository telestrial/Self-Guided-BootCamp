// A finite (and possibly mutable) set of vertices, nodes, or points, together, with a
// set of unordered pairs of these vertices for an undirected graph or a set of ordered
// pairs for a directed graph. ....yikes.

// Nodes + Connections
// Social networks, locations/mapping, routing algorithms, visual hierarchy, file system
// optimizations, and everywhere.
// "People also liked watched/bought recommendation." "People you might know.."

// Vertex - Node.
// Edge - Connection between nodes.
// Weighted/Unweighted - Are there values associated with the edges (connections) ?
// Directed/Undirected - Two-way connections/One-way.

// Adjacency Matrix - two dimensional structure typically represented in nested arrays.
// Size is determine by number of vertices. Fast to look up specific edge

// Adjacency List - List, Hash Table where each key has a set of values -- the nodes that
// are attached to it. Size is determined by number of connections. Slow to lookup
// specific edge.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  // Depth First Recursive
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    const dfs = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(start);
    return result;
  }
  depthFirstIterative(start) {
    const stack = [start]; // This should probably be a real stack if the dataset is large.
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirstSearch(start) {
    const queue = [start]; // This should be a real queue if data set is large.
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.breadthFirstSearch('A'));

// Graph Traversal - Visiting, updating, checking, printing, each element in a graph.
// Depth first vs. Breadth First is different when we have something other than a tree
// structure. Depth in this case would be check ONE edge on each vertex to get to the next
// vertex and repeating this again and again. Breadth first would have you visit all
// edges of one vertex.
