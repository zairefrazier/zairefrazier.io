import React from "react";
  
const Home = () => {
  return (
    <div className="home">
        <section class="hero container max-w-screen-sm mx-auto ">
        <img class="mx-auto p-5" src="src/IMG_3603 2.jpg" alt="screenshot" />
        <div className='w-full flex justify-between items-center mt-3 px-5'>
                <p className='text-black text-md text-center'>zaire frazier </p>
                <a href = "mailto: zairefrazier13@gmail.com" class="text-align: right hover:text-red-600 text-md">contact</a>
            </div>
        </section>
    </div>
  );
}
  
export default Home;