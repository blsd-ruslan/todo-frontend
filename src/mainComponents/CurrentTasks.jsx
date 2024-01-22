import { useEffect } from 'react';
import './CurrentTasks.css';

function CurrentTasks() {

    useEffect(() => {
        async function fetchTasks() {

        }
    }

    );
    return (
        <div className='current-tasks-container'>
            <div className='current-task'>
                Test
            </div>
            <div className='current-task'>
                Test 2
            </div>
        </div>
    )
}

export default CurrentTasks