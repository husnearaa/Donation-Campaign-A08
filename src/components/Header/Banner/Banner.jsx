
const Banner = () => {
    return (
        <div className="h-[70vh] bg-slate-300">
           <div className="text-center items-center">
           <div className="max-w-md">
           <h1 className="mb-5 pt-10 text-4xl font-bold">I Grow By Helping People In Need</h1>
            <div className="relative gap-2 md:w-max text-center items-center">
               <input type="text"className="input w-24 md:w-auto rounded-lg" placeholder="Search here "/>
                <button  className=" !absolute right-1 top-1 py-2 px-6 bg-[#FF444A] text-white rounded">
                    Search
                </button>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Banner;