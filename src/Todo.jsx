// export default function ToDo({task, isActive}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// export default function Foods ({food, isHungry, time=0}){
//     if(isHungry==true){
//         return<li>Done: {food} Duration: {time} minutes</li>
//     }
//     return <li>Not done: {food}</li>
// }

//conditional rendering with Ternary operator
// export default function ToDo({ task, isDone, time = 0}) {
//     return isDone ?
//         <li>Done : {task} time : {time} </li>
//         : <li>Not done : {task} time : {time} </li>
// }



//conditional rendering with AND operator

// export default function ToDo({ task, isDone, time = 0}) {
//     return isDone && <li>Done Tasks : {task} time : {time}</li>
// }


//conditional rendering with OR operator
export default function ToDo({ task, isDone, time = 0}) {
    return isDone || <li>Not Done Tasks : {task} time : {time}</li>
}

