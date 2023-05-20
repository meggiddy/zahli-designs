import { offers } from "./offers";
function Offer() {
  return (
    <div className="bg-white">
    <h2 className="text-2xl pt-10 pb-2 text-center font-bold tracking-tight text-gray-900">
          What makes Zahli Designs Unique...
        </h2>
        <p className="text-center text-yellow-400 pb-6">CUSTOMIZABLE PLANNERS</p>
    <div className="flex justify-between relative overflow-hidden">

      {offers.map((offer, index) => {
        if (offer.type === "trending") {
          return (
            <div key={index} className="card card-compact h-60 w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={offer.image}
                  alt="offer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{offer.category}</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div></div>
  );
}

export default Offer;
