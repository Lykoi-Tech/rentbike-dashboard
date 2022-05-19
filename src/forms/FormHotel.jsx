/* eslint-disable no-undef */

import { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import { addHotel } from '../services/api/HotelsAPI'

const FormHotel = ({ setOpen, setAlert, hotel }) => {
  const formRef = useRef(null)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('name'),
      description: formData.get('description'),

      stars: parseInt(formData.get('stars')),
      price: parseInt(formData.get('price')),

      CountryId: parseInt(formData.get('CountryId')),
      CityId: parseInt(formData.get('CityId')),
      address: formData.get('address'),
      latitude: parseFloat(formData.get('latitude')),
      longitude: parseFloat(formData.get('longitude')),

      guests: parseInt(formData.get('guests')),
      children: parseInt(formData.get('children')),

      email: formData.get('email'),
      phone: formData.get('phone'),
      web: formData.get('web'),

      mainImage: formData.get('mainImage'),
      roomImage: formData.get('roomImage'),
      barImage: formData.get('barImage'),
      amenitiesImage: formData.get('amenitiesImage'),
      otherImage: formData.get('otherImage'),

      amenities: formData.get('amenities').split(', '),

      UserId: parseInt(formData.get('UserId')),

      isBanned: formData.get('isBanned') === 'true',
      isDeleted: formData.get('isSuscribed') === 'true'
    }

    addHotel(data).then(() => {
      setAlert({
        active: true,
        message: 'Hotel Agregado Correctamente',
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
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Nombre del Hotel
              </label>
              <input type='text' defaultValue={hotel?.name} name='name' id='name' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6'>
              <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
                Descripción
              </label>
              <textarea
                defaultValue={hotel?.description}
                name='description'
                id='description'
                autoComplete='description'
                rows='3'
                className='form-textarea mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              />
            </div>
            <div className='col-span-3'>
              <label htmlFor='price' className='block text-sm font-medium text-gray-700'>
                Precio
              </label>
              <input type='text' defaultValue={hotel?.price} name='price' id='price' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='stars' className='block text-sm font-medium text-gray-700'>
                Estrellas
              </label>
              <input type='text' defaultValue={hotel?.stars} name='stars' id='stars' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6'>
              <label htmlFor='CountryId' className='block text-sm font-medium text-gray-700'>
                País
              </label>
              <input type='text' defaultValue={hotel?.CountryId} name='CountryId' id='CountryId' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='CityId' className='block text-sm font-medium text-gray-700'>
                Ciudad
              </label>
              <input type='text' defaultValue={hotel?.CityId} name='CityId' id='CityId' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='address' className='block text-sm font-medium text-gray-700'>
                Dirección
              </label>
              <input type='text' defaultValue={hotel?.address} name='address' id='address' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='latitude' className='block text-sm font-medium text-gray-700'>
                Latitud
              </label>
              <input type='text' defaultValue={hotel?.latitude} name='latitude' id='latitude' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='longitude' className='block text-sm font-medium text-gray-700'>
                Longitud
              </label>
              <input type='text' defaultValue={hotel?.longitude} name='longitude' id='longitude' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='guests' className='block text-sm font-medium text-gray-700'>
                Huéspedes
              </label>
              <input type='text' defaultValue={hotel?.guests} name='guests' id='guests' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='children' className='block text-sm font-medium text-gray-700'>
                Niños
              </label>
              <input type='text' defaultValue={hotel?.children} name='children' id='children' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='UserId' className='block text-sm font-medium text-gray-700'>
                Propietario
              </label>
              <input type='number' name='UserId' defaultValue={hotel?.UserId} id='UserId' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                Número Telefónico
              </label>
              <input type='text' name='phone' defaultValue={hotel?.phone} id='phone' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input type='email' name='email' defaultValue={hotel?.email} id='email' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='web' className='block text-sm font-medium text-gray-700'>
                Página Web
              </label>
              <input type='text' name='web' defaultValue={hotel?.web} id='web' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6'>
              <label htmlFor='mainImage' className='block text-sm font-medium text-gray-700'>
                Imagen Principal
              </label>
              <input type='text' defaultValue={hotel?.mainImage} name='mainImage' id='mainImage' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='roomImage' className='block text-sm font-medium text-gray-700'>
                Imagen de Habitación
              </label>
              <input type='text' defaultValue={hotel?.roomImage} name='roomImage' id='roomImage' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='barImage' className='block text-sm font-medium text-gray-700'>
                Imagen del Bar
              </label>
              <input type='text' defaultValue={hotel?.barImage} name='barImage' id='barImage' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='amenitiesImage' className='block text-sm font-medium text-gray-700'>
                Imagen de Comodidades
              </label>
              <input type='text' defaultValue={hotel?.amenitiesImage} name='amenitiesImage' id='amenitiesImage' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-3'>
              <label htmlFor='otherImage' className='block text-sm font-medium text-gray-700'>
                Imagen Random
              </label>
              <input type='text' defaultValue={hotel?.otherImage} name='otherImage' id='otherImage' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6'>
              <label htmlFor='amenities' className='block text-sm font-medium text-gray-700'>
                Comodidades
              </label>
              <input type='text' name='amenities' defaultValue={hotel?.amenities} id='amenities' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='isBanned' className='block text-sm font-medium text-gray-700'>
                Penalizado
              </label>
              <select
                defaultValue={hotel?.isBanned}
                id='isBanned'
                name='isBanned'
                autoComplete='isBanned-name'
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm'
              >
                <option value='false'>Falso</option>
                <option value='true'>Verdadero</option>
              </select>
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='isSuscribed' className='block text-sm font-medium text-gray-700'>
                Eliminado
              </label>
              <select
                defaultValue={hotel?.isDeleted}
                id='isDeleted'
                name='isDeleted'
                autoComplete='isDeleted-name'
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm'
              >
                <option value='false'>Falso</option>
                <option value='true'>Verdadero</option>
              </select>
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

export { FormHotel }
