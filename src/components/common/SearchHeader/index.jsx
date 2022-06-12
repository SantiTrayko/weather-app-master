import { useTranslation } from 'react-i18next'

import { Button, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import MyLocationIcon from '@mui/icons-material/MyLocation'

import styles from './styles'

const SearchHeader = ({}) => {
  const { mainContainer, buttonStyle } = styles

  const { t } = useTranslation()

  return (
    <Box sx={mainContainer}>
      <Button sx={buttonStyle}>{t('SearchForPlaces')}</Button>
      <IconButton
        sx={{
          ...buttonStyle,
          borderRadius: '20px',
          backgroundColor: 'primary.gray',
        }}
      >
        <MyLocationIcon />
      </IconButton>
    </Box>
  )
}

export default SearchHeader
