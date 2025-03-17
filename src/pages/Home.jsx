import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from 'react-icons/rx'
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {

  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

  function filter(category) {
    // alert(category)
    if (category === "all") {
      // alert("if")
      setCate(food_items)
    } else {

      // alert("else")
      let newList = food_items.filter((item) => (item.food_category === category))
      setCate(newList)
    }

  }

  let items = useSelector(state => state.cart)
  console.log('cate', cate)

  // total calc
  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)

  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes)
  return (
    <div className='bg-slate-200 w-full min-h-screen'>

      <Nav />

      {!input ?

        <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
          {Categories.map((item) => {
            return <div key={item.id} className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-1g shadow-x1 hover:bg-green-200 cursor-pointer transition-all duration-2001' onClick={() => filter(item.name)}>
              {item.icon}
              {item.name}
            </div>
          })}
        </div>
        : null
      }
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center item-center pt-8 pb-8' >
        {/* <Cards of images /> */}
        {cate.length > 0 ? cate.map((item) => (
          item.food_type === 'veg' &&  // conditional rendering

          <Card key={item.id} id={item.id} image={item.food_image} name={item.food_name}
            price={item.food_price} type={item.food_type} />
        ))
          :
          <div className='text-center text-2xl text-green-500 font-semibold pt-5'> No Dish Found</div>
        }
      </div>

      {/* add to card  */}
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`} >
        {/* header */}
        <header className='w-[100%] flex justify-between items-center'>
          <span
            className='text-green-400 text-[18px] font-semibold'>Order items</span>
          <RxCross2 className='w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover: text-gray-600' onClick={() => setShowCart(false)} />
        </header>

        {items.length > 0 ?
          <>
            {/* Card / product */}
            < div className='w-full mt-9 flex flex-col gap-8'>
              {items.map((item) => (
                <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
              ))}
            </div>

            {/* card details */}
            <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
              {/* Subtotal */}
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
                <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}</span>
              </div>
              {/* Delivery */}
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
                <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}</span>
              </div>

              {/* Taxes */}
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                <span className='text-green-400 font-semibold text-lg'>Rs {taxes}</span>
              </div>


            </div>
            {/* grand total */}
            <div className='w-full flex justify-between items-center p-9'>
              <span className='text-2xl text-gray-600 font-semibold'>Total</span>
              <span className='text-green-400 font-semibold text-2xl'>Rs {total}</span>
            </div>

            {/* place order */}
            <button className='w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all cursor-pointer' onClick={() => { toast.success("Place Order...") }}>Place Order</button>
          </>
          :
          <div className='text-center text-2xl text-green-500 font-semibold pt-5'>
            Empty Cart
          </div >
        }
      </div >
    </div >
  )
}
export default Home
