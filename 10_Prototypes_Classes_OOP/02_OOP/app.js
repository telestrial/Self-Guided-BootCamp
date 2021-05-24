// OOP comes down to organization of code.

// This is one approach. It is a function that creates an object:
function makeColor(r, g, b) {
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    color.hex = function () {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return color
}
// The downside above is that every instance of color (line 5) creates its own COPY of the
// functionality (method). Using the 'new' keyword, you would not duplicate functionality.


// here's another way. CLeaner in that you put the methods on the prototype.
function okayColor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// defining outside using .prototype extends the base class. 
okayColor.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

okayColor.prototype.hex = function () {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

okayColor.prototype.rgba = function (a = 1) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// new Color(255, 40, 100);
// Creates a blank, plain JavaScript Object;
// Links (sets the constructor of) this objcet to another objcet;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object;

// Here's the real deal way to organize the code with the syntactical sugar of class:

class Color {

    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB}, ${a})`;
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }

    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`
    }

    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }

    calcHSL() {
        let { r, g, b } = this;
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            h = (b - r) / delta + 2;
        else
            h = (r - g / delta + 4);

        h = Math.round(h * 60);

        if (h < 0) h += 360;
        l = (cmax + cmin) / 2;

        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        this.h = h;
        this.s = s;
        this.l = l;
    }
}

