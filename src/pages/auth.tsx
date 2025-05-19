import { useState, useContext } from "react";
import Image from "next/image";
import imgLoading from "assets/loading.gif";
import { toast } from "sonner";
import router from "next/router";
import Head from "next/head";
import { InputText } from "@/components/input";
import { AuthContext } from "../data/contexts/AuthContext";
import { canSSRGuest } from "data/utils/canRGuest";

export default function Auth() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useContext(AuthContext);

  function clearForm() {
    setName("");
    setEmail("");
    // setRole('');
    setPassword("");
    setPassConfirm("");
  }

  async function submeter() {
    if (modo === "login") {
      if (email === "" || password === "") {
        toast.warning("PREENCHA OS DADOS...");
        return;
      }
      setLoading(true);
      let data = {
        email,
        password,
      };
      await signIn(data);
      // clearForm();
      setLoading(false);
    } else {
      if (
        name === "" ||
        email === "" ||
        password === "" ||
        passConfirm === ""
      ) {
        toast.warning("PREENCHA OS DADOS...");
        return;
      }
      if (password !== passConfirm) {
        toast.warning("As SENHAS são diferentes...");
        return;
      }
      setLoading(true);
      let data = {
        name,
        email,
        password,
      };
      await signUp(data);
      clearForm();
      setModo("login");
      setLoading(false);
    }
  }
  return (
    <div className={"dark:bg-gray-800 min-h-screen"}>
      <div
        className={
          "flex flex-col w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 mx-auto"
        }
      >
        <h1 className={"text-3xl font-bold mt-3 dark:text-gray-300"}>
          {modo === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>
        <div className="flex flex-col gap-3">
          <InputText
            tipo="text"
            label="Nome"
            valor={name}
            valorMudou={setName}
            obrigatorio
            naoRenderizarQuando={modo === "login"}
          />
          <InputText
            tipo="email"
            label="Email"
            valor={email}
            valorMudou={setEmail}
            obrigatorio
          />
          <InputText
            tipo="password"
            label="Senha"
            valor={password}
            valorMudou={setPassword}
            obrigatorio
          />
          <InputText
            tipo="password"
            label="Confirma senha"
            valor={passConfirm}
            valorMudou={setPassConfirm}
            obrigatorio
            naoRenderizarQuando={modo === "login"}
          />
          <button
            onClick={submeter}
            disabled={loading}
            className={`
          flex justify-center
      w-full bg-blue-600 hover:bg-blue-500
      dark:bg-blue-700 dark:hover:bg-blue-600
      text-white rounded-lg px-4 py-3 mt-6
      `}
          >
            <Image
              src={imgLoading}
              alt="Carregando"
              hidden={!loading}
              width={24}
              className="mr-2"
            />
            {modo === "login" ? "Entrar" : "Cadastrar"}
          </button>
          {modo == "login" ? (
            <>
              <p className="my-4 dark:text-gray-300">
                Novo por aqui?{" "}
                <a
                  onClick={() => setModo("cadastro")}
                  className={`
                text-blue-600 hover:text-blue-500 font-semibold cursor-pointer
                `}
                >
                  &nbsp; &nbsp; Crie uma Conta Gratuitamente
                </a>
              </p>
            </>
          ) : (
            <p className="my-4">
              Já tem cadastro?
              <a
                onClick={() => setModo("login")}
                className={`
        text-blue-600 hover:text-blue-500 font-semibold cursor-pointer
        `}
              >
                &nbsp; &nbsp; Entre com suas credenciais
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
