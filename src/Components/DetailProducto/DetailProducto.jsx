import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';

//Aquí se renderiza el detalle de cada producto

export default function DetailProducto() {

  let {id} = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.details);

  return (
    <div>
      <div className='w-full'>
        <NavBar />
      </div>
      <div className='flex w-full flex bg-gray-300'>
      </div>
    </div>
  )
}
