import React, { FC, useContext } from 'react';
import { Form, ListGroup} from 'react-bootstrap';
import { DataContext } from '../../context';
import Tasks, { task } from '../../redux/types/tasksTypes';

const TasksPage: FC = () => {
    const {tasks, currentUser} = useContext(DataContext)
    const currentTasks: task[] = []
    tasks.map((task: task) => {
        if (task.userId == currentUser) {
            currentTasks.push(task)
        }
    })

    return (
        <ListGroup>
            <ListGroup.Item>TASK LIST</ListGroup.Item>
            {currentTasks.map((task: task) => 
                <ListGroup.Item key={task.id} variant="secondary">
                    <Form.Check 
                    isInvalid
                    type="switch"
                    id="custom-switch"
                    label={task.title}
                    />
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default TasksPage;