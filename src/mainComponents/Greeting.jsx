import './Greeting.css';

function Greeting() {
    const currentHour = new Date().getHours();
    const greeting = () => {
        let timeOfDay;
        let emoji;
        if (currentHour >= 5 && currentHour < 12) {
            timeOfDay = 'Morning';
            emoji = '🌅' ;
        } else if (currentHour >= 12 && currentHour < 18) {
            timeOfDay = 'Afternoon';
            emoji = '⛅';
          } else if (currentHour >= 18 && currentHour < 24) {
            timeOfDay = 'Evening';
            emoji = '🌇' ;
          } else {
            // For currentHours from midnight to 4 AM
            timeOfDay = 'Night';
            emoji = '🌕' ;
          }

        return `Good ${timeOfDay}, Arthur ${emoji}`
    }
    return (
        <div>
            <div className="greeting-phrase">
                {greeting()}
            </div>
        </div>
    )
}

export default Greeting;