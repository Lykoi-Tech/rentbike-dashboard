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

  console.log(response.data)

  return response.data
}

export { addHotel }
