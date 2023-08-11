import React from 'react'
import quote from '../assets/quote.svg'
import background from '../assets/Rectangle 37.png'

const Testimony = () => {
  return (
    <div className='relative isolate overflow-hidden h-[500px] lg:h-96'>
        <img
            src={background}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-10 h-full w-full bg-slate-100 opacity-80"></div>
        <div className="px-6 absolute left-0 right-0 pt-20 z-30 max-w-2xl mx-auto">
            <img src={quote} alt="" className='w-8' />
            <p className='mt-6 text-xl mb-3 text-slate-500 pl-6 md:pl-14 italic'>This solution has been of immense help to my organization and i can say authoritatively that it helps to save a lot of time</p>
            <h4 className='text-center text-xl text-bgred mt-16 font-bold'>- Ify Ofunne </h4>
        </div>
    </div>
  )
}

export default Testimony