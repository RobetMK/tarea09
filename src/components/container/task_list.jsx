import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
/* import PropTypes from 'prop-types'; */


const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'DefaulDesc', false, LEVELS.NORMAL)
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
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
            <h1>Your task:</h1>
            {/* For para poner todas las tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


/* TaskListComponent.propTypes = {

}; */


export default TaskListComponent;
