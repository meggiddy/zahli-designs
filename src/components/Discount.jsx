function Discount() {
  return (
    <div className="flex object-contain">
      <div className="p-8 h-72 mt-20 w-2/3">
        <h1 className="text-teal-400 text-4xl">Explore your creativity</h1>
        <p className="text-gray-500 text-2xl">
          Click & Collect First Delivery Free over Ksh.3000
        </p>
        <button className="btn btn-primary mt-4">SHOP NOW</button>
      </div>
      <div className="w-1/3 object-cover" >
      <img src="blackgrid.jpg"></img>
      </div>
    </div>
  );
}

export default Discount;
