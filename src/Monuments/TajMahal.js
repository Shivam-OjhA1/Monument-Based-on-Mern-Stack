import './TajMahal.css';
import UserHeader from '../Common/UserHeader';

const TajMahal = () => {
    return (
        <div>
            <UserHeader />
            <div className='taj-main'>
                <div className='taj-image'></div>
                <div className='taj-content'>
                    <h2>History of TajMahal</h2>
                    <p>
                        It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD.
                    </p>
                    <h2>About TajMahal</h2>
                    <p>
                        An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TajMahal;