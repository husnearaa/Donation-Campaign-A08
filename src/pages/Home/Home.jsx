import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
    const categories = useLoaderData()
    // console.log(categories);

    return (
        <div>
           <Banner></Banner>
           <Categories categories ={categories}></Categories>
        </div>
    );
};

export default Home;