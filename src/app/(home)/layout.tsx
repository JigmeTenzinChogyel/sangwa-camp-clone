import { Header } from "@/components";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
