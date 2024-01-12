import {
    HomeContainer as Container,
    Heading1,
    Heading3,
    HomeParagraph as Paragraph,
    HomeLinkStyled as Link,
} from '../../styles';
import { PATHS } from '../../utils';

const Home: React.FC = () => {
    return (
        <Container>
            <Heading1>The Restro Reviewer</Heading1>

            <Heading3>
                where the food and its roundabouts gets reviewed!!
            </Heading3>

            <Paragraph>
                Welcome to The Restro Reviewer! Your go-to place to explore and
                review various restaurants.
            </Paragraph>

            <Paragraph>
                Start your journey by checking out the{' '}
                <Link href={PATHS.RESTAURANTS}>restaurants</Link> and <br />
                sharing your reviews with us!
            </Paragraph>
        </Container>
    );
};

export default Home;
