import { Text, Code, Flex } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { Main } from '../components/Main'

const Index = () => (
  <Container height="100vh">
    <Main>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
          <Code>typescript</Code>.
        </Text>
      </Flex>
    </Main>
  </Container>
)

export default Index
