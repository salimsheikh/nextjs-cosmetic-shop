import Image from 'next/image';
import React from 'react'

interface PropsType  {
    img: string;
    title: string;
    quantity: string;
}

const CategoryCard = ({img, title, quantity}: PropsType) => {
  return (
    <div className='space-y-4'>
        <Image className='rounded-full border-4 md:border-8 border-white' src={img} alt={title} height={250} width={250} />
        <div>
            <h2 className='text-[14px] md:text-xl font-medium'>{title}</h2>
            <p className='text-gray-400 text-[12px] md:text-[14px]'>{quantity}</p>
        </div>
    </div>
  )
}

export default CategoryCard