import { Header } from '../components/Header'

import { useFetch } from '../hooks/useFetch'

import { Chart } from '../components/Chart'

import { endPoints } from '../services/main'

const General = () => {
  const users = useFetch(endPoints.users.allUsers)
  const hotels = useFetch(endPoints.hotels.allHotels)

  const typePerson = users?.map((user) => user.typePerson.toUpperCase())
  const rolePerson = users?.map((user) => user.role.toUpperCase())

  const isSuscribed = users?.map((user) => user.isSuscribed)
  const isBanned = users?.map((user) => user.isBanned)
  const isDeleted = users?.map((user) => user.isDeleted)

  const country = hotels?.map((hotel) => hotel.Country.name.toUpperCase())
  const stars = hotels?.map((hotel) => hotel.stars)
  const amenities = hotels?.map((hotel) => hotel.amenities.length)

  const isBannedH = hotels?.map((hotel) => hotel.isBanned)
  const isDeletedH = hotels?.map((hotel) => hotel.isDeleted)

  // eslint-disable-next-line no-sequences
  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})

  const usersData = {
    datasets: [
      {
        label: 'Roles',
        data: countOccurrences(rolePerson),
        borderWidth: 2,
        backgroundColor: ['#ef4444', '#84cc16', '#0ea5e9', '#d946ef', '#eab308']
      }
    ]
  }

  const usersData2 = {
    datasets: [
      {
        label: 'Tipos de Persona',
        data: countOccurrences(typePerson),
        borderWidth: 2,
        backgroundColor: ['#ef4444', '#84cc16', '#0ea5e9', '#d946ef', '#eab308']
      }
    ]
  }

  const usersData3 = {
    datasets: [
      {
        label: 'Suscriptores',
        data: countOccurrences(isSuscribed),
        borderWidth: 2,
        backgroundColor: ['#ef4444', '#84cc16', '#0ea5e9', '#d946ef', '#eab308']
      },
      {
        label: 'Eliminados',
        data: countOccurrences(isDeleted),
        borderWidth: 2,
        backgroundColor: ['#d946ef', '#ef4444', '#eab308', '#84cc16', '#0ea5e9']
      },
      {
        label: 'Inhabilitados',
        data: countOccurrences(isBanned),
        borderWidth: 2,
        backgroundColor: ['#0ea5e9', '#ef4444', '#84cc16', '#d946ef', '#eab308']
      }
    ]
  }

  const hotelsData = {
    datasets: [
      {
        label: 'Países',
        data: countOccurrences(country),
        borderWidth: 2,
        backgroundColor: ['#ef4444', '#84cc16', '#0ea5e9', '#d946ef', '#eab308']
      }
    ]
  }

  const hotelsData2 = {
    datasets: [
      {
        label: 'Estrellas',
        data: countOccurrences(stars),
        borderWidth: 2,
        backgroundColor: ['#ef4444', '#84cc16', '#0ea5e9', '#d946ef', '#eab308']
      }
    ]
  }

  const hotelsData3 = {
    datasets: [
      {
        label: 'Eliminados',
        data: countOccurrences(isDeletedH),
        borderWidth: 2,
        backgroundColor: ['#d946ef', '#ef4444', '#eab308', '#84cc16', '#0ea5e9']
      },
      {
        label: 'Inhabilitados',
        data: countOccurrences(isBannedH),
        borderWidth: 2,
        backgroundColor: ['#0ea5e9', '#ef4444', '#84cc16', '#d946ef', '#eab308']
      }
    ]
  }

  const hotelsData4 = {
    datasets: [
      {
        label: 'Estrellas',
        data: countOccurrences(amenities),
        borderWidth: 2,
        backgroundColor: ['#ef4444', '#84cc16', '#0ea5e9', '#d946ef', '#eab308']
      }
    ]
  }

  return (
    <div className='General'>
      <Header />
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 dashboard'>
        <div className='flex w-1/2'>
          <Chart chartData={usersData} titleText='Usuarios' />
          <Chart chartData={usersData2} titleText='Usuarios' />
        </div>
        <hr className='my-10' />
        <div className='flex'>
          <Chart chartData={usersData3} titleText='Usuarios' />
        </div>
        <hr className='my-10' />
        <div className='flex w-1/2'>
          <Chart chartData={hotelsData} titleText='Hoteles' />
          <Chart chartData={hotelsData2} titleText='Hoteles' />
        </div>
        <hr className='my-10' />
        <div className='flex w-1/2'>
          <Chart chartData={hotelsData3} titleText='Hoteles' />
          <Chart chartData={hotelsData4} titleText='Hoteles' />
        </div>
      </div>
    </div>
  )
}

export { General }
