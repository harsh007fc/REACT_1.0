import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks,setTasks] = useState(
    [
        {
            id:1,
            text:'tera mera sabka',
            day:'Feb 5th at 2:30pm',
            reminder:true,
            
        },
        {
            id:2,
            text:'tera mera sabka',
            day:'Feb 5th at 2:30pm',
            reminder:false,
            
        },
        {
            id:3,
            text:'tera mera sabka',
            day:'Feb 5th at 2:30pm',
            reminder:true,
            
        },
        {
            id:4,
            text:'tera mera sabka',
            day:'Feb 5th at 2:30pm',
            reminder:false,
            
        }
    ]
);
  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}



export default App;
