import Login from "../components/Login";
import SignIn from "../components/SignIn";

interface GetUserProps {
  login: boolean;
  setLogin: (value: boolean) => void;
}

const GetUser = ({ login, setLogin }: GetUserProps) => {
  return (
    <div>
      {login ? <Login setLogin={setLogin} /> : <SignIn setLogin={setLogin} />}
    </div>
  );
};

export default GetUser;
