import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartSlice";

function ProductItem(props) {

    const dispatch = useDispatch();

    //using AddItem reducer function from redux store
    function handleAddItem(item) {
        dispatch(additem(item))
    }

    return (
        <>
            <div className="border border-black mb-5 p-5 text-center shadow-md shadow-black">

                <div className="flex justify-center">
                    <div className="relative group">
                        <img src={props.item.images[0]} className="h-44 object-cover transition duration-300 group-hover:blur-sm"></img>
                        <Link to={`/productdetail/${props.item.id}`} key={props.item.id} >
                            <button className="absolute text-2xl inset-0 flex items-center justify-center bg-transparent bg-opacity-50 font-bold opacity-0 group-hover:opacity-100 transition duration-300">View Detail</button>
                        </Link>
                    </div>
                </div>

                <div>
                    <h1><b>{props.item.title}</b></h1>
                    <h1>Ratings: {props.item.rating} out of 5</h1>
                    <button className="bg-black text-white p-3 mt-2 hover:p-2 hover:bg-yellow-300  hover:text-black rounded-md" onClick={() => handleAddItem(props.item)}>Add to cart</button>
                </div>

            </div>
        </>
    )
}

export default ProductItem;