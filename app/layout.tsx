import './globals.css';
import { Lato } from '@next/font/google';
const latoFont = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] });
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from '@/components/nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={latoFont.className}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
