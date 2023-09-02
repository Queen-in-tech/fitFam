import { Route, Routes } from "react-router-dom";
import GlobalContext from "./contexts/GlobalContext";
import AuthenticationPage from "./pages/AuthenticationPage";

function App() {
  return (
    <>
      <GlobalContext>
        <Routes>
          <Route path="/" element={<AuthenticationPage />}></Route>
        </Routes>
      </GlobalContext>
    </>
  );
}

export default App;
