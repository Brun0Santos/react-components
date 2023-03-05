import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import { Dashboard } from "../pages"

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<Dashboard />} />
            </Switch>
        </BrowserRouter>

    )
}

export default Routes