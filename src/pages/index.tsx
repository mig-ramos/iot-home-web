import Image from "next/image";
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
        <title>IOT Home - Protection</title>
        <meta
          name="description"
          content="Residential protection and control system"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={`${roboto.variable} font-[family-name:var(--font-roboto)] flex items-center flex-col justify-center min-h-[calc(100vh-150px)]`}
      >
        <h2 className="font-medium text-2xl mb-2">
          Administração da <span className="text-blue-500">IOT</span>Home
        </h2>
        <h1 className="font-bold text-3xl mb-8 text-blue-600 md:text-4xl">
          Atendimentos, clientes
        </h1>
        <Image
          src="/hero.svg"
          alt="Imagem hero do iot home"
          width={550}
          height={300}
          priority
        />
      </main>
    </>
  );
}
