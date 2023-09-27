import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="h-[50vh] flex justify-center items-center">
           <div>
           <div >
            <img className="ml-6" src="https://i.ibb.co/7v8HwtK/nofound.png" alt="" />
           <h2 className=" text-2xl font-semibold text-black">Oops!!! Not found the page</h2> 
           </div>
            <div className="flex justify-center items-center">
            <Link to="/"><button className="btn mt-4 bg-blue-500 text-white ">Go back to home</button></Link>
            </div>
           </div>
        </div>
    );
};

export default ErrorPage;



