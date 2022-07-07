import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '../containers/Layout'

import { ProviderAuth } from '../hooks/useAuth'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Users } from '../pages/Users'
import { EditUser } from '../pages/EditUser'
import { Hotels } from '../pages/Hotels'
import { EditHotel } from '../pages/EditHotel'
import { Bookings } from '../pages/Bookings'

const App = () => {
  return (
    <>
      <ProviderAuth>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              {/* <Route path='/general' element={<General />} /> */}
              <Route path='/users' element={<Users />} />
              <Route path='/users/edit/:id' element={<EditUser />} />
              <Route path='/hotels' element={<Hotels />} />
              <Route path='/hotels/edit/:id' element={<EditHotel />} />
              <Route path='/bookings' element={<Bookings />} />
              {/* <Route path='/reviews' element={<Reviews />} />
              <Route path='/amenities' element={<Amenities />} />
              <Route path='/countries' element={<Countries />} />
              <Route path='/cities' element={<Cities />} />
              <Route path='/suscriptors' element={<Suscriptors />} />
              <Route path='/billings' element={<Billings />} />
              <Route path='*' element={<NotFound />} /> */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </ProviderAuth>
    </>
  )
}

export { App }
