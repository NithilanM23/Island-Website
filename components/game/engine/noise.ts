// Ruido determinista por celda y PRNG para texturas estables entre frames.
// Extraido de iso.ts en E0 (refactor puro).

const NOISE_GRID_SIZE = 100
const noiseGrid = new Float32Array(NOISE_GRID_SIZE * NOISE_GRID_SIZE)
let noiseGridInit = false

function initNoiseGrid() {
  for (let y = 0; y < NOISE_GRID_SIZE; y++) {
    for (let x = 0; x < NOISE_GRID_SIZE; x++) {
      const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
      noiseGrid[y * NOISE_GRID_SIZE + x] = n - Math.floor(n)
    }
  }
  noiseGridInit = true
}

// Ruido deterministico 0..1 por celda (para variar el pasto).
export function tileNoise(gx: number, gy: number): number {
  if (Number.isInteger(gx) && Number.isInteger(gy) && gx >= 0 && gx < NOISE_GRID_SIZE && gy >= 0 && gy < NOISE_GRID_SIZE) {
    if (!noiseGridInit) initNoiseGrid()
    return noiseGrid[gy * NOISE_GRID_SIZE + gx]
  }
  const n = Math.sin(gx * 12.9898 + gy * 78.233) * 43758.5453
  return n - Math.floor(n)
}

// Deterministic pseudo-random in [0,1) seeded by tile coords + a channel `k`,
// so each tile gets many stable random values (blade positions, tones, etc.)
// without flickering between frames.
export function tileHash(gx: number, gy: number, k: number): number {
  // Combine coordinates and channel into a single 32-bit integer
  let h = (gx * 374761393) ^ (gy * 668265263) ^ (k * 2128858349)
  // Murmur3 style integer mixer
  h = Math.imul(h ^ (h >>> 16), 2246822507)
  h = Math.imul(h ^ (h >>> 13), 3266489909)
  h = (h ^ (h >>> 16)) >>> 0
  return h / 4294967296
}

// Small deterministic PRNG so the texture is identical every build.
export function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
