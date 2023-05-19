import { offers } from "./offers";
function Offer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 relative overflow-hidden">
      {offers.map((offer, index) => {
        if (offer.type === "trending") {
          return (
            <div className="overflow-hidden" key={index}>
              <img
                src={offer.image}
                alt="infomation"
                className="h-72 w-fit transition-transform duration-300 transform hover:scale-105"
              />
              <div className="absolute top-0 p-8">
                <h3 className="text-teal-300 py-4 text-xl">{offer.category}</h3>
                <div className="btn text-teal-500">SHOP NOW</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Offer;
