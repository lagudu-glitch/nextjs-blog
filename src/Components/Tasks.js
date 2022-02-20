import ADDButton from './Button'
const React = require("react");
function Tasks ({tasks, onClick}) {
    
    return (
        <>
        {tasks.map(task => <h3>{task.text}</h3>)}
        </>
    )
}

export default Tasks