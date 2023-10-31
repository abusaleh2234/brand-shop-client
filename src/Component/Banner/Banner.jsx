// import banner1 from "../../assets/banner-1.jpg"
import banner2 from "../../assets/banner-2.jpg"

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-6xl font-bold">Explore best brand Products</h1>
                    <p className="mb-5">I can provide information about various products and their respective brands, but I will need more specific details about the type of product you re interested in. Please let me know the product category or brand you have in mind, and I will provide a concise description.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;