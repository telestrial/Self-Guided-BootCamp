//// An array is a mutable collection of objects.

// let array = ['this', 2, true, null]

//// It can consist of any types and can be addressed and changed like so:

// array[0] = 'that';
//// array would then equal: ['that', 2, true, null]
//// Can also access index of index, if that type has index: array[0][0] => 't'

//// There are many different types of associated methods. 4 big ones:

//// array.push(item) - adds an item to the END of the array
//// array.pop() - No argument will take the last item out and return it to you
//// array.shift() - Mirror to pop..will give you first item
//// array.unshift - Mirror of push..will add an item to the BEGINNING of the array

//// array.concat = combines two arrays
// let dogs = ['rusty', 'pep']
// let cats = ['blue', 'kitty']
// dogs.concat(cats) => ['rusty', 'pep', 'blue', 'kitty']
//// does not change concatinated arrays

//// array.indexOf - no different than string method but finds FIRST position in array. not wise to dupes

//// array.reverse - obvious, but -DOES- destroy array.

//// array.slice(start[, finish]) - pull a portion of an array. finish will be UP TO BUT NOT INCLUDING. 
//// Negative numbers start for end.

//// array.splice(start[, how many delettions?, with what?] ) - Joining/augmenting. destructive. Three args.
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
// colors.splice(1, 0, 'red-orange') =>
// colors = ['red', 'red-orange', 'orange'...]
//// 0 as second input means insert and no delete

//// array.sort() - destructively sorts an array from least to greatest. does so "indescriminently" (UTF string value)
//// will be used with functions but, at this point in the course, we don't know how.

//// Quick note on == vs === and arrays. Comparator here is not comparing what's inside. It doesn't care. It's only
//// comparing the reference in memory. Every erray is a new array. But references to that same array address the
//// same thing in memory.
// [1, 2, 3] === [1 , 2, 3] => false
// let nums = [1, 2, 3]
// let numsCopy = nums
// nums === numsCopy => true
// numsCopy.push(4)
// nums => [1, 2, 3, 4]
//// it's about the refrence in memory.

//// const and arrays.
//// const has been so far discussed as unchangable...but what it's really doing is making sure the REFERENCE doesn't change.
//// Therefore, per above with == vs. ===, const arrays are mutable because they reference the same space in memory,
//// regardless of how you change (.pop, .shift, etc). They will always do so unless we try to assign a new reference--a declared array, string, number, w/e
// const eArray = [1, 2, 3, 4]
// eArray.pop() => [1, 2, 3]
// eArray = [1, 2, 3] => false

////Nested Arrays
// const color = [
//     ['red', 'crimson'],
//     ['orange', 'dark orange'],
//     ['yellow', 'golden rod'],
//     ['green', 'olive'],
//     ['blue', 'navy blue'],
//     ['purple', 'orchid']
// ]
//// tic-tac-toe
// const board = [
//     ['X', 'O', 'X'],
//     ['O', null, 'X'],
//     ['O', 'O', 'X']
// ]
// board[1][1] => null