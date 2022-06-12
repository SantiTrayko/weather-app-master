// External dependencies
import { useEffect, useState } from 'react'

// Material ui dependenciens
import { Box, Grid } from '@mui/material'

// Local components, hooks, files...
import WeatherList from '../components/layout/WeatherList'
import LoadingWithSpinner from '../components/layout/LoadingWithSpinner'
import { useCurrentWeather } from '../hooks/useCurrentWeather'
import { UseGetGeoLocation } from '../hooks/useGetGeolocation'

const WeatherListWhitSpinner = LoadingWithSpinner(WeatherList)

function WeatherScreen() {
  const [search, setSearch] = useState('London')

  const { data, isLoading, refetch } = useCurrentWeather({
    search: search,
  })

  const { data: userLocation, isSuccess: isSuccessLocation } =
    UseGetGeoLocation()

  useEffect(() => {
    if (isSuccessLocation) {
      const { lat, long } = userLocation
      setSearch(`${lat.toString()},${long.toString()}`)
    }
  }, [isSuccessLocation])

  useEffect(() => {
    // refetch()
  }, [search])

  return (
    <Box sx={{ height: '100%' }}>
      <Grid container spacing={0} sx={{ height: '100%' }}>
        <Grid item md={3}>
          <WeatherListWhitSpinner data={data} isLoading={isLoading} />
        </Grid>
        <Grid item md={9}></Grid>
      </Grid>
    </Box>
  )
}

export default WeatherScreen
