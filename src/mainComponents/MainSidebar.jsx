import './MainSidebar.css';
import settingsIcon from '../assets/settings.svg';

function MainSidebar() {
    const imageClicked = () => {
        alert("Image clicked!");
    }
    console.log(document.getElementsByClassName('view-container').children);
    // const sidebarOptions = Array.from(document.getElementsByClassName('view-container').children).map;
    // sidebarOptions.forEach((element) => element.classList.add('sidebar-option'));

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
                <div>Create view</div>
            </div>
            <div className='lists-container'>
                <div className='lists-title sidebar-option'>My lists <span>+</span></div>
                <div className='lists'>
                    <div className='sidebar-option'>Personal</div>
                    <div className='sidebar-option'>Work</div>
                    <div className='sidebar-option'>Hobbies</div>
                    <div className='sidebar-option'>To Buy</div>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default MainSidebar;