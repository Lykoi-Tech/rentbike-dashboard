import axios from 'axios'

import { endPoints } from '../main'

const createBilling = async (bookingId) => {
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.post(endPoints.billings.addBilling, bookingId, options)

  return response.data
}

export { createBilling }
