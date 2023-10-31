import Banner from "../../Component/Banner/Banner";
import Blog from "../../Component/Blog/Blog";
import Brands from "../../Component/Brands/Brands";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Brands></Brands>
            <div className="container mx-auto">
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Home;