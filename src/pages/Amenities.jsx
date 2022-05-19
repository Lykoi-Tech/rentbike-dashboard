import { useState } from 'react'

import { useFetch } from '../hooks/useFetch'

import { Header } from '../components/Header'

import { Pagination } from '../components/Pagination'

import { endPoints } from '../services/main'

const Amenities = () => {
  const amenities = useFetch(endPoints.amenities.allAmenities)

  console.log(amenities)

  const [currentPage, setCurrentPage] = useState(1)
  const [amenitiesPerPage, setAmenitiesPerPage] = useState(6)

  const indexOfLastAmenity = currentPage * amenitiesPerPage
  const indexOfFirstUser = indexOfLastAmenity - amenitiesPerPage
  const currentAmenities = amenities?.slice(indexOfFirstUser, indexOfLastAmenity)

  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  return (
    <div className='Reviews'>
      <Header />
      <Pagination
        thingsPerPage={amenitiesPerPage}
        totalThings={amenities?.length}
        currentPage={currentPage}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
      />
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
                      Comodidad
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Eliminado
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
                  {currentAmenities?.map((amenity) => (
                    <tr key={amenity.id}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{amenity.id}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize'>{amenity.name}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {
                          amenity.isDeleted
                            ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>Si</span>
                            : <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>No</span>
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

export { Amenities }
