import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const {id}=useParams()
  return (
    <div className='bg-gray-600 p-4'>
      User : {id}
    </div>
  )
}
