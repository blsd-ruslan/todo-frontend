import './MainSidebar.css';
import settingsIcon from '../assets/settings.svg';
import { useState, useEffect } from 'react';

function MainSidebar() {
    const [sidebarOptions, setSidebarOptions] = useState([]);

    const imageClicked = () => {
      alert('Image clicked!');
    };
  
    useEffect(() => {
      const viewContainer = Array.from(document.querySelector('.view-container')?.children || []);
      const lists = Array.from(document.querySelector('.lists')?.children || []);
      const combinedOptions = Array.from(new Set(viewContainer.concat(lists)));
      setSidebarOptions(combinedOptions);
    }, []);
  
    useEffect(() => {
      sidebarOptions.forEach((element) => {
        element.classList.add('sidebar-option');
      });
    }, [sidebarOptions]);

    return (
        <div className="main-sidebar-container">
            <div className="initials-container">
                <div className='settings-button-container'>
                    <img src={settingsIcon} className='settings-button' alt='settings icon' onClick={imageClicked}></img>
                </div>
                <div className='initials'>
                    Arthur
                </div>
            </div>
            <div className='view-container'>
                <div>My day</div>
                <div>Next 7 days</div>
                <div>All my tasks</div>
                <div> <span>+</span> Create view</div>
            </div>
            <div className='lists-container'>
                <div className='lists-title sidebar-option'>My lists <span>+</span> </div>
                <div className='lists'>
                    <div>Personal</div>
                    <div>Work</div>
                    <div>Hobbies</div>
                    <div>To Buy</div>
                </div>
            </div>

        </div>
    )
}

export default MainSidebar;