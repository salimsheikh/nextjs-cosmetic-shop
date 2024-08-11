import { removeFromCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image'
import React from 'react'
import { RxCross1 } from 'react-icons/rx';

interface PropsType {
    id: number
    img: string;
    name: string;
    price: number;
    quantity: number;
}

const CartProducts = ({ id, img, name, price, quantity }: PropsType) => {
    const dispatch = useAppDispatch();
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <Image src={img} height={80} width={80} alt={name} className='h-[80px]' />
                <div className='space-y-2'>
                    <h3 className='font-medium'>{name}</h3>
                    <p className='text-gray-600 text-[14px]'>{quantity} X ${price}.00</p>
                </div>
            </div>
            <RxCross1 className='cursor-pointer' onClick={() => dispatch( removeFromCart(id))} />
        </div>
    )
}

export default CartProducts