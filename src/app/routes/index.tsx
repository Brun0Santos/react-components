import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Dashboard, Login, UserTeste } from "../pages";
import UseRefTestes from "../pages/userRef/UseRefTestes";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<UserTeste />} />
        <Route path="/use-ref" element={<UseRefTestes />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
