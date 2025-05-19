import ForcarAutenticacao from "./forceAuthentication";
import { HeaderDashboard } from "./headerDashboard";

export default function LayoutPrivate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ForcarAutenticacao>
        <HeaderDashboard />
        {children}
      </ForcarAutenticacao>
    </div>
  );
}
