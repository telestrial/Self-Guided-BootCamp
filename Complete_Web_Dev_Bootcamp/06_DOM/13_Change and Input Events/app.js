const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// Think checking a password. when you LEAVE an input, this will run:
// input.addEventListener('change', function (e) {
//     console.log('fdhsjkjlfdas');
// })


// This instead will fire on every -change- to the input.
input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})

