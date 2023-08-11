import React from 'react'
import employee from '../assets/Group 28.svg';
import department from '../assets/Group.svg';
import attendance from '../assets/Group (1).svg';
import vector3 from '../assets/Vectornew.svg';
import vector from '../assets/Vector3.svg';
import vector2 from '../assets/Vector (2).svg';

const data = [
    {
        id: 1,
        image : employee,
        heading : 'Employee Management',
        text: 'Turn an underperforming employee around or prevent high-performing employees from becoming a weak performer.'
    },
    {
        id: 2,
        image : department,
        heading : 'Department Management',
        text: 'Strategic Management that emphasizes planning, regulation, allocating resources, appraisal of co-workers and implementation strategies.'
    },
    {
        id: 3,
        image : vector,
        heading : 'Level Management',
        text: 'Better manage the line of demarcation between various managerial positions in an organization.'
    },
    {
        id: 4,
        image : attendance,
        heading : 'Attendance Management',
        text: 'Manage attendance or presence in the work place to minimize loss due to employee time theft.'
    },
    {
        id: 5,
        image : vector3,
        heading : 'Leave Application Management',
        text: 'Automate the leave request process, making it hassle-free for both the management and the employees.'
    },
    {
        id: 6,
        image : vector2,
        heading : 'Appraisal Management',
        text: 'Manage all staff appraisal from the comfort this HR solution. It’s easy, convenient and highly effective.'
    },
]
const UserFeature = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className="my-16">
            <h1 className='text-3xl text-center font-bold'>User Features</h1>
        </div>
        <div className="mx-6 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
            {
                data.map(({id, image, heading, text}) => { 
                    return(
                        <div key={id}>
                            <div className="flex items-start gap-4 lg:gap-10">
                                <div className="p-3 bg-red-500 rounded-full">
                                    <img
                                        src={image}
                                        alt=""
                                        className="w-10 lg:w-12"
                                    />
                                </div>
                                <div >
                                    <h3 className='font-semibold lg:text-xl'>{heading}</h3>
                                    <p className='lg:text-lg mt-3'>{text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default UserFeature