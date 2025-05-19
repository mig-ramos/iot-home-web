import ForcarAutenticacao from "./forceAuthentication";

export default function LayoutPrivate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ForcarAutenticacao>{children}</ForcarAutenticacao>
    </div>
  );
}
