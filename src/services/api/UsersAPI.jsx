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

const deleteUser = async (id) => {
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

  const response = await axios.patch(endPoints.users.deleteUser(id), body, options)

  return response.data
}

const updateUser = async (id, body) => {
  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.patch(endPoints.users.updateUser(id), body, options)

  return response.data
}

export { addUser, deleteUser, updateUser }
