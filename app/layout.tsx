import './globals.css'
import Header from '~/src/components/Header';
import { Providers } from '~/app/providers';
import Navigation from '~/src/components/Navigation';
import { SidebarContextProvider } from '~/app/context/Sidebar';
import Login from '~/app/login/page';

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  const auth = true;
  return (
    <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />

    <body className="p-4 bg-gray-100 mb-4">
    {auth ?
      <SidebarContextProvider>
        <Header />
        <Navigation />
        <div>
          {children}
        </div>
        <Providers />
      </SidebarContextProvider>
      : <Login />
    }
    </body>
    </html>
  )
}
