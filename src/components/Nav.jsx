import React, { useContext, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5';
import { LuShoppingBag } from 'react-icons/lu';
import { MdFastfood } from "react-icons/md";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {

  const { input, setInput,  setCate,  setShowCart } = useContext(dataContext)

  useEffect(() => {
    let newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLocaleLowerCase().includes(input))

    // console.log('newList', newList);

    setCate(newList)
  }, [input])



  let items = useSelector(state => state.cart)
  // console.log(items)


  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      < div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        < MdFastfood className='w-[30px] h-[30px] text-green-500' />
      </div >
      <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shasow-md md:w-[70%]' onSubmit={(e) => e.preventDefault()}>
        <IoSearch className='text-green-500 w-[20px] h-[20px]' />
        <input type="text" placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[20px] ' onChange={(e) => setInput(e.target.value)} value={input} />
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={() => setShowCart(true)}>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />
        <span className='absoulte top-0 text-green-500 font-bold text-[18px]' >{items.length}</span>
      </div>
    </div >
  )
}

export default Nav
