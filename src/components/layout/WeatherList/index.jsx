import { Box } from '@mui/system'
import CurrentWeather from '../../common/CurrentWeather'

import SearchHeader from '../../common/SearchHeader'
import styles from './styles'

const WeatherList = ({ data }) => {
  const { mainContainer } = styles

  return (
    <Box sx={mainContainer}>
      <SearchHeader />
      <CurrentWeather />
    </Box>
  )
}

export default WeatherList
