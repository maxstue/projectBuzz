import { Flex } from '@chakra-ui/react'
import Link from 'next/link'

const AboutPage = () => (
  <>
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100%"
      flexDirection="column"
    >
      <div>Hello from profile</div>
      <Link href="/">
      Go to Home
      </Link>
    </Flex>
  </>
)

export default AboutPage
