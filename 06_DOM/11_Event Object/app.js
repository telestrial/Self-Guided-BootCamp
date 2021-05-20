document.querySelector('button').addEventListener('click', (evt) => {
    console.log(evt);
})


// const input = document.querySelector('input');

// input.addEventListener('keydown', function (evt) {
//     console.log(evt.key)
//     console.log(evt.code)
// })

// input.addEventListener('keyup', function () {
//     console.log('KEYUP')
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!')
            break;
        case 'ArrowLeft':
            console.log('LEFT!')
            break;
        case 'ArrowRight':
            console.log('RIGHT!')
            break;
        default:
            console.log('IGNORED!')
    }
})