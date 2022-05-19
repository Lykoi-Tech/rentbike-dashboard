import { useAuth } from '../hooks/useAuth'

import { useLocation, Link } from 'react-router-dom'

import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import logo from '../assets/logo.svg'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const location = useLocation()

  const [userData, setUserData] = useState(null)
  const auth = useAuth()

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user')

    if (userJSON) {
      const user = JSON.parse(userJSON)

      setUserData(user)
    }
  }, [])

  const navigation = [
    { name: 'General', href: '/general', current: location.pathname.substring(1) === 'general' },
    { name: 'Usuarios', href: '/users', current: location.pathname.substring(1) === 'users' },
    { name: 'Hoteles', href: '/hotels', current: location.pathname.substring(1) === 'hotels' },
    { name: 'Reservas', href: '/bookings', current: location.pathname.substring(1) === 'bookings' },
    { name: 'Reseñas', href: '/reviews', current: location.pathname.substring(1) === 'reviews' },
    { name: 'Comodidades', href: '/amenities', current: location.pathname.substring(1) === 'amenities' },
    { name: 'Países', href: '/countries', current: location.pathname.substring(1) === 'countries' },
    { name: 'Ciudades', href: '/cities', current: location.pathname.substring(1) === 'cities' },
    { name: 'Suscriptores', href: '/suscriptors', current: location.pathname.substring(1) === 'suscriptors' },
    { name: 'Facturas', href: '/billings', current: location.pathname.substring(1) === 'billings' }
  ]

  return (
    <div className='Header mb-6'>
      <Disclosure as='nav' className='bg-white border-b-2'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-red-400 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open
                      ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                        )
                      : (
                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                        )}
                  </Disclosure.Button>
                </div>
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex-shrink-0 flex items-center'>
                    <Link to='/'>
                      <img
                        className='block lg:hidden h-8 w-auto'
                        src={logo}
                        alt='Workflow'
                      />
                    </Link>
                    <Link to='/'>
                      <img
                        className='hidden lg:block h-8 w-auto'
                        src={logo}
                        alt='Workflow'
                      />
                    </Link>
                  </div>
                  <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current ? 'bg-red-900 text-white' : 'text-red-300 hover:bg-red-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <Menu as='div' className='ml-3 relative'>
                    <div>
                      <Menu.Button className='bg-red-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white'>
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src={`https://ui-avatars.com/api/?background=ff3f3f&color=fff&bold=true&name=${userData?.organization}`}
                          alt=''
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={auth.logout()}
                              href='/'
                              className={classNames(active ? 'bg-red-100' : '', 'cursor-pointer block px-4 py-2 text-sm text-red-700')}
                            >
                              Cerrar Sesión
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-red-900 text-white' : 'text-red-300 hover:bg-red-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export { Header }
