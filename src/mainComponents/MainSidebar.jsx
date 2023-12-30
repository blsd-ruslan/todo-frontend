import './MainSidebar.css';

function MainSidebar() {
    const imageClicked = () => {
        alert("Image clicked!");
    }
    return (
        <div className="main-sidebar">
            <div className="initials-container">
                <div className="settings-button">
                    <img onClick={imageClicked}></img>
                </div>
                <div>
                    Arthur
                </div>
            </div>
            <div className="lists-container">
                <div className="lists-container-title">
                    My lists
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default MainSidebar;