//Array Iteration

const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

// i < animals.length is quite useful because here you do not need to know the
// length of an array to iterate over its contents.

// reverse reverse!

for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i]);
}

// Nesting loops

// Outer loop runs 10 times (i loop). Inner loop (j loop) runs 3 times.

for (let i = 1; i < 10; i++) {
    console.log(`i is ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`   j is ${j}`);
    }
}


// Looping nested arrays:

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(seatingChart[i][j]);
    }
}