/**
 * Design token color palette
 * Generated from primary brand color #0c8ce9.
 *
 * - `primary` is a custom 50–950 scale generated from #0c8ce9 (base sits at 500),
 *   mixed in LAB space against white/black so the ramp stays perceptually smooth.
 * - `secondary` / `success` / `warning` / `danger` / `neutral` reuse Tailwind CSS's
 *   own default palette (v4.3, OKLCH-based) — violet / emerald / amber / red / slate —
 *   chosen to sit well next to a sky-blue primary.
 *
 * Use this file wherever you need raw hex values outside of Tailwind utility
 * classes (charts, native styles, email templates, design tools, etc.).
 * `tailwind.config.ts` in this same folder wires these into Tailwind + HeroUI.
 */

export const primary = {
  50: "#f7f9fe",
  100: "#eef3fd",
  200: "#d4e1fa",
  300: "#b9cff7",
  400: "#7dadf0",
  500: "#0c8ce9", // brand base
  600: "#1a7aca",
  700: "#2066a7",
  800: "#214f80",
  900: "#1e3d60",
  950: "#19283d",
} as const;

export const secondary = {
  50: "#f5f3ff",
  100: "#ede9fe",
  200: "#ddd6ff",
  300: "#c4b4ff",
  400: "#a684ff",
  500: "#8e51ff",
  600: "#7f22fe",
  700: "#7008e7",
  800: "#5d0ec0",
  900: "#4d179a",
  950: "#2f0d68",
} as const;

export const success = {
  50: "#ecfdf5",
  100: "#d0fae5",
  200: "#a4f4cf",
  300: "#5ee9b5",
  400: "#00d492",
  500: "#00bc7d",
  600: "#009966",
  700: "#007a55",
  800: "#006045",
  900: "#004f3b",
  950: "#002c22",
} as const;

export const warning = {
  50: "#fffbeb",
  100: "#fef3c6",
  200: "#fee685",
  300: "#ffd230",
  400: "#ffb900",
  500: "#fe9a00",
  600: "#e17100",
  700: "#bb4d00",
  800: "#973c00",
  900: "#7b3306",
  950: "#461901",
} as const;

export const danger = {
  50: "#fef2f2",
  100: "#ffe2e2",
  200: "#ffc9c9",
  300: "#ffa2a2",
  400: "#ff6467",
  500: "#fb2c36",
  600: "#e7000b",
  700: "#c10007",
  800: "#9f0712",
  900: "#82181a",
  950: "#460809",
} as const;

export const neutral = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cad5e2",
  400: "#90a1b9",
  500: "#62748e",
  600: "#45556c",
  700: "#314158",
  800: "#1d293d",
  900: "#0f172b",
  950: "#020618",
} as const;

export const palette = {
  primary,
  secondary,
  success,
  warning,
  danger,
  neutral,
} as const;

export type ColorScale = typeof primary;
export type PaletteName = keyof typeof palette;

export default palette;
