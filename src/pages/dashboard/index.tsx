import LayoutPrivate from "@/components/admin/layoutPrivate";
import { Container } from "@/components/container";
import { canSSRAuth } from "data/utils/canRAuth";
import Head from "next/head";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Meu Painel</title>
        <meta name="description" content="Painel de Administração" />
      </Head>
      <LayoutPrivate>
        <Container>Meu Painel</Container>
      </LayoutPrivate>
    </div>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
