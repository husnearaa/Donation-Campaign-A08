
const DonationCard = ({category}) => {
    const { picture, group, title, color_card_bg,  color_text, price,  } = category || {}
    return (
        <div>
            <div>
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" 
                style={{background:color_card_bg}}>
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={picture}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <button className="mb-4 block text-base font-semibold rounded-lg p-1  leading-relaxed tracking-normal text-[#0052FF] antialiased"
                        style={{background:color_card_bg, color: color_text}}>
                            {group}
                        </button>
                        <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                        style={{color: "black"}}>
                            {title}
                        </h4>
                        <p className=" py-2 px-2 font-medium text-[#0052FF]"
                         style={{color: color_text}} >${price}</p>
                        <a className="inline-block" href="#">
                            <button
                                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle text-xs font-bold  text-white transition-all bg-[#0052FF] "
                                style={{background:color_text}}
                                type="button"
                            >
                                View Details
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;