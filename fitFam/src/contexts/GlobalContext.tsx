import { ReactNode } from "react";
import { UserProvider } from "./AuthenticationContext";

const GlobalContext = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default GlobalContext;
