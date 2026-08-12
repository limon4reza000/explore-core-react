// export default function ToDo({task, isActive}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

export default function Foods ({food, isHungry, time=0}){
    if(isHungry==true){
        return<li>Done: {food} Duration: {time} minutes</li>
    }
    return <li>Not done: {food}</li>
}