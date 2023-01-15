import React, {useState, useEffect} from 'react';
/* Modelos */
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
        console.log('Father: [task state has been modified')
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
        return () => {
            console.log('Father: ....Task...')
        };
    }, [tasks]);
    
    function completeTask(task){
        console.log('Complete thist Task::: ', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        //We update the state of the componente with the new list of task and it will update the
        //Iteration of the task in order to show the task updated
        setTasks(tempTasks)
    }

    function deleteTask(task){
        console.log('Deleted Task: ', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index,1)
        setTasks(tempTasks)
    }

    function addTask(task){
        console.log('Added Task: ', task)
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }
    const Table = ()=>{
        return(
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
                    { 
                        tasks.map( (task, index)=>{
                            return(
                                <TaskComponent 
                                    key = {index} 
                                    task = {task}
                                    complete = {completeTask}
                                    remove = {deleteTask}
                                ></TaskComponent>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
    let tasksTable = <Table></Table>
    if(tasks.length > 0){
        tasksTable = <Table></Table>
    } else{
        tasksTable = (<>
            <h3>There are no tasks to show</h3>
            <h4>Please, create one</h4>
        </> )
    }
    return (
        <div>
            <TaskForm add = {addTask} length = {tasks.length}></TaskForm>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your task:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div 
                        className='card-body p-3' 
                        style={{position:'relative', height:'400px'}}
                        data-mdb-perfect-scrollbar='true'
                    >
                        {loading ? (<p>Loading Tasks...</p>):tasksTable}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};


/* TaskListComponent.propTypes = {

}; */


export default TaskListComponent;
