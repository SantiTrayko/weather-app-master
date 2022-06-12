import { useQuery } from 'react-query'

const getCoordinates = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

const getGeoLocation = async () => {
  if ('geolocation' in navigator) {
    try {
      const {
        coords: { latitude: lat, longitude: long },
      } = await getCoordinates()

      return { lat, long }
    } catch {
      return Promise.reject(
        'Ocurrio un error o no hay permisos para ver la ubicación'
      )
    }
  } else {
    /* la geolocalización NO está disponible */
    return Promise.reject('el navegador no soporta la geolocalización')
  }
}

export const UseGetGeoLocation = () => {
  return useQuery(['userGeolocation'], () => getGeoLocation())
}
