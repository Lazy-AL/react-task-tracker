import Header from './components/Header';
import Tasks from './components/Tasks'
import {useState} from 'react'
import Task from './components/task';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30',
      reminder:true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30',
      reminder:true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30',
      reminder:false,
  }
  ])
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((Task) => tasks.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, reminder:!task.reminder} : task
      )
    )
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={toggleReminder} /> : 'There is no task'}
    </div>
  );
}

export default App;
