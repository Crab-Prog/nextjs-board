import './globals.css'
import Header from '~/src/components/Header';
import { Providers } from '~/app/providers';
import Navigation from '~/src/components/Navigation';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />

    <body>
    <Header />
    <Navigation />
    <div className="p-4 bg-gray-400">
      {children}
    </div>
    <Providers />
    </body>
    </html>
  )
}
