import React from 'react';
import courseImg from '../../assets/image 262.png';
import './Courses.css';
import { AiFillStar } from 'react-icons/ai';



const courses = [
  {
    id: 1,
    name: 'UI/UX Design',
    href: '#',
    price: '599',
    prevPrice: '1500',
    imageSrc: courseImg,
    imageAlt: '',
    rating:'3.0',
    status:'Approved'
  },
  {
    id: 2,
    name: 'UI/UX Design',
    href: '#',
    price: '599',
    prevPrice: '1500',
    imageSrc: courseImg,
    imageAlt: '',
    rating:'3.0',
    status:'Approved'
  },
  {
    id: 3,
    name: 'UI/UX Design',
    href: '#',
    price: '599',
    prevPrice: '1500',
    imageSrc: courseImg,
    imageAlt: '',
    rating:'3',
    status:'Approved'
  },
  {
    id: 4,
    name: 'UI/UX Design',
    href: '#',
    price: '599',
    prevPrice: '1500',
    imageSrc: courseImg,
    imageAlt: '',
    rating:'3',
    status:'Approved'
  },
]

const Courses = () => {

  return (
    <div className="bg-white">
      <div className="max-w-6xl sm:px-6">
        <div className="flex">
        <h2 className="text-xl font-semibold text-brand-2 sm: pl-3">Your Courses</h2>
        <div className="sm: pl-3 ml-auto pr-3 pt-2">
        <a href="/add-courses" className="flex align-center justify-center bg-brand-1 add-btn text-center text-brand-10 font-normal text-tiny">+Add Course</a>
        </div>
        </div>
          
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid sm: p-3 lg:grid-cols-3 lg:gap-x-9">
            {courses.map((course) => (
              <div key={course.id} className="group relative w-400 bg-white">
                <div className="w-400 rounded-lg overflow-hidden group-hover:opacity-75 py-5">
                  <img
                    src={course.imageSrc}
                    alt={course.imageAlt}
                    className="object-center object-cover"
                  />
                </div>
                <div className="w-400 h-220">
                  <div className="flex">
                    <p className='font-bold text-tiny text-brand-2'>{course.name}</p>
                    <div className="ml-auto flex mt-2 text-white">
                    <p className="rating text-center flex align-center justify-center font-semibold text-tiny">{course.rating}<AiFillStar className="mt-2"/></p>
                    </div>
                  </div>
                <div className="flex pt-3">
                  <div>
                    <p className='text-lg font-bold text-brand-2'>Rs. {course.price}</p>
                    <p className='text-xs text-brand-4 line-through'>Rs. {course.prevPrice}</p>
                  </div>
                  <p className='text-xs text-brand-7 ml-auto font-medium pt-8'>{course.status}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Courses;