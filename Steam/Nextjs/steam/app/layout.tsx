import Nav from "../components/nav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
