import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {

    const [category, setCategory] = useState({})

    const { id } = useParams()
    // console.log(id);

    const categories = useLoaderData()
    // console.log(categories);

    useEffect(() => {

        // console.log(id, categories);

        const findCategory = categories?.find(category => category.id == id)
        // console.log(findCategory);
        setCategory(findCategory)

    }, [id, categories])

    console.log(category);




    return (
        <div>
            {/* <div className="h-[70vh]">
               <img className="h-[70vh]" src="https://i.ibb.co/SK7wwLQ/Rectangle-4288.png" />
            </div> */}
            {/* <div className="h-[70vh] max-w-[1300px] mx-auto bg-pink-300 ">
                <img className="h-[70vh] image-full absolute mr-6" src="https://i.ibb.co/SK7wwLQ/Rectangle-4288.png" alt="" />
                <button className="mt-96 ml-6 px-10 py-3 rounded-md text-white relative bg-[#FF444A] border-none">Donate $</button>
            </div>
            <div>
                <h2 className="text-2xl">Tittle</h2>
                <p>description</p>
            </div> */}
        </div>
    );
};

export default Category;