import blog1 from "../../assets/h1-blog-img1.jpg"
import blog2 from "../../assets/h1-blog-img2.jpg"
import blog3 from "../../assets/h1-blog-img3.jpg"

const Blog = () => {
    return (
        <div className="py-8">
            <h3 className="text-2xl font-bold pb-8">Latest blog posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                    <figure><img className="rounded-xl" src={blog1} alt="Shoes" /></figure>
                    <div className="space-y-4">
                        <h2 className="card-title">
                            Best product for Cooding
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>The best product for coding is a high-performance laptop or desktop computer with a fast processor, ample RAM, and a comfortable keyboard.</p>
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline">Read More</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <figure><img className="rounded-xl" src={blog2} alt="Shoes" /></figure>
                    <div className="space-y-4">
                        <h2 className="card-title">
                            Best product for gameing
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>The best product for gaming is a powerful gaming PC or console with a high-end graphics card, fast processor, and a high-refresh-rate monitor or TV.</p>
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline">Read More</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <figure><img className="rounded-xl" src={blog3} alt="Shoes" /></figure>
                    <div className="space-y-4">
                        <h2 className="card-title">
                            Best product for security
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>The best product for iPhone security is a reputable Virtual Private Network service to safeguard your online privacy and data.</p>
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline">Read More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;