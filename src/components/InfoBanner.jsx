import React from 'react'
import vector from '../assets/Vector.svg'

const InfoBanner = () => {
  return (
    <div className='max-w-7xl mx-auto py-10 lg:py-16'>
        <div className="max-w-6xl px-6 lg:px-0 flex gap-4">
            <img
                src={vector}
                alt=""
                className="w-10 lg:w-auto"
            />
            <p className='lg:text-xl text-slate-700'>EasyWorka helps in the management of employee’s data, transactions between employees and the Human resource department. It facilitates adherence to internal process flows and employment rules.
            </p>
        </div>
    </div>
  )
}

export default InfoBanner;