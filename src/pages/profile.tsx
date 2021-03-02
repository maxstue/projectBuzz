import { Flex } from '@chakra-ui/react'

export interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100%"
      flexDirection="column"
    >
      <div>Hello from profile</div>
    </Flex>
  )
}

export default Profile
