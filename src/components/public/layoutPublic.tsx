import { Header } from "./header";

export default function LayoutPublic({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className="antialiased">{children}</main>
    </div>
  );
}
