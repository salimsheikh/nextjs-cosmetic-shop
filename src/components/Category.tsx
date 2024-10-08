import React from 'react'
import { Whisper } from 'next/font/google';
import CategoryCard from './CategoryCard';

const whisper = Whisper({subsets: ["latin"], weight: ["400"]});

const CategoryData = [
    {
        img: "/category__1.jpg",
        title: "Makeup",
        quantity: "(4 Items)"
    },{
        img: "/category__2.jpg",
        title: "Nail & Wax",
        quantity: "(8 Items)"
    },{
        img: "/category__3.jpg",
        title: "Skin Care",
        quantity: "(6 Items)"
    }

];

const Category = () => {
  return (
    <div className='bg-[url(/cats__bg.jpg)] bg-no-repeat py-16 mt-32'>
        <div className='container text-center text-white'>
            <h3 className={`${whisper.className} text-[40px]`}>Favorite category</h3>
            <h2 className='text-[40px] font-medium'>Top Category</h2>
            <div className='flex justify-center gap-4 md:gap-16 pt-8'>
                {CategoryData.map((item) => (
                    <CategoryCard key={item.title} img={item.img} title={item.title} quantity={item.quantity} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category