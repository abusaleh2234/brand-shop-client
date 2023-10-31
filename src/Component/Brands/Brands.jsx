import { Link, useLoaderData } from "react-router-dom";


const Brands = () => {

    const loadedBrands = useLoaderData()
    // console.log(loadedBrands);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto py-10">
                
                {
                    loadedBrands.map(brand => <Link to={`/products/${brand.brandName}`} key={brand._id}><div   className="relative w-full grid items-end place-items-start bg-center bg-cover h-72" style={{ backgroundImage: `url(${brand.brandImage})` }}>
                    <div className="absolute hero-overlay h-full bg-opacity-0 hover:bg-opacity-60"></div>
                    <div className="flex justify-start items-end z-10">
                        <div className="">
                            <h1 className="mb-5 text-white text-5xl font-bold">{brand.brandName}</h1>
                        </div>
                    </div>
                </div></Link>)
                }
            </div>
        </div>
    );
};

export default Brands;