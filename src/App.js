import { Route, Routes } from "react-router-dom";
import Home from "./Monuments/Home";
import Login from "./Monuments/Login";
import UserHome from "./Monuments/UserHome";
import About from "./Monuments/About";
import TajMahal from "./Monuments/TajMahal";
import HawaMahal from "./Monuments/HawaMahar";
import IndiaGate from "./Monuments/IndiaGate";
import AmerFort from "./Monuments/AmerFort";
import Gateway from "./Monuments/Gateway";
import Jaisalmer from "./Monuments/Jaisalmer";
import Charminar from "./Monuments/Charminar";
import QutubMinar from "./Monuments/QutubMinar";
import Khajuraho from "./Monuments/Khajuraho";
import RedFort from "./Monuments/RedFort";
import PrivateRoute from "./Monuments/PrivateRoutes";


const App = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/userhome" element={<UserHome />} />
                    <Route path="/tajmahal" element={<TajMahal />} />
                    <Route path="/hawamahal" element={<HawaMahal />} />
                    <Route path="/indiagate" element={<IndiaGate />} />
                    <Route path="/amerfort" element={<AmerFort />} />
                    <Route path="/gateway" element={<Gateway />} />
                    <Route path="/jaisalmer" element={<Jaisalmer />} />
                    <Route path="/charminar" element={<Charminar />} />
                    <Route path="/qutubminar" element={<QutubMinar />} />
                    <Route path="/khajuraho" element={<Khajuraho />} />
                    <Route path="/redfort" element={<RedFort />} />
                </Route>
            </Routes>

        </div>
    );
}

export default App;