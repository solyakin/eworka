import React from 'react'
import logo from '../assets/EasyWorka-Logo-2.svg';

const Footer = () => {
  return (
    <div className='bg-bgred'>
        <div className="p-6 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">
            <div className="">
                <img src={logo} alt="easy work logo" />
                <p className='text-white text-sm leading-6'>Creating innovative, high-quality elearning experience is easier with easyworka</p>
            </div>
            <div className="">
                <h4 className='text-white font-semibold text-lg mb-3'>Lagos Office</h4>
                <p className='text-white text-sm md:text-normal leading-6'>Plot 1187, Abimbola Awoniyi Close, off Kasumu Ekemode Str, Via Saka Tinubu Street, Victoria island, Nigeria.</p>
                <div className='flex flex-col space-y-3 text-white mt-3 text-sm md:text-normal'>
                    <span>T: 234-1-9049320, 234-1-2710670-2</span>
                    <span>E: info@vatebra.com</span>
                    <span>E: customersupport@vatebra.com</span>
                </div>
            </div>
            <div className='text-white'>
                <h4 className="mb-3 font-semibold text-lg">Abuja Office</h4>
                <p className='text-sm md:text-normal leading-6'>Suite 302 Fortune Place, No 9 Nairobi Street, off Aminu Kano Cresent, Wuse 2, Abuja, Nigeria.</p>
                <div className="flex flex-col space-y-3 text-sm md:text-normal mt-3">
                    <span>T: 234-1-9049320, 234-1-2710670-2</span>
                    <span>E: abujaoffice@vatebra.com</span>
                </div>
            </div>
            <div className='text-white'>
                <h4 className="mb-3 font-semibold text-lg">Nairobi Office</h4>
                <p className='text-sm md:text-normal leading-6'>AG02, Madonna House, Westlands Road, Nairobi, Kenya</p>
                <div className="mt-3 text-sm md:text-normal">
                    <span>E: nairobioffice@vatebra.com</span>
                </div>
            </div>
            <div className='text-white'>
                <h4 className="mb-3 font-semibold text-lg">Sierra Leone Office</h4>
                <p className='text-sm md:text-normal leading-6'>55A Wilkinson Road, Freetown, Sierra Leone</p>
                <div className="flex flex-col space-y-3 mt-3 text-sm md:text-normal">
                    <span>T: +2349062547274</span>
                    <span>E: info@vatebra.com</span>
                </div>
            </div>
            <div className='text-white'>
                <h4 className="mb-3 font-semibold text-lg">Accra Office</h4>
                <p className='text-sm md:text-normal leading-6'>202, Westland Boulevard, west Legon, Accra, Ghana, PO Box AN 5208 Accra- North, Accra Ghana..</p>
                <div className="mt-3 text-sm md:text-normal">
                    <span>T: 233(0) 302402339</span>
                    <span>E; ghanaoffice@vatebra.com</span>
                </div>
            </div>
            <div className='text-white'>
                <h4 className="mb-3 font-semibold text-lg">Info</h4>
                <div className="flex flex-col space-y-3 text-sm md:text-normal">
                    <a href="">About Us</a>
                    <a href="">Blog</a>
                    <a href="">FAQ</a>
                    <a href="">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer