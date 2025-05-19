import { createContext, ReactNode, useEffect, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { toast } from "sonner";
import { api } from "services/apiClient";

type UserProps = {
  id: string;
  name: string;
  email: string;
  role: string;
};
type AuthContextData = {
  user: UserProps;
  carregando?: boolean;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
};
type SignInProps = {
  email: string;
  password: string;
};
type SignUpProps = {
  name: string;
  email: string;
  password: string;
};
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, "session.token");
    Router.push("/");
  } catch {
    console.log("Erro ao deslogar");
  }
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [carregando, setCarregando] = useState(true);
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "session.token": token } = parseCookies();
    if (token) {
      api
        .get("/user/me")
        .then((response) => {
          const { id, name, email, role }: any = response.data;
          setUser({
            id,
            name,
            email,
            role,
          });
        })
        .catch(() => {
          // Se deu erro, deslogar o user.
          signOut();
        });
      setCarregando(false);
    } else {
      setCarregando(false);
    }
  }, []);

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });
      const { id, name, role, token }: any = response.data;
      // const { accessToken }: any = response.data;
      setCookie(undefined, "session.token", token, {
        // setCookie(undefined, "session.token", token, {
        maxAge: 60 * 60 * 24 * 7, // Expirar em 7 dias
        path: "/", // quais caminhos terao acesso ao cookie
      });

      setUser({
        id,
        name,
        email,
        role,
      });
      setCarregando(false);
      // passar para as proximas requisiçoes o nosso token
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success("Loagado com sucesso!");

      // Redirecionar o user para a página /index
      Router.push("/dashboard");
    } catch (err) {
      toast.error("Erro ao acessar!");
    }
  }
  async function signUp({ name, email, password }: SignUpProps) {
    const response = await api.post("/user/add", {
      name,
      email,
      password,
    });
    toast.success("Conta criada com sucesso!");
    try {
      Router.push("/auth");
    } catch (err) {
      toast.error("Erro ao cadastrar!");
    }
  }
  return (
    <AuthContext.Provider
      value={{ user, carregando, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
