const AboutUsOffices = () => {
  return (
    <div className="bg-[#632DF8] -mt-20 py-20 lg:px-36 px-4 grid lg:grid-cols-3 grid-cols-1 text-white">
      <div className="mb-8 lg:mb-0 text-center lg:text-left lg:border-none border-b-2 pb-10 ">
        <p className="text-gray-300 font-medium">Our locations</p>
        <p className="font-semibold text-3xl mt-4 mb-4">Visit our offices</p>
        <p className="text-gray-300 font-medium">Find us at these locations.</p>
      </div>
      <div className="flex flex-col gap-6 mb-6 lg:mb-0 ">
        <div className="text-center lg:text-left">
          <p className="font-semibold mb-2">Melbourne</p>
          <p className="text-gray-300 font-medium">100 Finders Street</p>
          <p className="text-gray-300 font-medium">Melbourne VIC 3000 AU</p>
        </div>
        <div className="text-center lg:text-left">
          <p className="font-semibold mb-2">Sydney</p>
          <p className="text-gray-300 font-medium">100 George Street</p>
          <p className="text-gray-300 font-medium">Sydney NSW 3000 AU</p>
        </div>
        <div className="text-center lg:text-left">
          <p className="font-semibold mb-2">Byron Bay</p>
          <p className="text-gray-300 font-medium">100 Finders Street</p>
          <p className="text-gray-300 font-medium">Byron Bay NSW 2481 AU</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-center lg:text-left">
          <p className="font-semibold mb-2">London</p>
          <p className="text-gray-300 font-medium">100 Oxford Street</p>
          <p className="text-gray-300 font-medium">London W1D 1LL UK</p>
        </div>
        <div className="text-center lg:text-left">
          <p className="font-semibold mb-2">San Francisco</p>
          <p className="text-gray-300 font-medium">100 Market Street</p>
          <p className="text-gray-300 font-medium">
            San Francisco, CA 94105 USA
          </p>
        </div>
        <div className="text-center lg:text-left">
          <p className="font-semibold mb-2">Sweden</p>
          <p className="text-gray-300 font-medium">Drottniggatan 100</p>
          <p className="text-gray-300 font-medium">111 60 Stockholm SE</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsOffices;
