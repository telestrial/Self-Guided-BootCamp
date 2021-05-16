let todos = [];

let command
let newItem
let deleteItem

while (command !== 'quit') {

    //Handles commands
    if (command === 'new') {
        newItem = prompt('What do you have to do?')
        todos.push(newItem);
        console.log(`"${newItem}" added to list!`)
    } else if (command == 'list') {
        // Displays Todos
        console.log('*****************')
        if (todos.length === 0) {
            console.log('Nothing yet!')
        } else {
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i + 1}: ${todos[i]}`)
            }
        }
        console.log('*****************')
        //
    } else if (command == 'delete') {
        deleteItem = prompt('What number todo should be removed?')
        todos.splice((deleteItem - 1), 1)
        console.log(`Item #${deleteItem} removed from list!`)
    }

    command = prompt('Command').toLowerCase()
}

console.log('Thanks for using this terrible program!')

// Problems with this implementation:
// 1) It would be nice to display the commmands in some elegant way. The issue
//    is that console just flows line after line and it can be confusing.
//
// 2) Handling invalid inputs. On the prompt and on the delete, specifically.
//    Nothing that has been taught, yet, beyond isNan(). Problem with that is
//    isNan('') => false, as far as I could tell.
//
// 3) Was initializing the variables outside the loop necessary? Unsure.
//    What about todos as a let vs. const? Unsure.