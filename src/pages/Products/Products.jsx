import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import appleBanner1 from "../../assets/apple-banner-img.jpg"
import appleBanner2 from "../../assets/apple-banner-2.jpg"
import samsungBanner1 from "../../assets/samsung-baner.png"
import samsungBanner2 from "../../assets/samsung-banner-2.png"
import 'swiper/css';
import ProductsCard from "../../Component/ProductsCard/ProductsCard";


const Products = () => {
    // const params = useParams()
    const loaedProducts = useLoaderData()
    // console.log(loaedProducts);
    const [Products, setProducts] = useState(loaedProducts)


    return (
        <div>
            <div className="">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: `url(${appleBanner2})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Innovate with Apple s Elegance.</h1>
                                    <p className="mb-5">Apple s advertising slogan, Innovate with Apples Elegance, captures the brand s commitment to technological innovation, user-friendly design, and aesthetic sophistication.</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: `url(${appleBanner1})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Google: Organize Your World, One Click.</h1>
                                    <p className="mb-5">Google s slogan emphasizes its mission to streamline information access, connect people worldwide, and simplify digital life through a single, powerful click.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: `url(${samsungBanner1})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Sony: Unleash the Power of Imagination.</h1>
                                    <p className="mb-5">Sony s advertising mantra encapsulates the brand s mission to ignite creativity and innovation, providing top-tier electronics and entertainment experiences that inspire imaginative journeys.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: `url(${samsungBanner2})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Samsung: Innovation, Technology, Style, Quality, Reliability, Performance.</h1>
                                    <p className="mb-5">Samsung s advertising message highlights the brand s commitment to innovative technology, stylish products, high-quality standards, reliability, and exceptional performance across various devices.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 container mx-auto py-10">
                {
                    Products.length > 0 ?Products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                     :<h3 className="text-center text-lg font-bold">product not found</h3>
                }
            </div>
        </div>
    );
};

export default Products;