export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <h2>Inner Layout</h2>
            {children}
        </body>
      </html>
    )
}