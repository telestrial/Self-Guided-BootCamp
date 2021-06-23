const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
const locale = franc(input);

try {
    console.log(langs.where('3', locale)['name'].green)
} catch (e) {
    console.log('Could not match language. Please try again with a larger sample.'.red)
}

