import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

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
        <div >
           <CategoryCard category={category}></CategoryCard>
        </div>
    );
};

export default Category;