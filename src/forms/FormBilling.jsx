/* eslint-disable no-undef */

import { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import { createBilling } from '../services/api/BillingsAPI'

const FormBilling = ({ setOpen, setAlert }) => {
  const formRef = useRef(null)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const data = {
      BookingId: parseInt(formData.get('BookingId'))
    }

    createBilling(data).then(() => {
      setAlert({
        active: true,
        message: 'Factura Creada Correctamente',
        type: 'success',
        autoClose: false
      })
      setOpen(false)
    }).catch((error) => {
      setAlert({
        active: true,
        message: error.message,
        type: 'error',
        autoClose: false
      })
    })
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className='overflow-hidden'>
        <div className='px-4 py-5 bg-white sm:p-6'>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6'>
              <label htmlFor='BookingId' className='block text-sm font-medium text-gray-700'>
                ID De Reserva
              </label>
              <input type='text' name='BookingId' id='BookingId' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
          </div>
        </div>
        <div className='px-4 py-3 bg-gray-100 text-right sm:px-6'>
          <button
            type='submit'
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export { FormBilling }
