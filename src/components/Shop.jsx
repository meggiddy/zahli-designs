import Products from "../products";

export default function Shop() {
  return (
    <div className="shopBg">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-white text-3xl text-center font-bold py-4">
          Our Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {Products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.img}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm font-bold text-white">
                {product.item}
              </h3>
              <p className="mt-1 text-lg font-medium text-white">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="btn-group py-8">
        <button className="btn btn-active">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
      </div>
    </div>
  );
}
