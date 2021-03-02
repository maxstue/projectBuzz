import Link from 'next/link'
import React, { FunctionComponent, ReactNode } from 'react'
import { Navbar } from './Navbar'

type Props = {
  children?: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const sidebarList = [
    {
      title: 'Home',
      route: '/',
      iconName: ''
    },
    {
      title: 'Project-Tinder',
      route: '/project-tinder',
      iconName: ''
    },
    {
      title: 'Profile',
      route: '/profile',
      iconName: ''
    },
    {
      title: 'About',
      route: '/about',
      iconName: ''
    },
  ]
  return (
    <div className="bg-body text-white">
      <div
        className="grid grid-cols-3 mx-12 min-h-screen"
        style={{ gridTemplateColumns: '250px 1fr 350px' }}
      >
        <nav className="fixed">
          <div className="mt-4 mb-8 ml-2">
            {/* <IconTwitterLogo size="xl" /> */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <ul>
            <li className="mb-6">
              <Link href="/">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full">
                      <span>{/* <IconHome size="lg" className="" /> */}</span>
                      <span className="ml-4 text-xl">Home</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-6">
              <Link href="/about">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full">
                      <span>
                        {/* <IconExplore size="lg" className="" /> */}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.5468 3.67162C20.1563 3.28109 19.5231 3.28109 19.1326 3.67162L13.7687 9.03555H2V11.0356H2.00842C2.22563 16.3663 6.61591 20.6213 12 20.6213C17.3841 20.6213 21.7744 16.3663 21.9916 11.0356H22V9.03555H16.5971L20.5468 5.08583C20.9374 4.69531 20.9374 4.06214 20.5468 3.67162ZM14.1762 11.0356C14.1806 11.0356 14.1851 11.0356 14.1896 11.0356H19.9895C19.7739 15.2613 16.2793 18.6213 12 18.6213C7.72066 18.6213 4.22609 15.2613 4.01054 11.0356H14.1762Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span className="ml-4 text-xl">Explore</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-6">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full">
                      <span>
                        {/* <IconNotifications size="lg" className="" /> */}
                      </span>
                      <span className="ml-4 text-xl">Notifications</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
            <li className="mb-6">
              <Link href="/home">
                <a className="font-bold group block">
                  <span className="inline-block">
                    <span className="flex items-center group-hover:bg-gray-900 px-4 py-2 rounded-full">
                      <span>
                        {/* <IconMessages size="lg" className="" /> */}
                      </span>
                      <span className="ml-4 text-xl">Messages</span>
                    </span>
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>{/* Empty div to prevent sidebar overlap */}</div>
        <main className="min-h-screen border-l border-r border-gray-600 p-2">
          <Navbar />
          {children}

          {/* <ComposeTweet />
          <div className="h-3 bg-gray-900"></div>
          <ul>
            <li className="border-b border-gray-600">
              <CardTweet imageUrl="https://pbs.twimg.com/media/EVRjNTPUcAIiYI2?format=jpg&name=large" />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
            <li className="border-b border-gray-600">
              <CardTweet />
            </li>
          </ul> */}
        </main>
        {/* TODO rechte sidebar */}
        {/* <aside className="pl-8 pr-2">
          <div className="mt-2">
            <InputSearch />
          </div>
          <div className="mt-4">
            <ListTrends />
          </div>
          <div className="mt-4">
            <ListFollowSuggestions />
          </div>
        </aside> */}
      </div>
    </div>
  )
}

export default Layout
