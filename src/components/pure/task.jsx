import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
//importamos la hoja de estilos task.scss
import '../../styles/task.scss';

const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log('Child: Task created first time')
        return () => {
            console.log(`Child: ${task.name} is going to unmount`)
        };
    }, [task]);
    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
            default: break;
        }
    }
    /**
     * Fuction that returns icon of completed task
     */
    function taskIconCompleted(){
        if(task.completed){
            return ( <i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color:'green', fontWeight:'bold'}}></i> )
        } else {
            return ( <i onClick={()=>complete(task)} className='bi-toggle-off task-action' style={{color:'grey'}}></i> )
        }
    }
    
    return (
        <tr className={task.completed ? 'fw-normal task-completed' : 'fw-normal task-pending'}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                <span>{taskLevelBadge()}</span>
            </td>
            <td className='align-middle'>
                {taskIconCompleted()}
                <i  className='bi-trash task-action' 
                    onClick={()=>remove(task)} 
                    style={{color:'tomato', fontSize:'20px'}}>
                </i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
