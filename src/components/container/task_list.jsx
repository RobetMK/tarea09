import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
/* import PropTypes from 'prop-types'; */


const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'DefaulDesc', false, LEVELS.NORMAL)
    const changeState = (id)=>{
        console.log('TODO: Cambiar estado de una tarea')
    }
    return (
        <div>
            <div>Your task:</div>
            {/* For para poner todas las tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


/* TaskListComponent.propTypes = {

}; */


export default TaskListComponent;
