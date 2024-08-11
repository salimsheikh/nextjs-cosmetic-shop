import React from 'react'
import BlogCard from './BlogCard';

const BlogData = [
    {
        img: "/post__1.jpg",
        title: "Lorem ipsum dolor sit amet",
        date: "July 25, 2024",
        comment: 8
    },{
        img: "/post__2.jpg",
        title: "Lorem ipsum dolor sit amet",
        date: "July 31, 2024",
        comment: 8
    },{
        img: "/post__3.jpg",
        title: "Lorem ipsum dolor sit amet",
        date: "Aug 5, 2024",
        comment: 8
    }

];

const BlogSections = () => {
  return (
    
        <div className='container pt-32'>
            <h2 className='font-bold text-2xl'>Latest News</h2>
            <p className='text-gray-500'>Present posts in a best way to highlight interesting moments of your blog.</p>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
                {BlogData.map((item) => (
                    <BlogCard key={item.title} img={item.img} title={item.title} date={item.date} comment={item.comment} />
                ))}

            </div>
        </div>
   
  )
}

export default BlogSections