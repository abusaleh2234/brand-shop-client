import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>

            <footer className=" dark:bg-gray-900 bg-neutral">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/"  className="flex items-center mb-4 sm:mb-0">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-300 dark:text-white">Branded Station</span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
                            </li>
                            <li>
                                <Link to="/addproduct" className="mr-4 hover:underline md:mr-6 ">Add Product</Link>
                            </li>
                            <li>
                                <Link to="/mycart" className="mr-4 hover:underline md:mr-6 ">My Cart</Link>
                            </li>
                            <li>
                                <Link to="/login" className="mr-4 hover:underline md:mr-6 ">Login</Link>
                            </li>
                           
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline hover:text-white">Branded Station™</Link>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    );
};

export default Footer;