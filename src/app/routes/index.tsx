import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import { Dashboard, Login } from "../pages"

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<Dashboard />} />
                <Route path="/login" element = {<Login />} />
            </Switch>
        </BrowserRouter>

    )
}

export default Routes