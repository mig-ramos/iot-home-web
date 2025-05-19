import { Container } from "../container";
import { Footer } from "./footer";
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
      <Footer />
    </div>
  );
}
