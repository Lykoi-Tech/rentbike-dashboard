import axios from 'axios'

import { endPoints } from '../main'

const addAmenity = async (body) => {
  console.log(body)
  console.log(endPoints.amenities.addAmenity)
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.post(endPoints.amenities.addAmenity, body, options)

  return response.data
}

export { addAmenity }
