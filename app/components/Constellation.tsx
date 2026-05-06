type Node = { x: number; y: number; r: number };

const nodes: Node[] = [
  { x: 5, y: 12, r: 1.2 },
  { x: 14, y: 28, r: 1.6 },
  { x: 22, y: 8, r: 1 },
  { x: 30, y: 20, r: 1.4 },
  { x: 38, y: 36, r: 1.1 },
  { x: 48, y: 14, r: 1.3 },
  { x: 56, y: 30, r: 1.5 },
  { x: 64, y: 6, r: 1 },
  { x: 72, y: 22, r: 1.2 },
  { x: 80, y: 38, r: 1.4 },
  { x: 88, y: 12, r: 1.1 },
  { x: 96, y: 26, r: 1.3 },
  { x: 8, y: 48, r: 1.5 },
  { x: 18, y: 60, r: 1.2 },
  { x: 28, y: 50, r: 1 },
  { x: 40, y: 62, r: 1.3 },
  { x: 50, y: 48, r: 1.4 },
  { x: 60, y: 64, r: 1.1 },
  { x: 70, y: 50, r: 1.2 },
  { x: 82, y: 58, r: 1.5 },
  { x: 92, y: 48, r: 1 },
  { x: 12, y: 78, r: 1.3 },
  { x: 24, y: 88, r: 1.2 },
  { x: 36, y: 76, r: 1.4 },
  { x: 46, y: 92, r: 1.1 },
  { x: 58, y: 80, r: 1.3 },
  { x: 68, y: 90, r: 1.2 },
  { x: 78, y: 76, r: 1.5 },
  { x: 90, y: 86, r: 1 },
];

const lines: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10],
  [1, 13], [3, 14], [5, 15], [7, 17], [9, 19], [11, 20],
  [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18], [18, 19], [19, 20],
  [13, 21], [15, 23], [17, 25], [19, 27],
  [21, 22], [22, 23], [23, 24], [24, 25], [25, 26], [26, 27], [27, 28],
];

export default function Constellation() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <g stroke="rgba(140,180,230,0.18)" strokeWidth={0.08}>
        {lines.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>
      <g fill="rgba(180,210,240,0.55)">
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r * 0.18} />
        ))}
      </g>
    </svg>
  );
}
