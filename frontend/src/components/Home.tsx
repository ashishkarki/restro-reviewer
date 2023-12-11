import {
  HomeContainer as Container,
  Heading1,
  Heading3,
  HomeParagraph as Paragraph,
  LinkStyled,
} from '../styles'
import { PATHS } from '../utils'

const Home: React.FC = () => {
  return (
    <Container>
      <Heading1>The Restro Reviewer</Heading1>

      <Heading3>where the food and its roundabouts gets reviewed!!</Heading3>

      <Paragraph>
        Welcome to The Restro Reviewer! Your go-to place to explore and review
        various restaurants.
      </Paragraph>

      <Paragraph>
        Start your journey by checking out the{' '}
        <LinkStyled href={PATHS.RESTAURANTS}>restaurants</LinkStyled> or{' '}
        <LinkStyled href={PATHS.REVIEW}>share your reviews</LinkStyled> with us!
      </Paragraph>
    </Container>
  )
}

export default Home
