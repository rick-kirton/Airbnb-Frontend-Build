import React from 'react';
import Image from 'next/image';


function Banner() {
  return (
  <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">

    <Image
        src="https://images.pexels.com/photos/42110/pexels-photo-42110.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        layout='fill' 
        objectFit='cover' 
     />
    <div className="absolute top-1/2 w-full text-center">
        <p className="text-lg sm:text-4xl drop-shadow-lg font-black	text-white">
            Not sure where to go? Perfect.
        </p>
    <button className="text-blue-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible.</button>
    </div>

  </div>
  )
}

export default Banner;
