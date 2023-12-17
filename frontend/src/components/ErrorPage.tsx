import { ErrorContainer, ErrorMessage } from '../styles'

interface ErrorPageProps {
  error: Error
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>Error: {error.message}</ErrorMessage>
    </ErrorContainer>
  )
}

export default ErrorPage
