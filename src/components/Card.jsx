import React from 'react'
import { GiChickenOven } from 'react-icons/gi'
// import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import { AddItem } from '../redux/cartSlice'
import { toast } from 'react-toastify'

function Card({ id, image, name, price, type }) {

    let dispatch = useDispatch()


    return (
        <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg gap-3 shadow-lg hover:border-2 border-green-400' >
            {/* image */}
            <div className='w-[100%] h-[70%] overflow-hidden round-lg '>
                <img src={image} alt="" className='object-cover' />
            </div>

            {/* name */}
            <div className='text-2xl font-semibold'>
                {name}
            </div>
            {/* price  */}
            <div className='w-full flex justify-between item-center'>
                <div className='text-lg font-bold text-green-500'>
                    Rs {price}/
                </div>
                <div className={`flex justify-center items-center gap-2 ${type === 'veg' ? 'text-green-500' : 'text-red-500'} text-semibold`}>

                    {type === 'veg' ? <LuLeafyGreen /> : <GiChickenOven />}
                    <span>{type}</span>
                </div>
            </div>
            <div>
                <button className='w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all cursor-pointer' onClick={() => {
                    dispatch(AddItem({ id: id, name: name, price: price, image: image, qty: 1 }));
                    toast.success("Item Added")
                }
                } > Add to dish</button>
            </div>
        </div >
    )
}

export default Card
