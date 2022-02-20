import Header from './Components/Header'
import Tasks from './Components/Tasks'
import React from "react";
function App() {
  
  const [tasks, setTasks] = React.useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
] )
const onClick=() => {
  tasks.push( {
      id: 4,
      text: 'Going to a Restraunt',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
  });
  // tasks == [...tasks]
  setTasks([...tasks]);
};

  return (
    <div className="container">
      <Header onClick={onClick}/>
      <Tasks tasks={tasks}/>
    </div>
  
  );
}

export default App;
