import './AmerFort.css';
import UserHeader from '../Common/UserHeader';

const Gateway = () => {
    return (
        <div>
            <UserHeader />
            <div className='amer-main'>
                <div className='gateway-image'></div>
                <div className='amer-content'>
                    <h2>History of Gateway of India</h2>
                    <p> 
                    The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911. Built in Indo-Saracenic style, the foundation stone for the Gateway of India was laid on 31 March 1911. The structure is an arch made of basalt, 26 metres (85 feet) high.
                    </p>
                    <h2>About Gateway of India</h2>
                    <p>
                    The Gateway of India is an arch monument built during the 20th century in Bombay, India. The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Gateway;