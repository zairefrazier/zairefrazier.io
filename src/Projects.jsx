import React from "react";
  

const ServiceCard = ({ color, title, icon, Subtitle}) => (
  <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
      <div className={'w-10 h-10 rounded-full flex justify-center items-center' + {color}}>
          {icon}
      </div>
      <div className='ml-5 flex flex-col flex-1'>
          <h1 className='mt-2 text-white text-lg'>{title}</h1>
          <p className='mt-2 text-white text-sm md:w-9/12'>{Subtitle}</p>
      </div>
  </div>
);

const Projects = () => {
  return (
    <div>
      <section class="hero container max-w-screen-sm mx-auto py-10">
      <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
          <div className='flex-1 flex flex-col justify-start items-center'>
          <ServiceCard
              color="bg-[#ff0000]"
              title="Security Guaranteed"
              icon ={<BsShieldFillCheck fontSize={21} className="text-white" />}
              Subtitle = "Always maintain Privacy and Quality of Service"
              />
              <ServiceCard
              color="bg-[#ff0000]"
              title="Low Exchange Rates"
              icon ={<BiSearchAlt fontSize={21} className="text-white" />}
              Subtitle = "Always maintain Privacy and Quality of Service"
              />
              <ServiceCard
              color="bg-[#ff0000]"
              title="Fast Transactions"
              icon ={<RiHeart2Fill fontSize={21} className="text-white" />}
              Subtitle = "Always maintain Privacy and Quality of Service"
              />
          </div>
      </div>
      </section>
    </div>
  );
}
export default Projects;




// const Services = () => {
//   return (
      
//   );
// }