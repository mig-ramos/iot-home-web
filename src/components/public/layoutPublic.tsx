export default function LayoutPublic({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="antialiased">{children}</main>
    </div>
  );
}
