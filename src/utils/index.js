export const getWeatherIconUri = ({ iconCode, moment = 'day' }) => {
  return `../assets/weatherIcons/64x64/${moment}/${iconCode}`
}
