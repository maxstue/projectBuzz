import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { DarkModeSwitch } from './DarkModeSwitch'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
        <DarkModeSwitch />
      </nav>
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
