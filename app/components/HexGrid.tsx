export default function HexGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern
          id="hex-grid"
          width="56"
          height="48.5"
          patternUnits="userSpaceOnUse"
          patternTransform="translate(0,0)"
        >
          <path
            d="M14 0 L42 0 L56 24.25 L42 48.5 L14 48.5 L0 24.25 Z"
            fill="none"
            stroke="rgba(140,180,230,0.15)"
            strokeWidth="0.8"
          />
        </pattern>
        <radialGradient id="hex-fade" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0.2" />
        </radialGradient>
        <mask id="hex-mask">
          <rect width="100%" height="100%" fill="url(#hex-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-grid)" mask="url(#hex-mask)" />
    </svg>
  );
}
