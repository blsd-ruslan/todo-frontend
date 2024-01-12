import './AddTaskPanel.css';
import AddIcon from '@mui/icons-material/Add';

function AddTaskPanel() {
    // TODO: switch states of hidden between these 2 nested containers
    return (
        <div className="add-task-panel-container">
            <div style={{color: '#D9D8D8'}}>
                <AddIcon />
                Add task
            </div>
            <div className='hidden-element'>
                <textarea rows='1'>

                </textarea>
            </div>
        </div>
    )
}

export default AddTaskPanel