export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="m-auto h-screen container ">{children}</div>;
}
