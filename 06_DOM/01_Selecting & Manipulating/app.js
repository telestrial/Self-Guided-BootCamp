const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// Query Selector
// document.querySelector('p');
// Would return the FIRST MATCH item.
// document.querySelector('#banner') // Works with ID
// document.querySelector('.square') // works with class
// document.querySelector('a[title="Java"]);
// this would select the first link with the title of Java

// QuerySelectorAll is the industry standard and used a ton.
// document.querySelectorAll('p') => all matching paragraphs

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}