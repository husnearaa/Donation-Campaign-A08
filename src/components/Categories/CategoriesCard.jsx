import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
    const { id, picture, group, title,  color_card_bg, color_text, } = category || {}
    return (
        <div>
            <Link to={`/categories/${id}`}>
                <div className="card card-compact" style={{ background: color_card_bg }}>
                    <figure ><img src={picture} /></figure>
                    <div className="card-body ">
                        {/* <p className=" py-2 px-2 font-medium" style={{background:color_card_bg, color: color_text}}>{group}</p> */}
                        <div>
                            <button className="mb-4 block text-base font-semibold rounded-lg p-1  leading-relaxed tracking-normal text-[#0052FF] antialiased"
                                style={{ background: color_card_bg, color: color_text }}>
                                {group}
                            </button>
                        </div>
                        <h2 className="text-xl font-semibold" style={{ color: color_text }}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesCard;