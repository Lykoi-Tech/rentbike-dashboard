import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { Header } from '../components/Header'

import { FormHotel } from '../forms/FormHotel'

import axios from 'axios'

import { endPoints } from '../services/main'

const EditHotel = () => {
  const { id } = useParams()

  const [hotel, setHotel] = useState({})

  useEffect(() => {
    async function getHotel () {
      const response = await axios.get(endPoints.hotels.getHotel(id))

      setHotel(response.data)
    }

    getHotel()
  }, [])

  return (
    <>
      <Header />
      <div className='EditHotel max-w-4xl mx-auto py-6 sm:px-6 lg:px-8'>
        <FormHotel hotel={hotel} />
      </div>
    </>

  )
}

export { EditHotel }
