import LayoutPublic from "@/components/public/layoutPublic";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutPublic>
      <Component {...pageProps} />;
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            backgroundColor: "#f1f1f1",
            color: "#131313",
            borderColor: "rgba(255,255,255, 0.5)",
          },
        }}
      />
    </LayoutPublic>
  );
}
