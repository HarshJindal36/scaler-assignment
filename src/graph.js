// Define the weighted graph using an adjacency list
const graph = {
    A: { B: 5, C: 7 },
    B: { A: 5, D: 15, E: 20 },
    C: { A: 7, D: 5, E: 35 },
    D: { B: 15, C: 5, F: 20 },
    E: { C: 35, B: 20, F: 10 },
    F: { D: 20, E: 10 }
};

function isSubset(arr1, arr2) {
    return arr1.every(function (val) {
        return arr2.indexOf(val) >= 0;
    });
}

export default function dijkstra(start, end, previousPaths = []) {
    const distances = {};
    const previous = {};
    const queue = [];

    console.log(previousPaths);

    // initialize distances and queue
    for (const vertex in graph) {
        if (vertex === start) {
            distances[vertex] = 0;
            queue.push(vertex);
        } else {
            distances[vertex] = Infinity;
        }
        previous[vertex] = null;
    }

    // loop through queue until it's empty
    while (queue.length > 0) {
        // get the vertex with the smallest distance
        const current = queue.reduce((minVertex, vertex) => {
            return distances[vertex] < distances[minVertex] ? vertex : minVertex;
        });

        // remove the current vertex from the queue
        queue.splice(queue.indexOf(current), 1);

        // stop if we've reached the end vertex
        if (current === end) {
            break;
        }

        // loop through the neighbors of the current vertex
        var f = 0;
        for (const neighbor in graph[current]) {
            const distance = graph[current][neighbor];

            // if this path overlaps with a previous path, skip it
            if (previousPaths.some(path => path.includes(current) && path.includes(neighbor))) {
                // continue;
            }
            else {
                f = 1;
                const alt = distances[current] + distance;
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = current;
                    queue.push(neighbor);
                }
            }

        }
        if (f != 1) {

            for (const neighbor in graph[current]) {
                const distance = graph[current][neighbor];
                const alt = distances[current] + distance;
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = current;
                    queue.push(neighbor);
                }
            }
        }
    }

    // build the shortest path array
    const shortestPath = [];
    let current = end;
    while (current !== null) {
        shortestPath.unshift(current);
        current = previous[current];
    }

    // return the shortest distance and path
    return {
        distance: distances[end],
        path: shortestPath
    };
}


// Test the algorithm with some nodes
const shortestDistance = dijkstra('A', 'F');
const shortestDistance1 = dijkstra('A', 'F', [shortestDistance.path]);
const shortestDistance2 = dijkstra('A', 'F', [shortestDistance.path, shortestDistance1.path]);
console.log(shortestDistance); // Output: 32
console.log(shortestDistance1); // Output: 35
console.log(shortestDistance2); // Output: Infinity