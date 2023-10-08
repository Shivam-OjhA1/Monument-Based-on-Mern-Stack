import './TajMahal.css';
import UserHeader from '../Common/UserHeader';

const HawaMahal = () => {
    return (
        <div>
            <UserHeader />
            <div className='hawa-main'>
                <div className='hawa-image'></div>
                <div className='hawa-content'>
                    <h2>History of HawaMahal</h2>
                    <p>
                    The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, the founder of the city of Jhunjhunu in the state of Rajasthan. He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace. It was designed by Lal Chand Ustad.
                    </p>
                    <h2>About HawaMahal</h2>
                    <p>
                    The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helped it stay erect for centuries. The Hawa Mahal is dedicated to Lord Krishna.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HawaMahal;