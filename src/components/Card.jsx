import darkWoman from '../assets/dark-woman.png';

const Card = () => {
  return (
    <div className='lg:flex mt-20'>
        <img src={darkWoman} className='w-full lg:w-auto' alt="dark-woman" />
        <div className="bg-bgred px-6 lg:px-16 py-10">
          <h3 className='text-3xl text-slate-100 font-bold mb-8'>An easier and more organized method of keeping an updated employee database</h3>
          <p className='text-white lg:text-lg leading-8 lg:leading-10 lg:w-8/12'>EasyWorka is secure, dynamic and completely automated… <br></br>It is a complete employee information management system which acts as a central employee database…EasyWorka is a best-in-class Human Resource Information Management Solution that helps manage employee information ranging from:</p>
          <ul className='lg:text-lg text-white my-6 space-y-4'>
            <li>Roles</li>
            <li>Promotions</li>
            <li>Loan request</li>
            <li>Salary Information</li>
          </ul>
          <button className='mt-6 bg-lightred font-semibold text-white text-lg p-3 px-6 rounded bg-opacity-75'>Request a demo</button>
        </div>
    </div>
  )
}

export default Card;