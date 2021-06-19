const bcrypt = require('bcrypt')

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt)
//     console.log(salt)
//     console.log(hash)
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12)
    console.log(hash)
}

const login = async (pw, hashedPW) => {
    const result = await bcrypt.compare(pw, hashedPW)
    if (result) {
        console.log('Matched. Logging you in..')
    } else {
        console.log('Nope.')
    }
}

// hashPassword('monkey')
login('monkey', '$2b$12$MMT2PKgyIZBoqOyzVRCs0.dtkvd8zlkBc7AWFf.LpLgf50a3TzeOi')