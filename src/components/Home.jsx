import useFetch from "../utils/useFetch";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

function Home() {

    const [filterItems, setFilterItems] = useState([]);
    const { data, error, loading } = useFetch("https://dummyjson.com/products");

    //Fetch data from api using Custom useFetch hook
    useEffect(() => {
        if (data) {
            const Data = data.products;
            setFilterItems(Data);
        }
        console.log(data);

    }, [data]);

    //Handle error
    if (error) {
        return alert(`Error in fetching data ${error}`);
    }

    if (loading) {
        return <p className="text-center text-3xl mt-44">Loading...</p>
    }

    //Filter out item based on ratings
    const filteredItems = filterItems.filter((item) => item.rating >= 4);

    if (!filteredItems) {
        return <p>Item not found</p>
    }

    return (
        <>
<h1 className="text-center text-6xl mt-20 text-blue-600 hover:text-blue-800 transition-transform transform hover:-translate-y-1 duration-300">
  <b>Welcome</b>
</h1>
<p className="text-center text-3xl mt-2 text-gray-700 leading-relaxed transition-transform transform hover:-translate-y-1 duration-300">
  <i>Thank you for choosing us as your shopping destination. <br/>your destination for unique finds and endless shopping joy!</i>
</p>
<h1 className="text-center text-5xl mt-20 text-green-600 hover:text-green-800 transition-transform transform hover:-translate-y-1 duration-300 underline">
  <b>Top-Rated Products</b>
</h1>

            <div className="flex justify-center">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 w-9/12 mt-24 gap-10 h-72">
                    {
                        filteredItems.map((item) => (
                            <ProductItem item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home;