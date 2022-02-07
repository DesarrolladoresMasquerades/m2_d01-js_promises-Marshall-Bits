console.log("JS Loaded");

// function standardCallback (){
//     console.log("Run in the future" + new Date());
// }

// console.log("time now is " + new Date());

// setTimeout(standardCallback, 3 * 1000)

// console.log("time after is " + new Date());

const magicButton = document.getElementById("magic-button");

// magicButton.onclick = standardCallback;


const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];
// const directionList = []


// function getDirections(step, returningCallback, errorCallback) {
//     setTimeout(() => {
//         console.log(directions[step]);
//         directionList.push(directions[step])

//         if (!directions[step]) errorCallback("Instructions not found.");
//         else returningCallback();
//     }, 2000);
// }

// console.log(
//     "First leg of the journey",
//     getDirections(
//         0,
//         () =>
//             getDirections(
//                 1,
//                 () =>
//                     getDirections(
//                         2,
//                         () =>
//                             getDirections(
//                                 3,
//                                 () => {
//                                     console.log("you arrived");
//                                 }
//                             )
//                     )
//             )
//     )

// );

// function obtainDirections(step) {
//     return new Promise((resolvedCb, rejectedCb) => {
//         setTimeout(() => {
//             console.log(directions[step]);
//             if (!directions[step]) rejectedCb(`Directions not found ${step}`);
//             else resolvedCb();
//         }, 1 * 1000)
//     });
// }

// obtainDirections(0)
//     .then(() => obtainDirections(1))
//     .then(() => obtainDirections(1000))
//     .then(() => obtainDirections(2))
//     .then(() => obtainDirections(3000))
//     .catch((error) => console.log(error))


// function handleMagicClick(event){
//     return obtainDirections(0)
//     .then(() => obtainDirections(1))
//     .then(() => obtainDirections(2))
//     .then(() => obtainDirections(3))
// }


function onClickHandler() {
    return new Promise(
        (resolvedCb, rejectedCb) => {
            const randomeResult = Math.random() > 0.5

            if (randomeResult) {
                resolvedCb("Yo have another to do!")
            }
            else {
                rejectedCb("You ran out of to dos")
            }
        }
    )
}

onClickHandler()
    .then((newTodo) => {
        const todoList = document.getElementById("todo-list")
        todoList.innerHTML += `<div> ${newTodo}`
    })
    .catch((err) => {
        const todoList = document.getElementById("todo-list")
        todoList.innerHTML += `<div> you ran out of todos </div>`
    })



magicButton.onclick = () => onClickHandler()
    .then((newTodo) => {
        const todoList = document.getElementById("todo-list")
        todoList.innerHTML += `<div> ${newTodo} </div>`
    })
    .catch((err) => {
        const todoList = document.getElementById("todo-list")
        todoList.innerHTML += `<div> ${err} </div>`
    })