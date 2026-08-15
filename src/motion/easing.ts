export const VOLTR_EASING = {
  hero: [0.65, 0, 0.35, 1] as const,
  card: [0.22, 1, 0.36, 1] as const,
  gauge: [0.42, 0, 0.58, 1] as const,
  micro: [0.05, 0.7, 0.1, 1] as const,
  linear: [1, 0, 0, 1] as const,
  ambient: [0.4, 0, 0.6, 1] as const,
  entrance: [0.12, 0.7, 0.1, 1] as const,
  menu: [0.16, 1, 0.3, 1] as const,
} as const;

export const VOLTR_DURATION = {
  micro: 80,
  uiFast: 190,
  uiSlow: 350,
  scene: 1100,
  camera: 3000,
} as const;
