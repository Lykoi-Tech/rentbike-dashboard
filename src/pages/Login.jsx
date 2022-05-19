import { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import { LockClosedIcon } from '@heroicons/react/solid'

import logo from '../assets/logo.svg'

const Login = () => {
  const navigate = useNavigate()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const auth = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    auth.signIn(email, password).then(() => {
      navigate('/general')
    })
  }

  return (
    <div className='Login'>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src={logo}
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Ingresa con tu cuenta</h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Dirección de correo electrónico
                </label>
                <input
                  ref={emailRef}
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm'
                  placeholder='Dirección de correo electrónico'
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Contraseña
                </label>
                <input
                  ref={passwordRef}
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm'
                  placeholder='Contraseña'
                />
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon className='h-5 w-5 text-red-500 group-hover:text-red-400' aria-hidden='true' />
                </span>
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Login }
