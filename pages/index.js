import React from "react";

const Home = () => {
  return (
    <div>
      {/* Herobanner
       */}

      <div className='text-center m-10 text-[#324d67]'>
        <h2 className='font-bold text-4xl'>Best Selling Devices</h2>
        <p className='text-sm font-extralight'>
          Mobile Smart Devices with many varations
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-4 mt-5 w-full'>
        {["Products1", "Product2"].map((product) => product)}
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
