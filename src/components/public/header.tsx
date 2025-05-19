import { useContext } from "react";
import Link from "next/link";
import { FiUser, FiLogOut, FiLogIn } from "react-icons/fi";
import { AuthContext } from "data/contexts/AuthContext";
import { canSSRGuest } from "data/utils/canRGuest";
import { useRouter } from "next/navigation";

export function Header() {
  const { signOut, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
            <span className="text-blue-500">IOT</span>Home
          </h1>
        </Link>

        <div className="flex items-baseline gap-8">
          {isAuthenticated ? (
            <Link href={"/dashboard"} className="flex gap-2">
              <FiUser size={26} color="blue" />
            </Link>
          ) : (
            <Link href={"/dashboard"} className="flex gap-2">
              <FiUser size={26} color="blue" />
            </Link>
          )}
          {isAuthenticated && (
            <button
              className="hover:text-white hover:font-bold text-center text-black hover:bg-yellow-400 rounded-xl  flex items-center justify-center dark:black dark:bg-white dark:hover:bg-yellow-500 dark:hover:border-yellow-700 dark:border-orange-700 m-2 py-1 px-4 ml-auto"
              onClick={signOut}
            >
              <FiLogOut size={26} color="blue" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
