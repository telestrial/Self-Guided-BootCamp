const multiply = (x, y) => x * y;

const square = x => multiple(x, x);

const isRightTriangle = (a, b, c) => {
    square(a) + square(b) === square(c)
};


// isRightTriangle calls square on a and square calls multiple.

// multiple(3 * 3)
// square(3)
// isRightTriangle(3, 4, 5)

// 9
// square(3)
// isRightTriangle(3, 4, 5)

// 
// 9
// isRightTriangle(3, 4, 5)

// 
// 
// isRightTriangle(3, 4, 5)
// return 9 + square(b) === square(c)

// multiple(4 * 4)
// square(4)
// isRightTriangle(3, 4, 5)

// 16
// square(4)
// isRightTriangle(3, 4, 5)

// 
// 16
// isRightTriangle(3, 4, 5)

// 
// 
// isRightTriangle(3, 4, 5)
// return 9 + 16 === square(5)

// etc...it WAITS on the called function and the functions those functions
// call before it continues ----> this way in an evaluation.

