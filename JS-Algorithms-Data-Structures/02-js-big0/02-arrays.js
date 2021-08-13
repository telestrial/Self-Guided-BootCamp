// These are ordered, and that presents challenges in operating on them.
// Therefore, use them when you -need- order. Not just because.

let names = ['Michael', 'Melissa', 'Andrea'];

//    'Michael'    'Melissa'   'Andrea' PUSH=>'Raj' <--this is easy.
//        0            1          2             3

// Access is O(1). Searching is O(n). However, insertion and removal
// is dependent on several factors.

// When you access an element[this], javascript is -not- going through
// each element. Instead, it goes directly to where that value at
// that index is stored in memory.
