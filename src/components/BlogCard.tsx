import Image from 'next/image';
import React from 'react'

interface PropsType {
    img: string;
    title: string;
    date: string;
    comment: number;
}

const BlogCard = ({img, title, date, comment} : PropsType) => {
  return (
    <div className='space-y-4'>
        <Image src={img} alt={title} height={350} width={700} className='rounded-lg hover:scale-105 transition-transform' />
        <div className='text-accent font-medium'>
            <span>{ date }</span> / 
            <span>{comment} Comments</span></div>
        <h3 className=' font-bold text-xl '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
    </div>
  )
}

export default BlogCard