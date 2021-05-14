const password = prompt('Enter your password');

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('VALID PASSWORD!');
} else {
    console.log('Incorrect format for password!');
}

// 0-5 - Free
// 5-10 - $10
// 10-65 - $20
// 65+ - Free

const age = 11;

if ((age > 0 && age < 5) || age >= 65) {
    console.log('FREE')
} else if (age >= 5 && age < 10) {
    console.log('$10')
} else if (age >= 10 && age < 65) {
    console.log('$20')
} else {
    console.log('INVALID AGE!')
}

const firstName = prompt("Enter your first name");

if (!firstName) {
    console.log('TRY AGAIN!')
}

const day = 1;

// if (day === 1) {
//     console.log('MONDAY')
// } else if (day === 2) {
//     console.log('TUESDAY')
// } else if (day === 3) {
//     console.log('WEDNESDAY')
// } else if (day === 4) {
//     console.log('THURSDAY')
// } else if (day === 5) {
//     console.log('FRIDAY')
// } else {
//     console.log('FREAKIN WEEKEND')
// }

switch (day) {
    case 1:
        console.log('MONDAY')
        break;
    case 2:
        console.log('TUESDAY')
        break;
    case 3:
        console.log('WEDNESDAY')
        break;
    case 4:
        console.log('THURSDAY')
    case 5:
        console.log('FRIDAY')
    case 6:
    case 7:
        console.log('WEEKEND')
        break;
    default:
        console.log('INVALID')
}