export const NEON_COLOR = 'NEON_COLOR'
export const NEON_NAME = 'NEON_NAME'
export const NEON_FLASHLIGH = 'NEON_FLASHLIGH'
export const neonColorAction = (payload) => ({ type: NEON_COLOR, payload })
export const neonNameAction = (payload) => ({ type: NEON_NAME, payload })
export const neonFlashlight = (payload) => ({ type: NEON_FLASHLIGH, payload })