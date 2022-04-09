import { Container, Title, Loader, Ball } from "./styles/main";

function ComingSoon() {
  return (
    <Container>
      <Title>Coming Soon</Title>
      <Loader>
        <Ball delay="0" />
        <Ball delay="0.4" />
      </Loader>
    </Container>
  );
}

export default ComingSoon;
