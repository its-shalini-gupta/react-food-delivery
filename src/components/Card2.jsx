import React from 'react'
// import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from 'react-icons/ri'
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

function Card2(props) {

    let dispatch = useDispatch();

    return (
        <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
            <div className='w-[60%] h-full flex gap-5'>
                <div className='w-[60%] h-full overflow-hidden rounded-1g'>
                    <img src={props.image} alt="" className='object-cover' />
                </div>
                <div className='w-[40%] h-full  flex flex-col gap-3'>
                    <div className='text-sm text-gray-600 font-semibold' >{props.name}</div>
                    <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-1g font-semibold border-2 border-green-400 text-xl'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200 cursor-pointer'  onClick={() => props.qty > 1 ? dispatch(DecrementQty(props.id)) : 1}>-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'>{props.qty}</span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200 cursor-pointer' onClick={() => dispatch(IncrementQty(props.id))}>+</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-start items-end gap-6'>
                <span className='text-x1 text-green-400 font-semibold'>Rs {props.price}/-</span>
                <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={() => dispatch(RemoveItem(props.id))} />
            </div>
        </div>
    )
}

export default Card2
