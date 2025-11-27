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



function App() {
    return (
        <>
            <Heading firstname="Abozar" lastname="raghibdoust" greeting="Welcome to Abozar" />
            <Logo />
            <Nav home="Home" articles="Articles" about="About" contact="Contact" />
            <Button/>
            <InputComponent />
            <RegisterForm/>
            <TextInputWithFocusButton/>
            <SideBar/>
        </>
    );
}


export default App;
