
const Banner = () => {
    return (
        <div className="h-[70vh] relative">
            <div className="">
                <img className="h-[70vh] w-full max-w-[1300px] mx-auto absolute " src={"https://i.ibb.co/Q6j07CL/Rectangle-4281.png"} alt="" />
                <div className="absolute inset-0 bg-white opacity-90"></div>

                <div className="relative flex justify-center items-center pt-40">
                    <h1 className="text-4xl text-black  absolute font-bold">I Grow By Helping People In Need</h1>
                </div>
                <div className="flex justify-center items-center">
                    <input type="text" className="input relative rounded-sm mt-10 w-1/5 border-[#DEDEDE] " placeholder="Search here " />
                   
                    <button
                        className=" absolute  bg-[#FF444A] py-4 mt-10 px-6 ml-48 mr-5 rounded-sm text-xs font-bold  text-white "
                        type="button"
                      
                    >
                        Search
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Banner;

