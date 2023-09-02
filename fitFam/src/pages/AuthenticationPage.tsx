import { useEffect, useState } from "react";
import LandingHero from "../components/LandingHero";
import GetUser from "../components/GetUser";

const AuthenticationPage = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    const timeout = setInterval(() => {
      setShowLanding(false);
    }, 3000);

    return () => clearInterval(timeout);
  }, []);

  return (
    <div>
      {showLanding ? (
        <LandingHero />
      ) : (
        <>{<GetUser login={login} setLogin={setLogin} />}</>
      )}
    </div>
  );
};

export default AuthenticationPage;
