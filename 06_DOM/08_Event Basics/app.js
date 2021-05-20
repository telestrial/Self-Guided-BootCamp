const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('YOU CLICKED ME!');
    console.log('...I hope it worked.');
}

function scream() {
    console.log('AAAAAAAAH!')
    console.log('Stop touching me.')
}

btn.onmouseenter = scream; // you do not use ()s. You are passing it. Not invoking it.

document.querySelector('h1').onclick = () => { alert('you clicked the h1'); }

// You're always passing a function; but not function(); because you
// are not executing it. The event handler will execute it.

// v3 is Eventlistener..and it's the standard.

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', () => { alert("CLICKED!"); })

function twist() {
    console.log('TWIST');
}

function shout() {
    console.log('SHOUT');
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

// the above would not work because onclick is a property. It gets overwritten.

tasButton.addEventListener('click', twist, { once: true })
tasButton.addEventListener('click', shout)

// addEventListener allows for multiple events on one action.
// once: true => will run once and then REMOVE from listener entirely.

// There is a companion method called .removeEventListener, and this can
// be important for large sites with lots of events in terms of performance.