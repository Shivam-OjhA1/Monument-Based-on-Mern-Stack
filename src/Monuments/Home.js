import Header from "../Common/Header";
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-base">

                <div className="home-main">
                <h1>Welcome <br /> To My <span>Monument </span> Project</h1>

                </div>
                <div className="home-main1">
                    <p>Certainly! India is a land of rich history,<br /> and its historical places serve as a testament to the country's <br />heritage and the basis of its cultural, architectural,<br /> and historical significance.<br /> Here are introductions for a few iconic Indian historical places:</p>
                </div>
                <footer>
                    Project-Name:<b>Monument</b>
                    <br />
                    Developed by-<b>Shivam Ojha </b>with the help by <b> Mr.Ankit kumar Singh.</b><br />
                    Contact Us:9140398127;

                </footer>

                    
                
            </div>
        </div>
    );
}

export default Home;

