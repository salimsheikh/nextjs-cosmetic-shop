"use client";
import { addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from "react-hot-toast";

import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import RandomRatings from './RandomRatings';

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale?: boolean | undefined;
}

const ProductCard = ({ id, img, name, price, sale }: IProduct) => {
  const dispatch = useAppDispatch();
  

  const addProductToCart = (e: React.FormEvent) => {
    e.stopPropagation();
    const payload = { id, name, img, price, quantity: 1 };
    dispatch(addToCart(payload));
    toast.success("Item added to cart successfully.");
  }

  const router = useRouter();

  return (
    <div className='cursor-pointer group' onClick={() => router.push(`/product/${id}`)}>
      <div className='relative'>
       
          <Image src={img} height={500} width={500} alt='name' />
          {sale && <div className='bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4'>Sale</div>}
          <div className='absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer'>
            <div className='absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2'>
              <div className='bg-white w-[50px] h-[50px] text-[26px] grid place-items-center'>
                <AiOutlineHeart />
              </div>
              <div className='bg-white w-[50px] h-[50px] text-[26px] grid place-items-center' onClick={addProductToCart}>
                <AiOutlineShoppingCart />
              </div>
            </div>
          </div>
      
      </div>
      <div className='text-center'>
        <RandomRatings />
        <h2 className='font-medium pb-3 hover:text-accent'>{name}</h2>
        <p className='text-gray-600 font-light'>${price}.00</p>
      </div>

    </div>
  );
}

export default ProductCard;
