import React from 'react'

const ContactCom = () => {
  return (
    <div className='contact px-4'>
      <div className='ccontainer capitalize flex flex-col lg:flex-row justify-between max-w-6xl mx-auto rounded-lg drop-shadow-lg'>
        <div className='basis-2/5 w-full grid place-items-center text-black/60 text-center lg:text-left text-3xl sm:text-4xl px-10 pt-5 lg:pt-0'>
          <h1>Submit your details and we will contact you</h1>
        </div>
        <form className='basis-3/5 w-full flex flex-row flex-wrap gap-10 py-10 px-4 lg:px-0 lg:pr-10'>
          <div className='flex flex-col sm:flex-row w-full gap-10'>
            <div className='inputBox relative w-full flex flex-col'>
              <input required type="text" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
              <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>full name</span>
            </div>
            <div className='inputBox relative w-full flex flex-col'>
              <input required type="number" inputMode="numeric" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
              <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>phone</span>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row w-full gap-10'>
            <div className='inputBox relative w-full flex flex-col'>
              <input required type="email" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
              <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>mail</span>
            </div>
            <div className='inputBox relative w-full flex flex-col'>
              <input required type="text" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
              <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>product</span>
            </div>
          </div>
          <div className='inputBox relative w-full flex flex-col'>
            <input required type="text" className='w-full p-3 border-b-[4px] border-b-black/50 outline-none bg-transparent text-[#a81b81] font-semibold text-lg' />
            <span className='absolute left-0 p-3 pointer-events-none text-black/60 text-lg'>message</span>
          </div>
          <div className=''>
            <input type="submit" value="Send Message" className='hover:text-[#a81b81] border-[3px] rounded-md hover:border-[#a81b81] duration-100 hover:scale-105 border-black/60 text-lg cursor-pointer px-5 py-3' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactCom