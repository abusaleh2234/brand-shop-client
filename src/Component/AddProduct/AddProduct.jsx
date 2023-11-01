import Swal from 'sweetalert2';

const AddProduct = () => {

    const hendelAddProduct = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const brandName = form.brandName.value
        const price = form.price.value
        const rating = form.rating.value
        const type = form.type.value
        const image = form.imageUrl.value
        const details = form.details.value
        const addproduct = {
            name,
            brandName,
            price,
            rating,
            type,
            image,
            details
        }
        console.log(addproduct);

        fetch("https://brand-shop-server-rcyta6vsu-md-abusalehs-projects.vercel.app/addProduct", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(addproduct)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Success product add !!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }
    return (
        <div className='container mx-auto py-10 px-4'>
            <h2 className='text-4xl font-semibold text-center mb-6'>Add Product</h2>

            <form onSubmit={hendelAddProduct}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                        <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product Name"></input>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                        <input type="text" name="brandName"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brand Name"></input>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="text" name="price"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" ></input>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <input type="text" name="rating"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" ></input>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Product Type</label>
                        <select name="type" defaultValue={'Phone'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                            <option value="Phone"> Phone</option>
                            <option value="Computer"> Computer</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Watch">Watch</option>
                            <option value="Televisions">Televisions</option>
                            <option value="Camera">Camera</option>
                            <option value="Speaker">Speaker</option>
                            <option value="Application">Application</option>
                            <option value="Prosesor">Prosesor</option>
                            <option value="Graphics">Graphics</option>

                        </select>
                    </div>
                    <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                        <input type="text" name="imageUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image URL" required></input>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description</label>
                    <textarea id="message" name="details" rows="1" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description"></textarea>
                </div>
                <div className="">
                    <input type="submit" value="Add Product" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                </div>
            </form>

        </div>
    );
};

export default AddProduct;
