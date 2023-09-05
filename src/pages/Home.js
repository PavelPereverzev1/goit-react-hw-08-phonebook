import { Container } from "./Home.styled";
  
export default function Home() {
    return (
      <Container>
        <h1 >
          Phone book welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </Container>
    );
  }