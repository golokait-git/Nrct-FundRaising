
function Donation() {
  return (
    <div className="mt-10 w-full h-full">
      <div className="text-center mb-3">
        <h1 className="mb-1 font-serif font-medium text-4xl tracking-widest">
          DONATION CAMPAIGN
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full md:h-4/5 w-4/5 md:w-4/5">
          <div className="flex">
            <div className="w-7/12 bg-gray-200">
              <div className="mt-8 ml-5">
                <h1 className="mb-1 font-serif font-semibold text-xl tracking-widest">
                  Where would you like to Donate?
                </h1>
              </div>
              {/* Content on the left side */}
            </div>
            <div className="w-5/12">
              {/* Image on the right side */}
              <img
                className="w-full h-full object-cover"
                src="https://via.placeholder.com/300"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
