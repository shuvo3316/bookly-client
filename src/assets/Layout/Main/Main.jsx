import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
        <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;