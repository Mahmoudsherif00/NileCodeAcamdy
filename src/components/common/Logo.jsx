/**
 * Nile Code wordmark — a modern two-tone "N": the left stroke +
 * diagonal in a bright light-blue gradient, the right bar in a
 * deeper blue gradient (diagonal overlaps it, Netflix-style).
 * Pure SVG, theme-aware.
 */
export default function Logo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="logo-mark"
    >
      <defs>
        <linearGradient id="logo-light" x1="16" y1="12" x2="22" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8BE9FF" />
          <stop offset="0.55" stopColor="#29B9FF" />
          <stop offset="1" stopColor="#0090E8" />
        </linearGradient>
        <linearGradient id="logo-dark" x1="50" y1="12" x2="44" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#008CFF" />
          <stop offset="1" stopColor="#0052CC" />
        </linearGradient>
        <filter id="logo-f" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* right bar (deeper blue, underneath) */}
      <path d="M41 50 L46 12 H54 L49 50 Z" fill="url(#logo-dark)" />

      {/* left stroke + diagonal (bright, overlaps the right bar) */}
      <path
        d="M12 50 L17 12 H32 L43 50 H34 L26 12 L21 50 H12 Z"
        fill="url(#logo-light)"
        filter="url(#logo-f)"
      />
    </svg>
  )
}
