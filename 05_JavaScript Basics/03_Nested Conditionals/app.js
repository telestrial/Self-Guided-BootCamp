const password = prompt('Please enter a new password.')

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Great password. Impressive.')
    } else {
        console.log('Password cannot contain spaces')
    }
} else {
    console.log("Your password is too short. Must be 6+ characters.")
}

