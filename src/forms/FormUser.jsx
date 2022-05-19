/* eslint-disable no-undef */

import { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import { addUser } from '../services/api/UsersAPI'

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

    addUser(data).then((res) => {
      console.log(res)
      setAlert({
        active: true,
        message: 'Usuario Agregado Correctamente',
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
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='role' className='block text-sm font-medium text-gray-700'>
                Rol
              </label>
              <select
                defaultValue={user?.role}
                id='role'
                name='role'
                autoComplete='role-name'
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm'
              >
                <option value='admin'>Administrador</option>
                <option value='owner'>Propietario</option>
                <option value='customer'>Cliente</option>
              </select>
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='typePerson' className='block text-sm font-medium text-gray-700'>
                Tipo de Persona
              </label>
              <select
                defaultValue={user?.typePerson}
                id='typePerson'
                name='typePerson'
                autoComplete='typePerson-name'
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm'
              >
                <option value='natural'>Natural</option>
                <option value='legal'>Legal</option>
              </select>
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>
                First Name
              </label>
              <input type='text' defaultValue={user?.firstName === null ? 'No Definido...' : user?.firstName} name='firstName' id='firstName' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>
                Last Name
              </label>
              <input type='text' defaultValue={user?.lastName === null ? 'No Definido...' : user?.lastName} name='lastName' id='lastName' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6'>
              <label htmlFor='image' className='block text-sm font-medium text-gray-700'>
                Imagen de Perfil
              </label>
              <input type='text' defaultValue={user?.image} name='image' id='image' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6'>
              <label htmlFor='organization' className='block text-sm font-medium text-gray-700'>
                Organización
              </label>
              <input type='text' defaultValue={user?.organization === null ? 'No Definido...' : user?.organization} name='organization' id='organization' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input type='email' name='email' defaultValue={user?.email} id='email' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Contraseña
              </label>
              <input type='password' name='password' defaultValue={user?.password} id='password' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label htmlFor='repeatPass' className='block text-sm font-medium text-gray-700'>
                Repetir contraseña
              </label>
              <input type='password' name='repeatPass' defaultValue={user?.repeatPass} id='repeatPass' className='mt-1 focus:ring-red-600 focus:border-red-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
            </div>
            <div className='col-span-6 sm:col-span-2'>
              <label htmlFor='isBanned' className='block text-sm font-medium text-gray-700'>
                Penalizado
              </label>
              <select
                defaultValue={user?.isBanned}
                id='isBanned'
                name='isBanned'
                autoComplete='isBanned-name'
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm'
              >
                <option value='false'>Falso</option>
                <option value='true'>Verdadero</option>
              </select>
            </div>
            <div className='col-span-6 sm:col-span-2'>
              <label htmlFor='isSuscribed' className='block text-sm font-medium text-gray-700'>
                Suscriptor
              </label>
              <select
                defaultValue={user?.isSuscribed}
                id='isSuscribed'
                name='isSuscribed'
                autoComplete='isSuscribed-name'
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm'
              >
                <option value='false'>Falso</option>
                <option value='true'>Verdadero</option>
              </select>
            </div>
            <div className='col-span-6 sm:col-span-2'>
              <label htmlFor='isSuscribed' className='block text-sm font-medium text-gray-700'>
                Eliminado
              </label>
              <select
                defaultValue={user?.isDeleted}
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

export { FormUser }
