export function Footer() {
  return (
    <footer
      className={`flex justify-center items-center w-full bg-zinc-200  dark:bg-gray-900 dark:text-gray-200 text-gray-600 h-10`}
    >
      <p className={`font-normal`}>
        &copy;{new Date().getFullYear()} todos direitos reservados by
        sidebit.dev
      </p>
    </footer>
  );
}
