import { offers } from "./offers";
function Offer() {
  return (
    <div className="bg-white">
    <h2 className="text-2xl py-10 text-center font-bold tracking-tight text-gray-900">
          Trending
        </h2>
    <div className="flex justify-between relative overflow-hidden">

      {offers.map((offer, index) => {
        if (offer.type === "trending") {
          return (
            <div key={index} className="card card-compact h-60 w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={offer.image}
                  alt="Shoes"
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
