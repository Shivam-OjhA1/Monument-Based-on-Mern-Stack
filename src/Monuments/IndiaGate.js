import './TajMahal.css';
import UserHeader from '../Common/UserHeader';

const IndiaGate = () => {
    return (
        <div>
            <UserHeader />
            <div className='india-main'>
                <div className='india-image'></div>
                <div className='india-content'>
                    <h2>History of India-Gate</h2>
                    <p>
                    The foundation stone of India Gate was laid by His Royal Highness, the Duke of Connaught in 1921 and it was designed by Edwin Lutyens. The monument was dedicated to the nation 10 years later by the then Viceroy, Lord Irwin. Another memorial, Amar Jawan Jyoti was added much later, after India got its independence.
                    </p>
                    <h2>About India-Gate</h2>
                    <p>
                    India Gate, official name Delhi Memorial, originally called All-India War Memorial, monumental sandstone arch in New Delhi, dedicated to the troops of British India who died in wars fought between 1914 and 1919. India Gate, which is located at the eastern end of the Rajpath (formerly called the Kingsway), is about 138 feet (42 metres) in height.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default IndiaGate;