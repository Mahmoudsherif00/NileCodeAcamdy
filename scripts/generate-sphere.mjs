/**
 * Generates src/assets/images/hero-sphere.svg — the home-hero visual.
 *
 * Target look (user reference):
 *   - a SOLID glowing blue ball (inner light, limb-darkened edges)
 *   - dense latitude/longitude wireframe mesh on the surface
 *   - extra network chords + bright star nodes with bloom
 *   - a Saturn-style equatorial ring passing BEHIND (top) and
 *     IN FRONT (bottom) of the ball
 *   - a bright light pool / reflection beneath the sphere
 *
 * Deterministic (seeded RNG). Run: node scripts/generate-sphere.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '../src/assets/images/hero-sphere.svg')

function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const rand = rng(20260117)

const W = 840, H = 860
const CX = W / 2, CY = 400
const R = 262

// --- 3D helpers -----------------------------------------------------------
const AX = 0.42   // tilt around X axis
const AZ = -0.16  // slight z-roll

function rot(p) {
  const { x, y, z } = p
  const y1 = y * Math.cos(AX) - z * Math.sin(AX)
  const z1 = y * Math.sin(AX) + z * Math.cos(AX)
  const x2 = x * Math.cos(AZ) - y1 * Math.sin(AZ)
  const y2 = x * Math.sin(AZ) + y1 * Math.cos(AZ)
  return { x: x2, y: y2, z: z1 }
}

function project(p) {
  return { X: CX + p.x * R, Y: CY - p.y * R, depth: p.z } // depth: +1 front
}

// --- SVG assembly ---------------------------------------------------------
const s = []
s.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" fill="none">`)
s.push(`<defs>
  <radialGradient id="ball" cx="38%" cy="32%" r="78%">
    <stop offset="0%" stop-color="#9FE2FF"/>
    <stop offset="18%" stop-color="#4FB4FF"/>
    <stop offset="45%" stop-color="#1F6FE0"/>
    <stop offset="78%" stop-color="#0C3D8F"/>
    <stop offset="100%" stop-color="#072460"/>
  </radialGradient>
  <radialGradient id="core" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#7FD4FF" stop-opacity="0.75"/>
    <stop offset="55%" stop-color="#2E9BFF" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="#2E9BFF" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="halo" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#0A3E78" stop-opacity="0.55"/>
    <stop offset="65%" stop-color="#062B55" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="#020B18" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pool" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#3FA9FF" stop-opacity="0.85"/>
    <stop offset="45%" stop-color="#1668D8" stop-opacity="0.35"/>
    <stop offset="100%" stop-color="#1668D8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#8FE6FF"/>
    <stop offset="45%" stop-color="#2FA8FF"/>
    <stop offset="100%" stop-color="#0E5FD0"/>
  </linearGradient>
  <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="3.4" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="glowBig" x="-90%" y="-90%" width="280%" height="280%">
    <feGaussianBlur stdDeviation="10" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="blurOnly" x="-120%" y="-120%" width="340%" height="340%">
    <feGaussianBlur stdDeviation="18"/>
  </filter>
  <filter id="blurSoft" x="-120%" y="-120%" width="340%" height="340%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
</defs>`)

// ambient halo
s.push(`<circle cx="${CX}" cy="${CY}" r="${R + 150}" fill="url(#halo)"/>`)

// ---- ground light pool ----------------------------------------------------
const PY = CY + R * 1.24
s.push(`<ellipse cx="${CX}" cy="${PY}" rx="${R * 1.05}" ry="${R * 0.24}" fill="url(#pool)" filter="url(#blurOnly)"/>`)
s.push(`<ellipse cx="${CX}" cy="${PY}" rx="${R * 0.62}" ry="${R * 0.10}" fill="#7FD4FF" opacity="0.5" filter="url(#blurSoft)"/>`)
s.push(`<ellipse cx="${CX}" cy="${PY}" rx="${R * 0.4}" ry="${R * 0.045}" fill="#D6F6FF" opacity="0.65" filter="url(#blurSoft)"/>`)

// ---- equatorial ring: BACK half (bulges up) ------------------------------
const RX = R * 1.46, RY = R * 0.31
const ringGroup = (half, cls) =>
  `<g transform="rotate(-9 ${CX} ${CY})">
     <path class="${cls}" d="M ${CX - RX} ${CY} A ${RX} ${RY} 0 0 ${half === 'back' ? 1 : 0} ${CX + RX} ${CY}"
           stroke="url(#ringStroke)" fill="none" stroke-linecap="round"/>
   </g>`

const ringBack = `<g opacity="0.5">
  <g transform="rotate(-9 ${CX} ${CY})">
    <path d="M ${CX - RX} ${CY} A ${RX} ${RY} 0 0 1 ${CX + RX} ${CY}"
          stroke="#1E6FD0" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.55" filter="url(#blurSoft)"/>
    <path d="M ${CX - RX} ${CY} A ${RX} ${RY} 0 0 1 ${CX + RX} ${CY}"
          stroke="url(#ringStroke)" stroke-width="3.2" fill="none" stroke-linecap="round" opacity="0.75"/>
  </g>
</g>`
s.push(ringBack)

// ---- ball body ------------------------------------------------------------
s.push(`<circle cx="${CX}" cy="${CY}" r="${R}" fill="url(#ball)"/>`)
// inner light
s.push(`<ellipse cx="${CX - R * 0.28}" cy="${CY - R * 0.3}" rx="${R * 0.55}" ry="${R * 0.5}" fill="url(#core)"/>`)
// bottom light bounce from the pool
s.push(`<ellipse cx="${CX}" cy="${CY + R * 0.78}" rx="${R * 0.62}" ry="${R * 0.2}" fill="#2FB9FF" opacity="0.28" filter="url(#blurSoft)"/>`)
// top-left specular highlight
s.push(`<ellipse cx="${CX - R * 0.42}" cy="${CY - R * 0.48}" rx="${R * 0.2}" ry="${R * 0.13}" fill="#DFF6FF" opacity="0.35" filter="url(#blurSoft)"/>`)

// ---- surface mesh: latitudes + longitudes --------------------------------
const lats = []
for (let deg = -72; deg <= 72; deg += 18) lats.push((deg * Math.PI) / 180)
const lons = []
for (let deg = 0; deg < 360; deg += 24) lons.push((deg * Math.PI) / 180)

function surfPoint(lat, lon) {
  return rot({
    x: Math.cos(lat) * Math.cos(lon),
    y: Math.sin(lat),
    z: Math.cos(lat) * Math.sin(lon),
  })
}

const SEG = 30
function polyline(points, opacity, width, color) {
  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.X.toFixed(1)} ${p.Y.toFixed(1)}`)
    .join(' ')
  return `<path d="${d}" stroke="${color}" stroke-opacity="${opacity}" stroke-width="${width}" fill="none" stroke-linecap="round"/>`
}

// latitude circles
for (const lat of lats) {
  const pts = []
  for (let i = 0; i <= SEG; i++) {
    const p = project(surfPoint(lat, (i / SEG) * Math.PI * 2))
    pts.push(p)
  }
  const front = pts.filter((p) => p.depth > 0)
  const back = pts.filter((p) => p.depth <= 0)
  const fAvg = front.reduce((a, p) => a + p.depth, 0) / (front.length || 1)
  const colorF = '#8FDFFF', colorB = '#2E7CD0'
  // back part of the circle: draw with low opacity
  s.push(polyline(pts, 0.12, 1.1, colorB))
  // front part brighter — approximate by drawing only the front-dominant slice
  if (front.length > 2) s.push(polyline(front, (0.25 + fAvg * 0.55).toFixed(2), (1.2 + fAvg * 1.1).toFixed(1), colorF))
}

// longitude circles
for (const lon of lons) {
  const pts = []
  for (let i = 0; i <= SEG; i++) {
    const lat = -Math.PI / 2 + (i / SEG) * Math.PI
    pts.push(project(surfPoint(lat, lon)))
  }
  const front = pts.filter((p) => p.depth > 0)
  const fAvg = front.reduce((a, p) => a + p.depth, 0) / (front.length || 1)
  s.push(polyline(pts, 0.12, 1.1, '#2E7CD0'))
  if (front.length > 2) s.push(polyline(front, (0.25 + fAvg * 0.55).toFixed(2), (1.2 + fAvg * 1.1).toFixed(1), '#8FDFFF'))
}

// ---- network chords (the "constellation" feel) ----------------------------
for (let i = 0; i < 64; i++) {
  const a = surfPoint((rand() - 0.5) * Math.PI * 0.9, rand() * Math.PI * 2)
  const bRaw = surfPoint((rand() - 0.5) * Math.PI * 0.9, rand() * Math.PI * 2)
  const dot = a.x * bRaw.x + a.y * bRaw.y + a.z * bRaw.z
  if (dot < 0.72) { i--; continue } // keep chords short (<= ~44°)
  const pa = project(a), pb = project(bRaw)
  const d = (pa.depth + pb.depth) / 2
  if (d < -0.1) continue
  s.push(`<line x1="${pa.X.toFixed(1)}" y1="${pa.Y.toFixed(1)}" x2="${pb.X.toFixed(1)}" y2="${pb.Y.toFixed(1)}" stroke="#5EC8FF" stroke-opacity="${(0.10 + d * 0.35).toFixed(2)}" stroke-width="${(0.7 + d).toFixed(1)}"/>`)
}

// ---- nodes ----------------------------------------------------------------
const nodes = []
for (const lat of lats) {
  for (const lon of lons) {
    nodes.push(project(surfPoint(lat, lon)))
  }
}
// scatter extra nodes
for (let i = 0; i < 40; i++) {
  nodes.push(project(surfPoint((rand() - 0.5) * Math.PI * 1.1, rand() * Math.PI * 2)))
}
nodes.sort((a, b) => a.depth - b.depth)
for (const n of nodes) {
  if (n.depth < -0.25) continue
  const r = (1.3 + (n.depth + 1) * 1.5).toFixed(1)
  const op = (0.22 + (n.depth + 1) * 0.38).toFixed(2)
  const col = n.depth > 0.45 ? '#CFF3FF' : n.depth > 0.05 ? '#5FC9FF' : '#1E6FC8'
  s.push(`<circle cx="${n.X.toFixed(1)}" cy="${n.Y.toFixed(1)}" r="${r}" fill="${col}" fill-opacity="${op}" filter="url(#glow)"/>`)
}
// bright beacons on the front
for (let i = 0; i < 9; i++) {
  const n = nodes[Math.floor(rand() * nodes.length)]
  if (n.depth < 0.6) continue
  s.push(`<circle cx="${n.X.toFixed(1)}" cy="${n.Y.toFixed(1)}" r="5.6" fill="#E8FBFF" filter="url(#glow)"/>`)
  s.push(`<circle cx="${n.X.toFixed(1)}" cy="${n.Y.toFixed(1)}" r="11" fill="#7FD4FF" opacity="0.30" filter="url(#blurSoft)"/>`)
}

// ---- equatorial ring: FRONT half (bulges down, over the ball) -------------
s.push(`<g>
  <g transform="rotate(-9 ${CX} ${CY})">
    <path d="M ${CX - RX} ${CY} A ${RX} ${RY} 0 0 0 ${CX + RX} ${CY}"
          stroke="#2FA8FF" stroke-width="14" fill="none" stroke-linecap="round" opacity="0.35" filter="url(#blurSoft)"/>
    <path d="M ${CX - RX} ${CY} A ${RX} ${RY} 0 0 0 ${CX + RX} ${CY}"
          stroke="url(#ringStroke)" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M ${CX - RX} ${CY} A ${RX} ${RY} 0 0 0 ${CX + RX} ${CY}"
          stroke="#BFF3FF" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.85"/>
  </g>
</g>`)

// ring endpoints glow
s.push(`<circle cx="${CX - RX}" cy="${CY}" r="6" fill="#9FE6FF" filter="url(#glowBig)" transform="rotate(-9 ${CX} ${CY})"/>`)
s.push(`<circle cx="${CX + RX}" cy="${CY}" r="6" fill="#9FE6FF" filter="url(#glowBig)" transform="rotate(-9 ${CX} ${CY})"/>`)

// ---- orbiting particles ----------------------------------------------------
for (let i = 0; i < 42; i++) {
  const ang = rand() * Math.PI * 2
  const rad = R * (0.7 + rand() * 0.85)
  const x = CX + Math.cos(ang) * rad
  const y = CY + Math.sin(ang) * rad * 0.94
  const r = 1 + rand() * 2.4
  s.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${rand() > 0.5 ? '#00D9FF' : '#008CFF'}" fill-opacity="${(0.12 + rand() * 0.45).toFixed(2)}"/>`)
}

s.push('</svg>')

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, s.join('\n'), 'utf8')
console.log('written:', OUT)
