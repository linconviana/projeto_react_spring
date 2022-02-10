import "./assets/styles/custom.scss";
import "./App.css";
import Routes from "Routes";
import { useState } from "react";
import { AuthContext, AuthContextData } from "AuthContext";

function App() {

  /* Compartilhar estado global entre os componentes */
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false
  })

  return (
    <>
      {/* AuthContext.Provider Compartilhar estado global entre os componentes */}
      <AuthContext.Provider value={{authContextData, setAuthContextData}}>
        <Routes />
      </AuthContext.Provider>
    </>
  );
}

export default App;
