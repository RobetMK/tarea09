import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';
/* import PropTypes from 'prop-types'; */


const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Default1', false, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Default2', true, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Default3', false, LEVELS.BLOCKING)
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Modificación de tareas[task state has been modified')
        setLoading(false)
        return () => {
            console.log('Taslist componente is goin to unmount')
        };
    }, [tasks]);
    const changeCompleted = (id)=>{
        console.log('TODO: Cambiar estado de una tarea')
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your-task:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div 
                        className='card-body p-3' 
                        style={{position:'relative', height:'400px'}}
                        data-mdb-perfect-scrollbar='true'
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index)=>{
                                    return(
                                        <TaskComponent 
                                            key={index} 
                                            task={task}
                                        ></TaskComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};


/* TaskListComponent.propTypes = {

}; */


export default TaskListComponent;
