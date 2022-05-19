/* eslint-disable camelcase */

import { useState, useContext, createContext } from 'react'

import axios from 'axios'

import Cookie from 'js-cookie'

import { endPoints } from '../services/main'

const AuthContext = createContext()

export function ProviderAuth ({ children }) {
  const auth = useProviderAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProviderAuth () {
  const [user, setUser] = useState(null)

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json'
      }
    }

    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options)

    if (access_token) {
      const token = access_token.token
      const userID = access_token.user.id

      Cookie.set('token', token, { expires: 5 })

      axios.defaults.headers.Authorization = `Bearer ${token}`

      const { data: user } = await axios.get(endPoints.users.getUser(userID))

      delete user.image
      delete user.favHotels
      delete user.createdAt
      delete user.Hotels
      delete user.Reviews
      delete user.Bookings

      setUser(user)

      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }

  const logout = () => {
    Cookie.remove('token')

    window.localStorage.removeItem('user')

    setUser(null)

    delete axios.defaults.headers.Authorization
  }

  return {
    user,
    signIn,
    logout
  }
}
