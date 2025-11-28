import './App.css';
import Heading from "./components/Heading";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Button from "./components/events/Button";
import InputComponent from "./components/hooks/InputComponent";
import RegisterForm from "./components/hooks/RegisterForm";
import TextInputWithFocusButton from "./components/hooks/TextInputWithFocusButton";
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./components/navigation/HomePage";
import AboutUsPage from "./components/navigation/AboutUsPage";
import personPic from "./assets/images/abozar.jpg";
import CalcCss from "./CalcCss.css";
import CalcComponent from "./calc/CalcComponent";



function App() {
    return (
        <>
            <Heading firstname="Abozar" lastname="raghibdoust" greeting="Welcome to Abozar"/>
            <Logo/>
            <Nav home="Home" articles="Articles" about="About" contact="Contact"/>
            <Button/>
            <InputComponent/>
            <RegisterForm/>
            <TextInputWithFocusButton/>
            <SideBar/>

            <img src={personPic} height={200} alt="Personal pic"/>
            <img src={require("./assets/images/abozar.jpg")} height={200} alt="Personal pic"/>


            <div className="App">
                <nav className="nav">
                    <Link to="/" className="nav-item">HomePage</Link>
                    <Link to="/about-us" className="nav-item">AboutUs</Link>
                    <Link to="/calc" className="nav-item">Calculator</Link>
                </nav>
                {/*navigation*/}
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about-us" element={<AboutUsPage/>}/>
                    <Route path="/calc" element={<CalcComponent/>}/>
                </Routes>
            </div>
        </>
    );
}


export default App;
