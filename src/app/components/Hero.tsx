import React from 'react';
import Image from 'next/image';
import assignmepic1 from '../../../public/assignmepic1.jpeg'

const Hero = () => {
  return (
    <div className='flex justify-between items-center p-12'>
      <section className='hero'>
        
    <h1 className='text-[44px] font-bold '>Welcome To Our Website</h1>
    <p className='text-[30px] font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Iusto reprehenderit explicabo tempore laborum, eos<br/> eius saepe quidem cumque placeat facere. Fugiat <br/></p>
    
    <button className='px-10 py-3 bg-black text-white'> Contact Us</button>
    </section>

    <section className='image '>
   <Image src={assignmepic1} alt="assignmepic1"className=' w-[502px] h-[465px] '/>
   </section>
   
   </div>
   
      
        
  
      
      
     
    
  )
}

export default Hero
