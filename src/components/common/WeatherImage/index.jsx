import { Box } from '@mui/system'

// import styles from './styles'

const WeatherImage = ({ variant, imgUri }) => {
  //   const { mainContainer } = styles

  return (
    <Box sx={{ variant }}>
      <img src={imgUri} />
    </Box>
  )
}

export default WeatherImage
