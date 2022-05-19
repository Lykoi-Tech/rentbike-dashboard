import axios from 'axios'

import { endPoints } from '../main'

const addUser = async (body) => {
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.post(endPoints.users.addUser, body, options)

  return response.data
}

export { addUser }
