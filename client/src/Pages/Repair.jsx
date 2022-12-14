import React from 'react';
import OrderComp from '../Components/orderComp';
import {DryCleaningPriceList} from '../Utilities/priceList'

function Repair() {
  return (
    <div className='min-h-screen p-4 flex flex-col items-center'>
      <h1 className='text-xl lg:text-2xl font-bold'>Tailoring and Repairs</h1>
      <h2 className='mt-2'>Choose the categories of the clothes you have for laundry and their quantities, we'll give you an estimate right before you place your Order</h2>
      <div className='flex flex-col justify-around items-center mt-2 px-4 w-screen'>
          <div className="left bg-[#54d2d2] w-full lg:w-2/5 p-2">
            <p className='font-semibold'>categories</p>
            {
              DryCleaningPriceList.map((cat)=>{
                return <OrderComp key={cat.name} {...cat}/>
              })
            }
          </div>
          <div className=" bg-[#54d2d2] items-center flex w-full lg:w-2/5 mt-4 h-28 px-2">
            <div className='flex flex-col w-full'> 
              <span className='flex justify-around w-full px-3'>
                <p  className='font-semibold'>Number of items:</p>
                <p  className='font-semibold ml-5'>30</p>
              </span> 
              <span className='flex justify-around w-full'>
                <p className='font-semibold'>Total Price:</p>
                <p className='font-semibold'>N3000</p>
              </span> 
            </div>
          </div>
          <button className='bg-[#54d2d2] mt-2 p-2 text-white font-semibol'>Place Order</button>
      </div>
    </div>
  )
}

export default Repair