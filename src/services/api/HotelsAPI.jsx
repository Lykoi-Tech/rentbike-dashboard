import axios from 'axios'

import { endPoints } from '../main'

const addHotel = async (body) => {
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.post(endPoints.hotels.addHotel, body, options)

  return response.data
}

const deleteHotel = async (id) => {
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const body = {
    isBanned: true,
    isDeleted: true
  }

  const response = await axios.patch(endPoints.hotels.getHotel(id), body, options)

  return response.data
}

export { addHotel, deleteHotel }
