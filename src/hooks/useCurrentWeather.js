import { useQuery } from 'react-query'

import { WEATHER_API_KEY } from '../config'
import { client } from '../config/client'

const getWeather = async search => {
  try {
    const { data } = await client.get('current.json', {
      params: { key: WEATHER_API_KEY, q: search, aqi: 'no' },
    })

    return data
  } catch (error) {
    return Promise.reject(error.response.data.message)
  }
}

export const useCurrentWeather = ({ search }) => {
  return useQuery('get-weather', () => getWeather(search), {
    enabled: false,
  }) //466861
}
