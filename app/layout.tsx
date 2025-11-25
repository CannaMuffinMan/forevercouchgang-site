export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: 'black', color: 'white', fontFamily: 'monospace' }}>
        {children}
      </body>
    </html>
  )
}
