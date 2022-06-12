import { useTranslation } from 'react-i18next'

import { Grid } from '@mui/material'

import styles from './styles'
import WeatherImage from '../WeatherImage'
import { getWeatherIconUri } from '../../../utils'

const CurrentWeather = ({}) => {
  const { mainContainer } = styles

  const { t } = useTranslation()

  return (
    <Grid
      sx={mainContainer}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid xs={6}>
        <WeatherImage imgUri={getWeatherIconUri({ iconCode: '113' })} />
      </Grid>
      <Grid></Grid>
      <Grid></Grid>
    </Grid>
  )
}

export default CurrentWeather
