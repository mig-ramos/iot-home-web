import ForceAutentication from "./forceAuthentication";
import { HeaderDashboard } from "./headerDashboard";

export default function LayoutPrivate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ForceAutentication>
        <HeaderDashboard />
        {children}
      </ForceAutentication>
    </div>
  );
}
