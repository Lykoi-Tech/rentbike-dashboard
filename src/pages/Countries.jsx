import { useState } from 'react'

import { useFetch } from '../hooks/useFetch'

import { Header } from '../components/Header'

import { Pagination } from '../components/Pagination'

import { endPoints } from '../services/main'

import { PlusIcon } from '@heroicons/react/solid'

const Countries = () => {
  const countries = useFetch(endPoints.countries.allCountries)

  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPage] = useState(6)

  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountries = countries?.slice(indexOfFirstCountry, indexOfLastCountry)

  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  return (
    <div className='Countries'>
      <Header />
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='lg:flex lg:items-center lg:justify-between mb-8'>
          <div className='flex-1 min-w-0'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>Lista de Usuarios</h2>
          </div>
          <div className='mt-5 flex lg:mt-0 lg:ml-4'>
            <span className='sm:ml-3'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              >
                <PlusIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                Agregar País
              </button>
            </span>
          </div>
        </div>
      </div>
      {
        countries?.length > 6 && <Pagination
          thingsPerPage={countriesPerPage}
          totalThings={countries?.length}
          currentPage={currentPage}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
                                 />
      }
      <div className='flex flex-col max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      # ID
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      País
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Estado
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Editar</span>
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Eliminar</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {currentCountries?.map((country) => (
                    <tr key={country.id}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{country.id}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize'>{country.name}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {
                          country.isDeleted
                            ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>Eliminado</span>
                            : <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>Activo</span>
                        }
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <a href='/edit' className='text-indigo-600 hover:text-indigo-900'>
                          Editar
                        </a>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <a href='/edit' className='text-red-600 hover:text-red-900'>
                          Eliminar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Countries }
