const API = import.meta.env.VITE_APP_PUBLIC_API_URL
const VERSION = import.meta.env.VITE_APP_PUBLIC_API_VERSION

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`
  }
}

export { endPoints }
