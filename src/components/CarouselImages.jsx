import Carousel from "nuka-carousel";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { slideshowInfo } from "./Slideshow";

function CarouselImages() {
  return (
    <div className="">
      <Carousel
        wrapAround={true}
        autoplay={true}
        pauseOnHover={true}
        animation="fade"
        speed={400}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>
            <AiOutlineLeft />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <AiOutlineRight />
          </button>
        )}
      >
        {slideshowInfo.map((slide) => (
          <div key={slide.title} className="relative max-h-[600px]">
            <img src={slide.image} alt="notebook" className="w-full h-fit" />
            <div className="absolute top-1/4 right-1/4 left-1/4 bg-gray-50/50 rounded-lg p-4">
              <div className="text-teal-500 font-bold bg-white inline-block p-2 rounded-lg">
                {slide.category}
              </div>
              <div className="text-black text-5xl pt-4">{slide.title}</div>
              <p className="text-gray-600 py-4">{slide.description}</p>
              <div className="btn text-teal-500">SHOP NOW</div>
            </div>
          </div>
        ))}
      </Carousel>

    </div>
  );
}
export default CarouselImages;
