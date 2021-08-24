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
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertext2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertext2].filter(
      (vertex) => vertex !== vertext2
    );
  }
  removeVertex(vertex) {
    for (edge of this.adjacencyList[vertex]) {
      this.removeEdge(edge);
    }
    delete this.adjacencyList[vertext];
  }
}
