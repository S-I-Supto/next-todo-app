import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Provider from './components/Provider'
import Header from './components/Header'
export const metadata = {
  title: 'TODO APP',
  description: 'Built by Supto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <>
            <Header />
            {children}
          </>
        </Provider>
      </body>
    </html>
  )
}
