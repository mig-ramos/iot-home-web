import Image from "next/image";
import loading from "../../assets/loading.gif";

import { useContext } from "react";
import Router from "next/router";
import { AuthContext } from "data/contexts/AuthContext";
export default function ForceAutentication(props: any) {
  const { user, carregando, isAuthenticated } = useContext(AuthContext);
  function renderizarConteudo() {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                if(!document.cookie?.includes("session.token")) {
                window.location.href = "/auth"
            } else {
             window.location.href = "/"
             }
            `,
          }}
        />
        {props.children}
      </>
    );
  }
  function renderizarCarregando() {
    return (
      <div
        className={`
                flex justify-center items-center h-screen
            `}
      >
        <Image src={loading} alt="Carregando" />
      </div>
    );
  }
  // console.log(carregando, user, isAuthenticated);
  if (!carregando && isAuthenticated) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    Router.push("/auth");
    return null;
  }
}
