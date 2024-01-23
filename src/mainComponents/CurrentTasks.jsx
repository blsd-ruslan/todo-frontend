import { useEffect } from 'react';
import './CurrentTasks.css';
import CheckBoxTask from '../secondaryComponents/CheckBoxTask';

function CurrentTasks() {

    useEffect(() => {
        async function fetchTasks() {

        }
    }

    );
    return (
        <div className='current-tasks-container'>
            <div className='current-task'>
                <div>
                    <CheckBoxTask/>
                </div>
                <div>
                    
                </div>
            </div>
            <div className='current-task'>
                Test 2
            </div>
        </div>
    )
}

export default CurrentTasks