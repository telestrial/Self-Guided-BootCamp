// Loops repeat functionality (code). Instead of printing the same thing one
// thousand times, we can code one print in a loop than runs 1k time. Less code. 
// Economy. "For every thing, do a thing."

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

// 10 prints. 10 lines of code.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Fewer lines of code. Same result. Noice.
// let i <--common iterator variable. counts.
// i <= 10 <---boolean condition. while true. loop runs. care of inf loop.
// i++ - runs after each loop: i += 1
// any code can be repeated inside the loop. not just printing counts.

// Evens

for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// 100 decrement by 10

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// Can increment/decrement through any opeartor: +, -, *, /. Most common + and -.

// Infinite Loop. i >= 0 will never be false. Creates problematic issues with
// hardware, especially.

// DO NOT RUN THIS UNLESS YOU WANT TO SEE WHAT AN INFINITE LOOP LOOKS LIKE.
// =====================================================
// for (let i = 20; i >= 0; i++) {
//    console.log(i);
//}
// =====================================================


