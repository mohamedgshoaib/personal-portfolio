export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="motion-route-enter">{children}</div>
}
