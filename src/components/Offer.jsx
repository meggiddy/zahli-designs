import { useNavigate } from "react-router-dom";
import { offers } from "./offers";
function Offer() {
  const navigate = useNavigate();
  return (
    <div className="bg-white py-10">
      <h2 className="text-3xl pt-10 pb-4 text-center font-bold tracking-tight text-gray-900">
        What makes Zahli Designs Unique...
      </h2>
      <p className=" text-2xl text-center text-teal-400 pb-6">CUSTOMIZABLE PLANNERS</p>
      <div className="flex justify-between relative overflow-hidden gap-4 mx-4 pb-6">
        {offers.map((offer, index) => {
          if (offer.type === "trending") {
            return (
              <div
                key={index}
                className="card card-compact h-60 w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={offer.image} alt="offer" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{offer.category}</h2>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => navigate("/shop")}
                      className="btn btn-primary"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Offer;
