/* eslint-disable no-undef */

import { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import { addAmenity } from '../services/api/AmenityAPI'

const FormAmenity = ({ setOpen, setAlert }) => {
  const formRef = useRef(null)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('name')
    }

    addAmenity(data).then(() => {
      setAlert({
        active: true,
        message: 'Comodidad Creada Correctamente',
        type: 'success',
        autoClose: false
      })
      setOpen(false)
    }).catch((error) => {
      console.error(error)
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
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Nombre de la Comodidad
              </label>
              <input type='text' name='name' id='name' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
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

export { FormAmenity }
