import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import appleBanner1 from "../../assets/apple-banner-img.jpg"
import appleBanner2 from "../../assets/apple-banner-2.jpg"
import samsungBanner1 from "../../assets/samsung-baner.png"
import samsungBanner2 from "../../assets/samsung-banner-2.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductsCard from "../../Component/ProductsCard/ProductsCard";


const Products = () => {
    // const params = useParams()
    const loaedProducts = useLoaderData()
    // console.log(loaedProducts);
    const [Products, setProducts] = useState(loaedProducts)


    return (
        <div>

            <h3>products{Products.length}</h3>

            <div className="">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img className="w-full h-full" src={appleBanner1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={appleBanner2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={samsungBanner1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={samsungBanner2} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto py-10">
                {
                    Products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;