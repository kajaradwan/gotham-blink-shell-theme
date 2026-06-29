/**
 * Gotham — terminal color theme
 * "Code never sleeps in Gotham City."
 *
 * Original colorscheme by Andrew Wielgosz (whatyouhide/vim-gotham).
 * ANSI 16-color values taken verbatim from the canonical terminal port
 * (whatyouhide/gotham-contrib), converted RGB -> hex.
 *
 * Note on the "bright" ramp: Gotham intentionally maps bright green / yellow /
 * blue to its DARK UI background shades (base2/base3/base4-ish), not to
 * lightened colors. So brightGreen looks near-black. This is by design and
 * faithful to the original — don't "fix" it unless you want to diverge.
 *
 * Exports:
 *   palette       — raw named hex values (the 8 base tones + accents)
 *   gothamXterm   — xterm.js ITheme object  (default export)
 *   gothamHyper   — Hyper (.hyper.js) `config.colors` + the top-level color keys
 */

// --- raw palette (the 16 ANSI slots + special) ---------------------------
export const palette = {
  background: '#0a0f14',
  foreground: '#98d1ce',

  // normal (Color0..Color7)
  black:   '#0a0f14',
  red:     '#c33027',
  green:   '#26a98b',
  yellow:  '#edb54b',
  blue:    '#195465',
  magenta: '#4e5165',
  cyan:    '#33859d',
  white:   '#98d1ce',

  // bright / intense (Color0Intense..Color7Intense)
  brightBlack:   '#10151b',
  brightRed:     '#d26939',
  brightGreen:   '#081f2d', // dark by design
  brightYellow:  '#245361', // dark by design
  brightBlue:    '#093748', // dark by design
  brightMagenta: '#888ba5',
  brightCyan:    '#599caa',
  brightWhite:   '#d3ebe9',
};

// --- xterm.js ITheme ------------------------------------------------------
// Drop straight into: new Terminal({ theme: gothamXterm })
// or term.options.theme = gothamXterm
export const gothamXterm = {
  background: palette.background,
  foreground: palette.foreground,
  cursor: palette.foreground,
  cursorAccent: palette.background,
  selectionBackground: '#0a3749', // base3 — Gotham's region/selection tone
  selectionForeground: palette.foreground,

  black:   palette.black,
  red:     palette.red,
  green:   palette.green,
  yellow:  palette.yellow,
  blue:    palette.blue,
  magenta: palette.magenta,
  cyan:    palette.cyan,
  white:   palette.white,

  brightBlack:   palette.brightBlack,
  brightRed:     palette.brightRed,
  brightGreen:   palette.brightGreen,
  brightYellow:  palette.brightYellow,
  brightBlue:    palette.brightBlue,
  brightMagenta: palette.brightMagenta,
  brightCyan:    palette.brightCyan,
  brightWhite:   palette.brightWhite,
};

// --- Hyper (~/.hyper.js) --------------------------------------------------
// Merge `topLevel` into your config object and `colors` into config.colors.
export const gothamHyper = {
  topLevel: {
    foregroundColor: palette.foreground,
    backgroundColor: palette.background,
    borderColor:     '#11151c',
    cursorColor:     palette.foreground,
    cursorAccentColor: palette.background,
    selectionColor:  'rgba(10,55,73,0.7)', // base3-ish, translucent
  },
  colors: {
    black:        palette.black,
    red:          palette.red,
    green:        palette.green,
    yellow:       palette.yellow,
    blue:         palette.blue,
    magenta:      palette.magenta,
    cyan:         palette.cyan,
    white:        palette.white,
    lightBlack:   palette.brightBlack,
    lightRed:     palette.brightRed,
    lightGreen:   palette.brightGreen,
    lightYellow:  palette.brightYellow,
    lightBlue:    palette.brightBlue,
    lightMagenta: palette.brightMagenta,
    lightCyan:    palette.brightCyan,
    lightWhite:   palette.brightWhite,
  },
};

export default gothamXterm;

// CommonJS interop (so `require('./gotham')` works too)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = gothamXterm;
  module.exports.palette = palette;
  module.exports.gothamXterm = gothamXterm;
  module.exports.gothamHyper = gothamHyper;
}
