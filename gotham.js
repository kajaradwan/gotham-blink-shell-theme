// Gotham — Blink Shell theme
// "Code never sleeps in Gotham City."
//
// Original colorscheme by Andrew Wielgosz (whatyouhide/vim-gotham).
// ANSI 16-color values taken verbatim from the canonical terminal port
// (whatyouhide/gotham-contrib), converted RGB -> hex.
//
// Blink evaluates this file as a plain script and expects t.prefs_.set(...)
// calls — NOT an ES module. (Do not add `export`/`import` here; that throws a
// syntax error in Blink's eval context, leaving you with a black screen.)
//
// Install: Blink -> Settings -> Appearance -> Themes -> Add (paste the raw URL),
// then select "Gotham".
//
// Palette order below is Blink/hterm's:
//   black, red, green, yellow, blue, magenta, cyan, white,
//   lightBlack, lightRed, lightGreen, lightYellow, lightBlue,
//   lightMagenta, lightCyan, lightWhite
//
// Note: Gotham intentionally maps bright green/yellow/blue to its DARK UI
// background shades, not to lightened colors — so they look near-black. This is
// faithful to the original; it's not a bug.

t.prefs_.set('color-palette-overrides', [
  '#0a0f14', // black
  '#c33027', // red
  '#26a98b', // green
  '#edb54b', // yellow
  '#195465', // blue
  '#4e5165', // magenta
  '#33859d', // cyan
  '#98d1ce', // white
  '#10151b', // lightBlack
  '#d26939', // lightRed
  '#081f2d', // lightGreen  (dark by design)
  '#245361', // lightYellow (dark by design)
  '#093748', // lightBlue   (dark by design)
  '#888ba5', // lightMagenta
  '#599caa', // lightCyan
  '#d3ebe9', // lightWhite
]);

t.prefs_.set('foreground-color', '#98d1ce');
t.prefs_.set('background-color', '#0a0f14');
t.prefs_.set('cursor-color', 'rgba(152,209,206,0.5)');
