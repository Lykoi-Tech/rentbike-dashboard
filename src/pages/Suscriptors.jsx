import { useState } from 'react'

import { useFetch } from '../hooks/useFetch'

import { Header } from '../components/Header'

import { Pagination } from '../components/Pagination'

import { endPoints } from '../services/main'

import { PlusIcon } from '@heroicons/react/solid'

const Suscriptors = () => {
  const suscriptors = useFetch(endPoints.suscriptors.allSuscriptors)

  const [currentPage, setCurrentPage] = useState(1)
  const [suscriptorsPerPage, setSuscriptorsPerPage] = useState(6)

  const indexOfLastSuscriptor = currentPage * suscriptorsPerPage
  const indexOfFirstSuscriptor = indexOfLastSuscriptor - suscriptorsPerPage
  const currentSuscriptors = suscriptors?.slice(indexOfFirstSuscriptor, indexOfLastSuscriptor)

  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  return (
    <div className='Reviews'>
      <Header />
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='lg:flex lg:items-center lg:justify-between mb-8'>
          <div className='flex-1 min-w-0'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>Lista de Usuarios</h2>
          </div>
        </div>
      </div>
      {
        suscriptors?.length > 6 && <Pagination
          thingsPerPage={suscriptorsPerPage}
          totalThings={suscriptors?.length}
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
                      Email
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {currentSuscriptors?.map((suscriptor) => (
                    <tr key={suscriptor.id}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{suscriptor.id}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{suscriptor.email}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {
                      suscriptor.isDeleted
                        ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>Eliminado</span>
                        : <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>Activo</span>
                    }
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

export { Suscriptors }
