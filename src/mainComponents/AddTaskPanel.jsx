import './AddTaskPanel.css';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState, useRef } from 'react';

function AddTaskPanel() {
    // const [textareaValue, setTextareaValue] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
          const addTaskPanelContainer = document.getElementsByClassName('add-task-panel-container')[0];
          const activePanel = document.getElementsByClassName('active-panel')[0];
          const passivePanel = document.getElementsByClassName('passive-panel')[0];
    
          if (addTaskPanelContainer && !addTaskPanelContainer.contains(e.target)) {
            activePanel.parentElement.classList.remove('clicked');
            activePanel.classList.add('hidden-element');
            passivePanel.classList.remove('hidden-element');
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
    // TODO: change style for: 1)onBlur with text typed 2)fix send button icon
    const handleClick = () => {
        const passivePanel = document.getElementsByClassName('passive-panel')[0];
        const activePanel = document.getElementsByClassName('active-panel')[0];

        passivePanel.classList.toggle('hidden-element');
        activePanel.classList.toggle('hidden-element');
        if (!activePanel.classList.contains('hidden-element') && inputRef.current) { 
            activePanel.parentElement.classList.add('clicked');
            inputRef.current.focus(); 
        }
    };
    // const handleTextareaChange = (e) => {
    //     if (e.target.value.trim() !== '') {
    //         setTextareaValue(e.target.value);
    //         const addButton = document.getElementsByClassName('add-button')[0];
    //         addButton.classList.add('active');
    //     }
    // }

    const handleAddClick = (e) => {
        e.preventDefault();
        console.log('text field value: ' + inputRef.current.value);
        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return response.json();
        }

        postData('http://127.0.0.1:8000/post_endpoint/', { text: 'amogus' }).then((data) => {
            console.log(data);
        });
    }

    return (
        <div style={{ color: '#D9D8D8' }} className="add-task-panel-container" onClick={handleClick}>
            <div className='passive-panel' >
                <AddIcon style={{ marginTop: '2px' }} />
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>Add task</div>
            </div>
            <div className='active-panel hidden-element'>
                <MenuIcon style={{ marginTop: '14px', paddingLeft: '4px' }} />
                <input ref={inputRef} onClick={() => { this.select() }} type='text' className='add-task-field' onBlur={() => {document.getElementsByClassName('add-task-panel-container')[0].classList.remove('clicked')}}></input>
                <button onClick={handleAddClick} className='add-button'>
                    <ArrowUpwardIcon />
                </button>
            </div>
        </div>
    )
}

export default AddTaskPanel