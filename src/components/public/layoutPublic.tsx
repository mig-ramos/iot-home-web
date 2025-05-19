import { Container } from "../container";
import { Header } from "./header";

export default function LayoutPublic({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Container>
        <main className="antialiased">{children}</main>
      </Container>
    </div>
  );
}
