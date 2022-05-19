const API = import.meta.env.VITE_APP_PUBLIC_API_URL
const VERSION = import.meta.env.VITE_APP_PUBLIC_API_VERSION

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`
  },
  users: {
    addUser: `${API}/api/${VERSION}/users`,
    allUsers: `${API}/api/${VERSION}/users`,
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    updateUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`
  },
  hotels: {
    addHotel: `${API}/api/${VERSION}/hotels`,
    allHotels: `${API}/api/${VERSION}/hotels`,
    getHotel: (id) => `${API}/api/${VERSION}/hotels/${id}`,
    updateHotel: (id) => `${API}/api/${VERSION}/hotels/${id}`,
    deleteHotel: (id) => `${API}/api/${VERSION}/hotels/${id}`
  },
  bookings: {
    addBooking: `${API}/api/${VERSION}/bookings`,
    allBookings: `${API}/api/${VERSION}/bookings`,
    getBooking: (id) => `${API}/api/${VERSION}/bookings/${id}`,
    updateBooking: (id) => `${API}/api/${VERSION}/bookings/${id}`,
    deleteBooking: (id) => `${API}/api/${VERSION}/bookings/${id}`
  },
  reviews: {
    addReview: `${API}/api/${VERSION}/reviews`,
    allReviews: `${API}/api/${VERSION}/reviews`,
    getReview: (id) => `${API}/api/${VERSION}/reviews/${id}`,
    updateReview: (id) => `${API}/api/${VERSION}/reviews/${id}`,
    deleteReview: (id) => `${API}/api/${VERSION}/reviews/${id}`
  },
  amenities: {
    addAmenity: `${API}/api/${VERSION}/amenities`,
    allAmenities: `${API}/api/${VERSION}/amenities`,
    getAmenity: (id) => `${API}/api/${VERSION}/amenities/${id}`,
    updateAmenity: (id) => `${API}/api/${VERSION}/amenities/${id}`,
    deleteAmenity: (id) => `${API}/api/${VERSION}/amenities/${id}`
  },
  countries: {
    addCountry: `${API}/api/${VERSION}/countries`,
    allCountries: `${API}/api/${VERSION}/countries`,
    getCountry: (id) => `${API}/api/${VERSION}/countries/${id}`,
    updateCountry: (id) => `${API}/api/${VERSION}/countries/${id}`,
    deleteCountry: (id) => `${API}/api/${VERSION}/countries/${id}`
  },
  cities: {
    addCity: `${API}/api/${VERSION}/cities`,
    allCities: `${API}/api/${VERSION}/cities`,
    getCity: (id) => `${API}/api/${VERSION}/cities/${id}`,
    updateCity: (id) => `${API}/api/${VERSION}/cities/${id}`,
    deleteCity: (id) => `${API}/api/${VERSION}/cities/${id}`
  },
  suscriptors: {
    addSuscriptor: `${API}/api/${VERSION}/suscriptors`,
    allSuscriptors: `${API}/api/${VERSION}/suscriptors`,
    getSuscriptor: (id) => `${API}/api/${VERSION}/Ss/${id}`,
    updateSuscriptor: (id) => `${API}/api/${VERSION}/suscriptors/${id}`,
    deleteSuscriptor: (id) => `${API}/api/${VERSION}/suscriptors/${id}`
  }
}

export { endPoints }
