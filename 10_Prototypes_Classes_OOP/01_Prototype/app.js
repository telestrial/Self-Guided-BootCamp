String.prototype.yell = function () {
    return `OMG!!!! ${this.toUpperCase()}!!!!!!!! FDJFDHK!`
}

// All(most) things in Javascript inherit from a prototype, or template, class, with its own
// methods. We can extend these base classes using .prototype. It's not a good idea, generally.
// We can even ovewrite an existed method:

Array.prototype.pop = function () {
    return 'Sorry. I cant let you do that.'
}


