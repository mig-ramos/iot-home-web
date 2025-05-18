import { FiUser, FiLogOut } from "react-icons/fi";
import Link from "next/link";

export const Header = () => {
  let linkActive = "text-green-700 font-bold bg-white py-1 rounded-xl";
  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="font-bold text-3xl pl-1 hover:tracking-widest duration-300">
            <span className="text-blue-500">IOT</span>Home
          </h1>
        </Link>

        <div className="flex items-baseline gap-8">
          <Link href={"/dashboard"} className="flex gap-2">
            <FiUser size={26} color="blue" />
          </Link>
          <form action={""}>
            <button type="submit" className="flex gap-2 hover:cursor-pointer">
              <FiLogOut size={26} color="blue" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
