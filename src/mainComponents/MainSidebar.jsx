import './MainSidebar.css';
import settingsIcon from '../assets/settings.svg';

function MainSidebar() {
    const imageClicked = () => {
        alert("Image clicked!");
    }
    // console.log(document.getElementsByClassName('view-container')[0].children);
    const viewContainer = Array.from(document.getElementsByClassName('view-container')[0].children)
         ,lists = Array.from(document.getElementsByClassName('lists')[0].children)
         ,sidebarOptions = Array.from(new Set(viewContainer.concat(lists)));
    sidebarOptions.map((element) => {
        element.classList.add('sidebar-option');
        return element;
    })
    console.log(sidebarOptions);
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
                    <div>Personal</div>
                    <div>Work</div>
                    <div>Hobbies</div>
                    <div>To Buy</div>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default MainSidebar;