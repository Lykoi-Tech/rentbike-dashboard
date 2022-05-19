import { useState, useEffect } from 'react'

import { Header } from '../components/Header'

import { Pagination } from '../components/Pagination'

import { Link } from 'react-router-dom'

import { Modal } from '../components/Modal'

import { FormUser } from '../forms/FormUser'

import { endPoints } from '../services/main'

import { PlusIcon } from '@heroicons/react/solid'

import axios from 'axios'

import { useAlert } from '../hooks/useAlert'

import { Alert } from '../components/Alert'

import { deleteUser } from '../services/api/UsersAPI'

const Users = () => {
  const [users, setUsers] = useState([])

  const [open, setOpen] = useState(false)

  const { alert, setAlert, toggleAlert } = useAlert()

  useEffect(() => {
    async function getUsers () {
      const response = await axios.get(endPoints.users.allUsers)

      setUsers(response.data)
    }

    try {
      getUsers()
    } catch (error) {
      console.error(error)
    }
  }, [alert])

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPage] = useState(6)

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users?.slice(indexOfFirstUser, indexOfLastUser)

  const paginateFront = () => setCurrentPage(currentPage + 1)
  const paginateBack = () => setCurrentPage(currentPage - 1)

  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setAlert({
        active: true,
        message: 'Usuario Eliminado Correctamente',
        type: 'error',
        autoClose: true
      })
    })
  }

  return (
    <div className='Users'>
      <Header />
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        <div className='lg:flex lg:items-center lg:justify-between mb-8'>
          <div className='flex-1 min-w-0'>
            <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>Lista de Usuarios</h2>
          </div>
          <div className='mt-5 flex lg:mt-0 lg:ml-4'>
            <span className='sm:ml-3'>
              <button
                onClick={() => setOpen(true)}
                type='button'
                className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              >
                <PlusIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                Agregar Usuario
              </button>
            </span>
          </div>
        </div>
      </div>
      <Alert alert={alert} handleClose={toggleAlert} />
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
                              : <div className='text-sm font-medium text-pink-400 underline'>Usuario</div>
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
                            ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>Suscrito</span>
                            : <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800'>Desuscrito</span>
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
                        <Link to={`/users/edit/${user.id}`} className='text-indigo-600 hover:text-indigo-900'>
                          Editar
                        </Link>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                        <button className='text-red-600 hover:text-red-900' onClick={() => handleDelete(user.id)}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <FormUser setOpen={setOpen} setAlert={setAlert} />
      </Modal>
    </div>
  )
}

export { Users }
