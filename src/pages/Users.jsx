import { useState } from 'react'

import { useFetch } from '../hooks/useFetch'

import { Header } from '../components/Header'

import { Pagination } from '../components/Pagination'

import { endPoints } from '../services/main'

const Users = () => {
  const users = useFetch(endPoints.users.allUsers)

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPage] = useState(6)

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users?.slice(indexOfFirstUser, indexOfLastUser)

  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  return (
    <div className='Users'>
      <Header />
      {
        users?.length > 6 && <Pagination
          thingsPerPage={usersPerPage}
          totalThings={users?.length}
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
                      Imagen
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      # ID
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Nombre y Apellido u Organización
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Tipo de Persona
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Rol
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Suscriptor
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
                  {currentUsers?.map((user) => (
                    <tr key={user.id}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {
                          user.organization === null
                            ? <img
                                className='h-10 w-10 rounded-2xl object-cover'
                                src={`https://ui-avatars.com/api/?background=ff3f3f&color=fff&bold=true&name=${user.firstName}+${user.lastName}`} alt=''
                              />
                            : <img
                                className='h-10 w-10 rounded-2xl object-cover'
                                src={`https://ui-avatars.com/api/?background=ff3f3f&color=fff&bold=true&name=${user.organization}`} alt=''
                              />
                        }
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.id}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div>
                          {
                            user.organization
                              ? <div className='text-sm font-medium text-purple-600 underline'>Organización</div>
                              : <div className='text-sm font-medium text-emerald-600 underline'>Usuario</div>
                          }
                          <div className='text-sm font-medium text-gray-900'>{user.organization || `${user.firstName} ${user.lastName}`}</div>
                          <div className='text-sm text-gray-500'>{user.email}</div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize'>{user.typePerson}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize'>{user.role}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {
                          user.isSuscribed
                            ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>Si</span>
                            : <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>No</span>
                        }
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {
                          user.isBanned && user.isDeleted
                            ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>Eliminado</span>
                            : user.isBanned
                              ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800'>Inhabilitado</span>
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

export { Users }
