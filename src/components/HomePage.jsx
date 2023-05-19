import CarouselImages from "./CarouselImages";
import Blog from "./Blog";
import Trending from "./Trending";
import Offer from "./Offer";
import Discount from "./Discount";

function HomePage() {
  return (
    <div>
      <CarouselImages />
      <Offer />
      <Trending />
      <Discount />
      <Blog />
    </div>
  );
}

export default HomePage;
