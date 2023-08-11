import React from 'react'
import rectangle from '../assets/Rectangle 39.svg';
import rectangle2 from '../assets/Rectangle 40.svg';
import rectangle3 from '../assets/Rectangle 41.svg';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const blogs = [
    {
        id : 1,
        image : rectangle,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident ',
        link: ''
    },
    {
        id : 2,
        image : rectangle2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident ',
        link: ''
    },
    {
        id : 3,
        image : rectangle3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident ',
        link: ''
    },
]

const BlogSection = () => {
  return (
    <div className='my-32 max-w-7xl mx-auto'>
        <div className="text-center">
            <h2 className='text-4xl font-bold text-gray-700'>BLOG SECTION</h2>
            <p className='mt-3 text-xl text-gray-700'>Check out our latest updates here</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 max-w-2xl mx-auto lg:grid-cols-3 lg:max-w-none mt-10">
            {
                blogs.map(({ id, image, text }) => {
                    return(
                        <article key={id} className="p-6 rounded shadow-lg flex max-w-xl flex-col items-start justify-between">
                            <img src={image} alt="" className='w-full' />
                            <p className='mt-4 mb-6 leading-8'>{text}</p>
                            <a className='text-bgred gap-3 font-semibold flex items-center' href="#">
                                Read more
                                <ChevronRightIcon className='text-bgred font-semibold h-5 w-5' />
                            </a>
                        </article>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BlogSection;