import { CircularProgress } from '@mui/material'

const LoadingWithSpinner = Component => props => {
  const { isLoading, ...otherProps } = props
  return (
    <>
      {isLoading ? (
        <div
          styles={{
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <CircularProgress color="primary" />
        </div>
      ) : (
        <Component {...otherProps} />
      )}
    </>
  )
}

export default LoadingWithSpinner
