
import Categories from "../Categories/Categories";
import LatestPosts from "../LatestPosts/LatestPosts";
import SearchBox from "../SearchBox/SearchBox";
import Tags from "../Tags/Tags";

const RightPart = () => {
    return (
        <section className="w-full">
            <SearchBox />
            <LatestPosts />
            <Categories />
            <Tags />
        </section>
    );
};

export default RightPart;