import CarouselImages from "./CarouselImages";
import Blog from "./Blog";
import Trending from "./Trending";
import Offer from "./Offer";

function HomePage() {
  return (
    <div>
      <CarouselImages />
      {/* <Offer /> */}
      <Trending />
      <Blog />
    </div>
  );
}

export default HomePage;
