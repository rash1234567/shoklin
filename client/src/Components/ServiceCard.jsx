import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLaundryContext } from '../contexts/laundryContexts';

function ServiceCard(props) {
  const {handleShow} = useLaundryContext()
  const navigate = useNavigate();
  const toService =()=>{
    props.name == 'Cloth Storage' ? handleShow('This service is only available to VIP subscribers', "red"):navigate(props.path)
  }
  return (
    <div className='md:w-72 min-h-[530px] bg-[#f0eeee] px-2 py-3 flex flex-col items-center justify-between w-full mt-2'>
        <img src={props.img} className='h-52 w-[90%] bg-[#256b6b] lg:w-56 md:w-4/5'/>
        <div className='text-center w-[90%] h-56 mt-2 md:w-4/5'>
           <h1 className='text-2xl font-black'>{props.name}</h1>
           <p className='text-md mt-2'>{props.description}</p>
        </div>
        <button className='bg-[#54d2d2] text-white px-4 py-3 w-[90%] md:w-4/5 hover:shadow-xl' onClick={toService}>{`${props.name} Services`}</button>
    </div>
  )
}

export default ServiceCard;