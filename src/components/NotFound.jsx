import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound() {

    //Take error object to show details using useRouteError hook
    const err = useRouteError();

    return (
        <>
            <div className="text-center mt-48">
                <div className="flex justify-center">
                    <img src="https://www.dreamstime.com/royalty-free-stock-images-page-not-found-image28300339" width="100px" height="100px" ></img>
                </div>
                <h2 className="font-bold">OOPs</h2>
                <p className="font-bold">{err.status}</p>   
                <p className="font-bold">Page {err.statusText}</p>
                <p className="font-bold">{err.data}</p><br />
                <Link to="/">
                    <button className="hover:border-2 hover:border-black hover:rounded-md p-1"> ↩ Back to Home</button>
                </Link>
            </div>
        </>
    )
}

export default NotFound;