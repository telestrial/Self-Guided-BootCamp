// How CSS values are processed.

// Each property has an initial value, used if nothing is declared.
// Browsers specify a root font-size for each page (usually 16px)
// Percentages and relative values are always converted to pixels.
// Percentages are measured relative to their parent's font-size, if used to
// specify font-size.
// Percentages are measured relative to their parent's width, if used to specify
// lengths.
// em are measured relative to their parent font-size, if used to specify font-size.
// em are measured relative to the current font-size, if used to specify lengths.
// rem are always measured relative to the document's root font-size.
// vh and vw are simply percentage measurements of the viewport's height and
// width.
