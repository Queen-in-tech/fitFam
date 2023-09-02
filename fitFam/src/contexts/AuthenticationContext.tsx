import { ReactNode, createContext, useReducer } from "react";

interface State {
  email: string;
  password: string;
  confirmPassword: string;
  error: boolean;
  errorMsg: string;
}

type Action =
  | { type: "setEmail"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setPasswordAgain"; payload: string }
  | { type: "validateEmail" }
  | { type: "validatePassword" }
  | { type: "clearField" };

interface UserContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const UserContext = createContext<UserContextType | []>([]);

const initialState: State = {
  email: "",
  password: "",
  confirmPassword: "",
  error: false,
  errorMsg: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "setPasswordAgain":
      return {
        ...state,
        confrimPassword: action.payload,
      };
    case "validateEmail":
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);
      return {
        ...state,
        error: isValidEmail,
        errorMsg: isValidEmail ? "" : "Invalid email",
      };
    case "validatePassword":
      const passwordsMatch = state.password === state.confirmPassword;
      return {
        ...state,
        error: passwordsMatch,
        errorMsg: passwordsMatch ? "" : "Passwords do not match",
      };
    case "clearField":
      return { ...state, email: "", password: "", confirmPassword: "" };
  }
};

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
