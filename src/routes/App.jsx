import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '../containers/Layout'

import { ProviderAuth } from '../hooks/useAuth'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { General } from '../pages/General'

const App = () => {
  return (
    <>
      <ProviderAuth>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/general' element={<General />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ProviderAuth>
    </>
  )
}

export { App }
