import './AddTaskPanel.css';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function AddTaskPanel() {
    const handleFocusChange = () => {
        const passivePanel = document.getElementsByClassName('passive-panel')[0];
        const activePanel = document.getElementsByClassName('active-panel')[0];

        passivePanel.classList.toggle('hidden-element');
        activePanel.classList.toggle('hidden-element');
    }

    return (
        <div style={{color: '#D9D8D8'}} className="add-task-panel-container" onFocus={handleFocusChange} onBlur={handleFocusChange} tabIndex='1'>
            <div className='passive-panel' >
                <AddIcon style={{marginTop: '2px'}}/>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>Add task</div>
            </div>
            <div className='active-panel hidden-element'>
                <MenuIcon style={{marginTop: '14px'}}/>
                <textarea></textarea>
                <button style={null}>
                    <ArrowUpwardIcon/>
                </button>
            </div>
        </div>
    )
}

export default AddTaskPanel