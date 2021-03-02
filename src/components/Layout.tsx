import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { DarkModeSwitch } from './DarkModeSwitch'
import { Flex, Stack } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { Container } from './Container'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Flex direction="row" >
      <Stack flexDirection="column" width="20vw" padding="2rem">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <a href="/api/users">Users API</a>
        <DarkModeSwitch />
      </Stack>
      <main>
        <Container width="80vw" height="100vh">
          <Navbar />
          {children}
        </Container>
      </main>
    </Flex>



  </div>
)

export default Layout
