import React, { FC, useContext, useEffect, useState } from 'react';
import { Form, ListGroup} from 'react-bootstrap';
import { useLocalStorage } from '../../components/hooks/useLocalStorage';
import { DataContext } from '../../context';
import { task } from '../../redux/types/tasksTypes';

const TasksPage: FC = () => {
    const {tasks, currentUser} = useContext(DataContext)
    const [checkedTasks, setCheckedTasks] = useState<any[]>([])
    const [local, setLocal] = useLocalStorage('tasks', '0')
    const currentTasks: task[] = []

    tasks.map((task: task) => {
        tasks.completed = false
        if (task.userId === Number(currentUser)) {
            currentTasks.push(task)
        }
    })
    //вывести в массив чекнутых id из localstorage
    // const localId = JSON.parse('[' + local + ']')
    
    const handleCheck = (task: task) => {
        if (task.completed === false) {
            task.completed = !task.completed
            setCheckedTasks([...checkedTasks, task])
        } else {
            task.completed = !task.completed
            setCheckedTasks(checkedTasks.filter((item: task) => item.completed !== false))
        }
    }
   
    useEffect(() => {
        const json = String(currentTasks.map((task: task) => {
            let falseTask = 0;
            if (task.completed === true) {
                return task.id
            } else {
                return falseTask
            }
        }))
        setLocal(json)
    }, [currentTasks])

    useEffect(() => {
        const json = String(checkedTasks.map((checked: task) => { return checked.id }))
        setLocal(json)
    }, [checkedTasks])
    
    return (
        <ListGroup>
            <ListGroup.Item>TASK LIST</ListGroup.Item>
            {currentTasks.map((task: task) => {
                let check: boolean = false;
                if (task.completed === true) {
                    check = true
                }
                return (
                    <ListGroup.Item key={task.id} variant="secondary">
                        <Form.Check
                        checked={check}
                        onChange={() => handleCheck(task)}
                        type="switch"
                        id="true"
                        label={task.title}
                        />
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    );
};

export default TasksPage;