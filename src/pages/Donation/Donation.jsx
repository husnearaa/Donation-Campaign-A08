import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
// import CategoryCard from "../Category/CategoryCard";

const Donation = () => {

    const [donation, setDonation] = useState([])
    const [noDataFound, setNoDataFound] = useState('')
    const [isShow, setIsShow] = useState(false)


    useEffect(() => {

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if (donationItems) {
            setDonation(donationItems)
        }
        else {
            setNoDataFound('No Data Found!')
        }

    }, [])
    console.log(donation);

    const  handleRemove = () =>{
        localStorage.clear()
        setDonation([])
        setNoDataFound('No Data Found!')
    }

    console.log(isShow);
    return (
        <div>
            {
              noDataFound ? <p className="h-[80vh] flex justify-center items-center font-semibold text-2xl">{noDataFound}</p> :
                <div>

                    {donation.length > 0 && <button onClick={handleRemove} 
                        className="px-5 py-2 rounded-lg mt-4 bg-[#009444] text-white block mx-auto">
                        Delete All Donation</button>}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        {
                            isShow ?donation.map((category => 
                                 <DonationCard key={category.id} category={category}></DonationCard>
                            )) 
                            
                                : donation.slice(0, 4).map((category => 
                                <DonationCard key={category.id} category={category}></DonationCard>
                            ))
                        }
                    </div>
                     {/* condition for see all and less  */}
                        <button onClick={() => setIsShow(!isShow)} className="px-8 py-2 rounded-lg mt-10 mb-20 bg-[#009444] text-white block mx-auto">
                        {isShow? "See Less"  : "See All"}
                    </button>


                    {/* condition for only show */}
                    {/* {
                        donation.length > 2 && <button onClick={() => setIsShow(!isShow)} className="px-8 py-2 rounded-lg mt-10 mb-20 bg-[#009444] text-white block mx-auto">
                        {isShow? "See Less"  : "See All"}
                    </button>
                    } */}




                </div>
            }
        </div>
    );
};

export default Donation;