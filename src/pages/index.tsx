import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: ["100", "300", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>IOT Home</title>
        <meta
          name="description"
          content="Residential protection and control system"
        />
      </Head>
      <main
        className={`${roboto.variable} font-[family-name:var(--font-roboto)]`}
      >
        <h1>Página Home</h1>
      </main>
    </>
  );
}
