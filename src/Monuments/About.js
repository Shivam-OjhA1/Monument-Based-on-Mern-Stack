import Header from "../Common/Header";
import './About.css'

const About = () =>{
    return(
        <div>
            <Header />
            <div className="about-base">
                <div className="about-image"></div>
                <div className="about-content">
                    <h1>Technology Used</h1>
                    <p>React. js is a front-end JavaScript framework developed by Facebook. To build composable user interfaces predictably and efficiently using declarative code, we use React. It's an open-source and component-based framework responsible for creating the application's view layer.</p>
                    <h1>What is Monuments?</h1>
                    <p>What do you mean by monument?<br/>
                    : something that serves as a memorial. especially : a building, pillar, stone, or statue honoring a person or event. 2. : a work, saying, or deed that lasts or that is worth preserving. the book is a monument of scholarship.</p>
                </div>
            </div>
        </div>
    );
}

export default About;