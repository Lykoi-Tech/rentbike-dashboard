/* eslint-disable no-undef */

import { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import { endPoints } from '../services/main'

const FormUser = ({ setOpen, setAlert, user }) => {
  const formRef = useRef(null)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const data = {
      role: formData.get('role'),
      typePerson: formData.get('typePerson'),
      firstName: formData.get('firstName') === 'No Definido...' ? null : formData.get('firstName'),
      lastName: formData.get('lastName') === 'No Definido...' ? null : formData.get('lastName'),
      image: formData.get('image'),
      organization: formData.get('organization') === 'No Definido...' ? null : formData.get('organization'),
      email: formData.get('email'),
      password: formData.get('password'),
      repeatPass: formData.get('repeatPass'),
      isBanned: formData.get('isBanned') === 'true',
      isSuscribed: formData.get('isSuscribed') === 'true',
      isDeleted: formData.get('isSuscribed') === 'true'
    }

    if (product) {
      updateProduct(product.id, data).then(() => {
        navigate('/dashboard/products/')
      })
    } else {
      addProduct(data)
        .then(() => {
          setAlert({
            active: true,
            message: 'Product added successfully',
            type: 'success',
            autoClose: false
          })
          setOpen(false)
        })
        .catch((error) => {
          setAlert({
            active: true,
            message: error.message,
            type: 'error',
            autoClose: false
          })
        })
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className='overflow-hidden'>
        <div className='px-4 py-5 bg-white sm:p-6'>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
                Title
              </label>
              <input
                defaultValue={product?.title}
                type='text'
                name='title'
                id='title'
                className='mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='price' className='block text-sm font-medium text-gray-700'>
                Price
              </label>
              <input
                defaultValue={product?.price}
                type='number'
                name='price'
                id='price'
                className='mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              />
            </div>
            <div className='col-span-6'>
              <label htmlFor='category' className='block text-sm font-medium text-gray-700'>
                Category
              </label>
              <select
                id='category'
                name='category'
                defaultValue={product?.category}
                autoComplete='category-name'
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
              >
                <option value='1'>Clothes</option>
                <option value='2'>Electronics</option>
                <option value='3'>Furniture</option>
                <option value='4'>Toys</option>
                <option value='5'>Others</option>
              </select>
            </div>
            <div className='col-span-6'>
              <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
                Description
              </label>
              <textarea
                defaultValue={product?.description}
                name='description'
                id='description'
                autoComplete='description'
                rows='3'
                className='form-textarea mt-1 block w-full mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              />
            </div>
            <div className='col-span-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>Cover photo</label>
                <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                  <div className='space-y-1 text-center'>
                    <svg className='mx-auto h-12 w-12 text-gray-400' stroke='currentColor' fill='none' viewBox='0 0 48 48' aria-hidden='true'>
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='images'
                        className='relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500'
                      >
                        <span>Upload a file</span>
                        <input defaultValue={product?.images} id='images' name='images' type='file' className='sr-only' />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
          <button
            type='submit'
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export { FormUser }
