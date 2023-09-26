import swal from "sweetalert";



const CategoryCard = ({ category }) => {
    const { id, picture, group, title, color_group_bg, color_card_bg, color_text, price, description } = category || {}

    const handleAddDonation = () => {
        // console.log(category);

        const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))


        // when value is empty then it will enter in if condition
        if (!donationItems) {
            addedDonationArray.push(category)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            // alert('your donation has completed successfully')
            swal("Good job!", "you have donated successfully!", "success");
        }
        else {

            const isExist = donationItems.find(category => category.id == id)

            if (!isExist) {

                addedDonationArray.push(...donationItems, category)
                localStorage.setItem('donation', JSON.stringify(addedDonationArray))
                swal("Good job!", "you have donated successfully!", "success");
               
            }
            else{
                swal("Sorry!", "you already donated here!", "error");
            }
        }




    }

    return (
        <div>
            <div>
                <div className="h-[70vh] relative">
                    <img className="h-[70vh] w-full max-w-[1300px] mx-auto absolute " src={picture} alt="" />
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <button onClick={handleAddDonation} className="mt-96 ml-6 px-10 py-3 rounded-md text-white relative bg-[#FF444A] border-none">
                        Donate $
                        {price}</button>
                </div>
                <div className=" mt-10 mb-10">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="mt-3 ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;