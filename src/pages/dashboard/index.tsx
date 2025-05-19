import { Container } from "@/components/container";
import Head from "next/head";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Meu Painel</title>
        <meta name="description" content="Painel de Administração" />
      </Head>
      <Container>Meu Painel</Container>
    </div>
  );
}
