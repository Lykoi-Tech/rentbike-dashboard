import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Header } from '../components/Header'

import { FormUser } from '../forms/FormUser'

import axios from 'axios'

import { endPoints } from '../services/main'

const EditUser = () => {
  const { id } = useParams()

  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUser () {
      const response = await axios.get(endPoints.users.getUser(id))

      setUser(response.data)
    }

    getUser()
  }, [])

  return (
    <>
      <Header />
      <div className='EditUser max-w-4xl mx-auto py-6 sm:px-6 lg:px-8'>
        <FormUser user={user} />
      </div>
    </>

  )
}

export { EditUser }
