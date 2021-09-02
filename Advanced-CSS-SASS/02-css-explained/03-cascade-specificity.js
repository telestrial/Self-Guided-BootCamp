// The Cascade
// The process of combining different stylesheets and resolving conflicts between
// different CSS rules and declarations, when more than one rule applies to a
// certain element.

// Think about CSS coming from different stylesheets or browser defaults. How does
// all of this get resolved?

// Importance (weight)       >       Specificity        >      Source order
// 1. User !important         1. Inline Styles            1. Last declaration wins.
// 2. Author !important       2. IDs
// 3. User declarations       3. Classes, pseudo, attrib
// 5. Browser declara..       4. Elements, psuedo-elems

// With specificity, these are counted per inline, IDs, classes, and Elements.
// We've learned about this before in complete web dev boot. There is a special
// consideration here around the categories and their ->individual<- importance. So,
// Inline styles vs. inline styles? IDs vs IDs? Etcetera. A selector with one ID
// is more specific than one with 10000000 classes. If there is a tie of specificity,
// last declaration wins.

// Use !important sparingly.
// The universal selector * has no specificity value.
// Rely more on specificity than on the order of the selectors.
// Order matters most when using 3rd party stylesheets.
