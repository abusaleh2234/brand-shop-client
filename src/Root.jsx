import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

const Root = () => {
    return (
        <div>
            <section className="container mx-auto">
                <Navbar></Navbar>
            </section>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;