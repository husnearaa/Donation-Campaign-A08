import CategoriesCard from "./CategoriesCard";

const Categories = ({categories}) => {
    console.log(categories)
    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    categories?.map(category => <CategoriesCard key={category.id} category={category}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;