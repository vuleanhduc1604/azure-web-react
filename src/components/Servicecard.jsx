import React from 'react';
import image from '../assets/Image.png'
const Servicecard = () => {
    return (
      <section className="flex py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full sm:w-1/2 px-4 mb-8">
        <div className="bg-white rounded-t-3xl shadow-lg border border-gray-300">
          <img src={image} alt="" className="w-full" />
          <div className="px-6">
            <h2 className="text-2xl font-bold my-4">Box 1</h2>
            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, facilisis turpis vitae, consequat mauris.</p>
          </div>
        </div>
      </div>                  
      <div className="w-full sm:w-1/2 px-4 mb-8">
        <div className="bg-white rounded-t-3xl shadow-lg border border-gray-300">
          <img src={image} alt="" className="w-full" />
          <div className="px-6">
            <h2 className="text-2xl font-bold my-4">Box 1</h2>
            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, facilisis turpis vitae, consequat mauris.</p>
          </div>
        </div>
      </div>   
    </div>
      </section>
    );
};

export default Servicecard;