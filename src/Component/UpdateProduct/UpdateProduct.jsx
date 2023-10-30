import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const loadedproduct = useLoaderData()
    const { image, name, rating, price, brandName, type, _id, details } = loadedproduct;
    console.log(loadedproduct);

    const hendelUpdateProduct = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const brandName = form.brandName.value
        const price = form.price.value
        const rating = form.rating.value
        const type = form.type.value
        const imageUrl = form.imageUrl.value
        const details = form.details.value
        const updatedproduct = {
            name,
            brandName,
            price,
            rating,
            type,
            imageUrl,
            details
        }
        console.log(updatedproduct);

        fetch(`http://localhost:5000/updateProduct/${_id}`,{
            method:"PUT",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedproduct)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h2>Update Product</h2>

            <form onSubmit={hendelUpdateProduct }>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                        <input type="text" name="name" defaultValue={name}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product Name"></input>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                        <input type="text" name="brandName" defaultValue={brandName}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brand Name"></input>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="text" name="price" defaultValue={price}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" ></input>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <input type="text" name="rating" defaultValue={rating}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating"></input>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Product Type</label>
                        <select name="type" defaultValue={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                            <option > select a product type </option>
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
                        <input type="text" name="imageUrl" defaultValue={image} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image URL"></input>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description</label>
                    <textarea id="message" name="details" defaultValue={details} rows="1" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description"></textarea>
                </div>
                <div className="">
                    <input type="submit" value="Add Product" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                </div>
            </form>

        </div>
    );
};

export default UpdateProduct;